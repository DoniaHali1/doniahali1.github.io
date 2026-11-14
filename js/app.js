/* ==========================================================
   app.js : la logique du site.
     1. Configuration
     2. Langue (français / anglais)
     3. Affichage des sections à partir de data.js
     4. L'assistante : boutons, questions libres, réponses
   ========================================================== */

/* ---------- 1. Configuration ---------- */
const CONFIG = {
  // Adresse du backend Python une fois en ligne. Vide = pas encore déployé.
  apiUrl: "",
  // Adresse du backend lancé sur ton ordinateur (uvicorn). Utilisée seulement
  // quand le site est ouvert en local. Si le backend ne répond pas, le site
  // revient tout seul aux réponses par mots-clés.
  devApiUrl: "http://127.0.0.1:8000/ask",
  timeoutMs: 4000,
  maxQuestionLength: 200
};

/* ---------- 2. Langue ---------- */
let lang = "fr";
try { lang = localStorage.getItem("lang") || "fr"; } catch (e) { /* stockage indisponible */ }

function t(text) {
  if (typeof text === "string") return text;
  return text[lang] || text.fr;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/* ---------- 3. Affichage des sections ---------- */
function renderCard(item) {
  const card = el("article", "card");
  const head = el("div", "card-head");
  const h3 = el("h3", null, t(item.title));
  if (item.tag) h3.appendChild(el("span", "card-tag", t(item.tag)));
  head.appendChild(h3);
  head.appendChild(el("span", "card-meta", t(item.meta)));
  card.appendChild(head);

  const ul = el("ul");
  t(item.points).forEach(function (p) { ul.appendChild(el("li", null, p)); });
  card.appendChild(ul);

  if (item.limit) {
    const limit = el("p", "card-limit");
    limit.appendChild(el("strong", null, t(DATA.ui.limit) + " : "));
    limit.appendChild(document.createTextNode(t(item.limit)));
    card.appendChild(limit);
  }
  if (item.stack) card.appendChild(renderPills(item.stack));
  if (item.link) {
    const a = el("a", "card-link", t(item.link.label));
    a.href = item.link.href; a.target = "_blank"; a.rel = "noopener";
    card.appendChild(a);
  }
  return card;
}

function renderPills(items) {
  const box = el("div", "stack");
  items.forEach(function (s) { box.appendChild(el("span", "pill", s)); });
  return box;
}

function renderCardSection(id, section) {
  const root = document.getElementById(id);
  root.replaceChildren(el("h2", null, t(section.title)));
  section.items.forEach(function (item) { root.appendChild(renderCard(item)); });
}

function renderSkills() {
  const root = document.getElementById("competences");
  root.replaceChildren(el("h2", null, t(DATA.skills.title)));
  const cols = el("div", "columns");
  DATA.skills.groups.forEach(function (group) {
    const col = el("div", "card");
    col.appendChild(el("h3", null, t(group.title)));
    col.appendChild(el("p", "hint", t(group.hint)));
    col.appendChild(renderPills(group.items));
    cols.appendChild(col);
  });
  root.appendChild(cols);
}

function renderBackground() {
  const root = document.getElementById("parcours");
  root.replaceChildren(el("h2", null, t(DATA.background.title)));
  const cols = el("div", "columns");
  DATA.background.groups.forEach(function (group) {
    const col = el("div", "card");
    col.appendChild(el("h3", null, t(group.title)));
    const ul = el("ul");
    t(group.items).forEach(function (line) { ul.appendChild(el("li", null, line)); });
    col.appendChild(ul);
    cols.appendChild(col);
  });
  root.appendChild(cols);
}

function renderContact() {
  const root = document.getElementById("contact");
  root.replaceChildren(el("h2", null, t(DATA.contact.title)));
  const box = el("div", "contact");
  const photo = el("img");
  photo.src = "assets/photo.jpg"; photo.alt = "Donia Hali"; photo.width = 96; photo.height = 96;
  box.appendChild(photo);
  const body = el("div");
  body.appendChild(el("p", null, t(DATA.contact.text)));
  const links = el("div", "contact-links");
  [
    { label: DATA.links.email, href: "mailto:" + DATA.links.email },
    { label: "LinkedIn", href: DATA.links.linkedin },
    { label: "GitHub", href: DATA.links.github },
    { label: t(DATA.ui.downloadCv), href: DATA.links.cv }
  ].forEach(function (link) {
    const a = el("a", "btn", link.label);
    a.href = link.href;
    if (link.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
    links.appendChild(a);
  });
  body.appendChild(links);
  box.appendChild(body);
  root.appendChild(box);
}

function renderPage() {
  document.documentElement.lang = lang;
  document.getElementById("lang-toggle").textContent = lang === "fr" ? "EN" : "FR";
  document.getElementById("hero-title").textContent = t(DATA.hero.title);
  document.getElementById("hero-facts").textContent = t(DATA.hero.facts);
  const tags = document.getElementById("hero-tags");
  tags.replaceChildren();
  t(DATA.hero.tags).forEach(function (tag) { tags.appendChild(el("span", "tag", tag)); });
  document.getElementById("assistant-name").textContent = t(DATA.ui.assistantName);
  document.getElementById("assistant-status").textContent = t(DATA.ui.online);

  const nav = document.getElementById("nav");
  nav.replaceChildren();
  DATA.nav.forEach(function (item) {
    const a = el("a", null, t(item.label));
    a.href = item.href;
    nav.appendChild(a);
  });

  renderCardSection("experience", DATA.experience);
  renderCardSection("projets", DATA.projects);
  renderSkills();
  renderBackground();
  renderContact();
  document.getElementById("footer").textContent = t(DATA.ui.footer);
  renderAssistant();
}

/* ---------- 4. L'assistante ---------- */
const thread = document.getElementById("thread");

function addMessage(who, text, links) {
  const msg = el("div", "msg " + (who === "user" ? "msg-user" : "msg-bot"), text);
  if (links && links.length) {
    const box = el("div", "msg-links");
    links.forEach(function (link) {
      const a = el("a", null, t(link.label) + " →");
      a.href = link.href;
      if (link.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      if (link.href.indexOf(".pdf") > -1) a.setAttribute("download", "");
      box.appendChild(a);
    });
    msg.appendChild(box);
  }
  thread.appendChild(msg);
  // On ne garde que les 2 derniers échanges pour que la zone reste courte.
  while (thread.children.length > 4) thread.firstChild.remove();
  return msg;
}

function renderAssistant() {
  thread.replaceChildren();
  addMessage("bot", t(DATA.ui.greeting));

  const chips = document.getElementById("chips");
  chips.replaceChildren();
  TOPICS.filter(function (topic) { return topic.chip; }).forEach(function (topic) {
    const button = el("button", "chip", t(topic.chip));
    button.type = "button";
    button.addEventListener("click", function () {
      addMessage("user", t(topic.chip));
      addMessage("bot", t(topic.answer), topic.links);
    });
    chips.appendChild(button);
  });

  const input = document.getElementById("ask-input");
  input.placeholder = t(DATA.ui.placeholder);
  input.maxLength = CONFIG.maxQuestionLength;
  document.getElementById("ask-send").textContent = t(DATA.ui.send);
  document.getElementById("assistant-note").textContent = t(DATA.ui.note);
}

/* Met une phrase en minuscules, sans accents ni ponctuation. */
function normalize(text) {
  return text.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9+#.\- ]/g, " ")
    .replace(/\.(?![a-z0-9])/g, " ")
    .replace(/\s+/g, " ").trim();
}

/* Cherche le sujet dont les mots-clés correspondent le mieux à la question. */
function matchTopic(question) {
  const q = " " + normalize(question) + " ";
  const words = q.trim().split(" ");
  let best = null;
  let bestScore = 0;
  TOPICS.forEach(function (topic) {
    let score = 0;
    topic.keywords.forEach(function (keyword) {
      const found = keyword.indexOf(" ") > -1
        ? q.indexOf(" " + keyword + " ") > -1
        : words.indexOf(keyword) > -1;
      if (found) score += keyword.length;
    });
    if (score > bestScore) { bestScore = score; best = topic; }
  });
  return best;
}

/* Cherche si la question cite une technologie de la section Compétences. */
function matchSkill(question) {
  const words = normalize(question).split(" ");
  const levels = ["company", "project", "course"];
  for (let g = 0; g < DATA.skills.groups.length; g++) {
    const items = DATA.skills.groups[g].items;
    for (let i = 0; i < items.length; i++) {
      const parts = normalize(items[i]).split(" ");
      const allFound = parts.every(function (part) { return words.indexOf(part) > -1; });
      if (allFound) return { skill: items[i], level: levels[g] };
    }
  }
  return null;
}

function skillAnswer(skill) {
  return { text: t(SKILL_ANSWER[skill.level]).replace("{skill}", skill.skill), links: [L.skills] };
}

/* Réponse locale, sans serveur : sujet précis, sinon compétence citée, sinon sujet général, sinon « je ne sais pas ». */
function answerLocally(question) {
  const topic = matchTopic(question);
  // Un sujet précis (un stage, un projet) passe avant une simple mention de technologie.
  if (topic && !topic.chip && topic.id !== "competences") return { text: t(topic.answer), links: topic.links };
  const skill = matchSkill(question);
  if (skill) return skillAnswer(skill);
  if (topic) return { text: t(topic.answer), links: topic.links };
  return { text: t(FALLBACK.answer), links: FALLBACK.links };
}

/* ---------- Backend Python (routeur d'intention + moteur de recherche) ---------- */
let backendAvailable = true;

function backendUrl() {
  if (CONFIG.apiUrl) return CONFIG.apiUrl;
  const local = location.protocol === "file:" || location.hostname === "localhost" || location.hostname === "127.0.0.1";
  return local ? CONFIG.devApiUrl : "";
}

async function askBackend(question) {
  const controller = new AbortController();
  const timer = setTimeout(function () { controller.abort(); }, CONFIG.timeoutMs);
  try {
    const response = await fetch(backendUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: question, lang: lang }),
      signal: controller.signal
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

/* Transforme la réponse du backend en message à afficher. */
function answerFromBackend(question, data) {
  let result;
  if (data.answer) {
    result = { text: data.answer, links: [] };
  } else if (data.intent === "hors_sujet") {
    result = { text: t(OUT_OF_SCOPE.answer), links: OUT_OF_SCOPE.links };
  } else if (data.intent === "technologie") {
    const skill = matchSkill(question);
    result = skill ? skillAnswer(skill) : { text: t(UNKNOWN_SKILL.answer), links: UNKNOWN_SKILL.links };
  } else {
    const topic = TOPICS.find(function (item) { return item.id === data.intent; });
    // Sujet « inconnu » (confiance trop basse) : on retombe sur les mots-clés.
    if (!topic) return answerLocally(question);
    result = { text: t(topic.answer), links: topic.links };
  }
  result.meta = t(DATA.ui.detected) + " : " + data.intent + " · " + t(DATA.ui.confidence) + " " + Math.round(data.confidence * 100) + " %";
  return result;
}

document.getElementById("ask").addEventListener("submit", async function (event) {
  event.preventDefault();
  const input = document.getElementById("ask-input");
  const question = input.value.trim();
  if (!question) {
    input.placeholder = t(DATA.ui.empty);
    input.focus();
    return;
  }
  input.value = "";
  input.placeholder = t(DATA.ui.placeholder);
  addMessage("user", question);

  let result;
  if (backendUrl() && backendAvailable) {
    const waiting = addMessage("bot", "");
    waiting.classList.add("msg-wait");
    waiting.innerHTML = "<span></span><span></span><span></span>";
    try {
      result = answerFromBackend(question, await askBackend(question));
    } catch (error) {
      backendAvailable = false;   // backend éteint : on n'insiste pas jusqu'au rechargement
      result = answerLocally(question);
    }
    waiting.remove();
  } else {
    result = answerLocally(question);
  }
  const message = addMessage("bot", result.text, result.links);
  if (result.meta) message.appendChild(el("div", "msg-meta", result.meta));
});

document.getElementById("lang-toggle").addEventListener("click", function () {
  lang = lang === "fr" ? "en" : "fr";
  try { localStorage.setItem("lang", lang); } catch (e) { /* stockage indisponible */ }
  renderPage();
});

renderPage();
