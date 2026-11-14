/* ==========================================================
   answers.js : les réponses pré-écrites de l'assistante.

   Chaque sujet a :
     - chip     : le texte du bouton (facultatif : sans chip, pas de bouton)
     - keywords : mots qui déclenchent ce sujet dans une question libre
                  (en minuscules, sans accents, français et anglais)
     - answer   : la réponse, 3 ou 4 phrases maximum
     - links    : liens affichés sous la réponse

   Règles de vérité : troisième personne, projet d'équipe annoncé
   comme tel, pas diplômée avant septembre 2027, rien d'inventé.
   ========================================================== */

const L = {
  cv:         { label: { fr: "Télécharger le CV", en: "Download CV" }, href: "assets/CV_Donia_Hali.pdf" },
  experience: { label: { fr: "Voir l'expérience", en: "See experience" }, href: "#experience" },
  projets:    { label: { fr: "Voir les projets", en: "See projects" }, href: "#projets" },
  skills:     { label: { fr: "Voir les compétences", en: "See skills" }, href: "#competences" },
  parcours:   { label: { fr: "Voir le parcours", en: "See background" }, href: "#parcours" },
  contact:    { label: { fr: "La contacter", en: "Contact her" }, href: "#contact" },
  github:     { label: { fr: "GitHub", en: "GitHub" }, href: "https://github.com/DoniaHali1" },
  qosbuddy:   { label: { fr: "Dépôt QoSBuddy", en: "QoSBuddy repository" }, href: "https://github.com/DoniaHali1/QoSBuddy-project-" }
};

const TOPICS = [

  /* ---------- Sujets avec bouton ---------- */
  {
    id: "profil",
    chip: { fr: "Son profil en 30 secondes", en: "Her profile in 30 seconds" },
    keywords: ["profil", "profile", "resume", "summary", "summarize", "presente", "qui est", "who is", "about", "propos"],
    answer: {
      fr: "Donia est élève ingénieure en data science à ESPRIT (Tunis), diplôme prévu en septembre 2027. Elle a fait quatre stages, dont un chez Orange Tunisie où elle a construit un assistant RAG et une détection d'anomalies sur des données SMS. Elle cherche un stage de fin d'études de 6 mois à partir de janvier 2027, en France, en Europe ou en Tunisie.",
      en: "Donia is a data science engineering student at ESPRIT (Tunis), graduating in September 2027. She has completed four internships, including one at Orange Tunisia where she built a RAG assistant and anomaly detection on SMS data. She is looking for a 6-month end-of-studies internship from January 2027, in France, Europe or Tunisia."
    },
    links: [L.cv, L.experience]
  },
  {
    id: "experience",
    chip: { fr: "Expérience en entreprise", en: "Work experience" },
    keywords: ["experience", "experiences", "stage", "stages", "internship", "internships", "entreprise", "company", "companies"],
    answer: {
      fr: "Quatre stages. Orange Tunisie (2026) : assistant RAG avec un modèle exécuté en local, pipeline ELK et détection d'anomalies. Banque de Tunisie (2025) : tableau de bord Power BI utilisé par la direction. BI4YOU (2024) : modèles de régression et de classification, pipelines ETL Talend. Parhelion (2023) : rapports Power BI pour des clients.",
      en: "Four internships. Orange Tunisia (2026): RAG assistant with a locally run model, ELK pipeline and anomaly detection. Banque de Tunisie (2025): Power BI dashboard used by management. BI4YOU (2024): regression and classification models, Talend ETL pipelines. Parhelion (2023): Power BI reports for clients."
    },
    links: [L.experience, L.cv]
  },
  {
    id: "projets",
    chip: { fr: "Projets IA et data", en: "AI and data projects" },
    keywords: ["projet", "projets", "project", "projects", "realisation", "portfolio", "construit", "built"],
    answer: {
      fr: "Trois projets principaux. SUMO Traffic Agents (équipe de 7) : des agents entraînés par renforcement pilotent des feux de circulation, Donia a développé l'agent incident. QoSBuddy (projet d'équipe) : plateforme IA de qualité de service réseau, six modèles de prévision comparés. Reproduction de l'article « Show, Attend and Tell » sur le légendage d'images.",
      en: "Three main projects. SUMO Traffic Agents (team of 7): reinforcement learning agents control traffic lights, Donia built the incident agent. QoSBuddy (team project): AI platform for network quality of service, six forecasting models benchmarked. A reproduction of the \"Show, Attend and Tell\" image captioning paper."
    },
    links: [L.projets, L.github]
  },
  {
    id: "formation",
    chip: { fr: "Formation", en: "Education" },
    keywords: ["formation", "etude", "etudes", "ecole", "esprit", "diplome", "diplomee", "education", "school", "degree", "study", "studies", "graduate", "graduated", "graduation", "licence", "bachelor", "universite", "university", "cours", "courses"],
    answer: {
      fr: "Donia prépare un diplôme d'ingénieur en data science à ESPRIT (Tunis), de 2024 à septembre 2027. Le programme est labellisé EUR-ACE et accrédité par la Commission des Titres d'Ingénieur française. Elle n'est donc pas encore diplômée. Avant cela, elle a obtenu une licence en business intelligence à la faculté de Nabeul (2021 à 2024).",
      en: "Donia is studying for an engineering degree in data science at ESPRIT (Tunis), from 2024 to September 2027. The program is EUR-ACE labeled and accredited by the French Commission des Titres d'Ingénieur. She has not graduated yet. Before that, she earned a bachelor's degree in business intelligence in Nabeul (2021 to 2024)."
    },
    links: [L.parcours]
  },
  {
    id: "disponibilite",
    chip: { fr: "Disponibilité et conditions", en: "Availability and terms" },
    keywords: ["disponible", "disponibilite", "available", "availability", "quand", "when", "start", "debut", "commencer", "duree", "duration", "combien de temps", "how long", "where", "lieu", "location", "mobilite", "france", "europe", "tunisie", "tunisia", "allemagne", "germany", "belgique", "belgium", "suisse", "switzerland", "luxembourg", "espagne", "spain", "italie", "italy", "paris", "etranger", "abroad", "remote", "teletravail", "conditions"],
    answer: {
      fr: "Donia est disponible à partir de janvier 2027 pour un stage de fin d'études de 6 mois. Elle est mobile en France, en Europe et en Tunisie. Le stage fait l'objet d'une convention tripartite établie par ESPRIT.",
      en: "Donia is available from January 2027 for a 6-month end-of-studies internship. She can work in France, Europe or Tunisia. The internship is covered by a three-party agreement issued by ESPRIT."
    },
    links: [L.contact, L.cv]
  },

  /* ---------- Sujets sans bouton (questions libres) ---------- */
  {
    id: "orange",
    keywords: ["orange", "telecom", "elk", "sms", "cdr"],
    answer: {
      fr: "Chez Orange Tunisie (juillet et août 2026), Donia a construit un assistant RAG sur environ 6 000 passages de documentation, avec un modèle de langage exécuté en local pour qu'aucune donnée ne sorte de l'infrastructure. Elle a aussi monté un pipeline ELK indexant 377 660 enregistrements SMS et une détection d'anomalies horaire suivie dans Kibana. Le code et les données appartiennent à l'entreprise : elle peut en parler en entretien, mais rien n'est publié.",
      en: "At Orange Tunisia (July and August 2026), Donia built a RAG assistant over about 6,000 documentation passages, with a locally run language model so that no data leaves the infrastructure. She also set up an ELK pipeline indexing 377,660 SMS records and hourly anomaly detection monitored in Kibana. Code and data belong to the company: she can discuss it in an interview, but nothing is published."
    },
    links: [L.experience]
  },
  {
    id: "banque",
    keywords: ["banque", "bank", "photovoltaique", "photovoltaic", "energie", "energy"],
    answer: {
      fr: "À la Banque de Tunisie (juin à août 2025), Donia a construit un tableau de bord Power BI avec des indicateurs en DAX. Il compare les agences équipées en photovoltaïque et les autres, et il est utilisé par la direction.",
      en: "At Banque de Tunisie (June to August 2025), Donia built a Power BI dashboard with DAX KPIs. It compares photovoltaic and non-photovoltaic branches and is used by management."
    },
    links: [L.experience]
  },
  {
    id: "bi4you",
    keywords: ["bi4you", "etl", "regression", "classification"],
    answer: {
      fr: "Chez BI4YOU (février à mai 2024), Donia a construit et évalué des modèles de régression et de classification pour prévoir et segmenter des indicateurs métier. Elle a développé des pipelines ETL Talend avec contrôles de qualité, et intégré les prédictions aux tableaux de bord.",
      en: "At BI4YOU (February to May 2024), Donia built and evaluated regression and classification models to forecast and segment business indicators. She developed Talend ETL pipelines with data quality controls and integrated the predictions into dashboards."
    },
    links: [L.experience]
  },
  {
    id: "parhelion",
    keywords: ["parhelion", "pl-300", "pl300"],
    answer: {
      fr: "Chez Parhelion Consulting and Training (juin à août 2023), son premier stage, Donia a créé des rapports Power BI interactifs pour des clients et suivi une formation basée sur la certification Microsoft PL-300.",
      en: "At Parhelion Consulting and Training (June to August 2023), her first internship, Donia created interactive Power BI reports for clients and completed training based on the Microsoft PL-300 certification."
    },
    links: [L.experience]
  },
  {
    id: "sumo",
    keywords: ["sumo", "trafic", "traffic", "feux", "renforcement", "reinforcement", "multi-agent", "multi-agents", "multiagent", "incident", "orchestrateur", "orchestrator"],
    answer: {
      fr: "SUMO Traffic Agents est un projet d'équipe (7 personnes), mené de septembre à novembre 2026. Des orchestrateurs à base de règles délèguent à cinq agents entraînés par renforcement (PPO) le pilotage des feux d'un corridor de Tunis simulé. Donia a développé l'agent incident, et contribué de façon plus limitée à l'orchestrateur et à l'explicabilité. Le système est comparé à un contrôle à cycle fixe et à la méthode max-pressure.",
      en: "SUMO Traffic Agents is a team project (7 people), carried out from September to November 2026. Rule-based orchestrators delegate to five reinforcement learning agents (PPO) that control the traffic lights of a simulated Tunis corridor. Donia built the incident agent and made a smaller contribution to the orchestrator and to explainability. The system is benchmarked against fixed-time and max-pressure control."
    },
    links: [L.projets]
  },
  {
    id: "qosbuddy",
    keywords: ["qosbuddy", "qos", "reseau", "network", "forecasting", "prevision"],
    answer: {
      fr: "QoSBuddy est un projet d'équipe (janvier à mai 2026) : une plateforme IA pour la qualité de service réseau, avec détection d'anomalies, prévision et analyse de causes racines. Six modèles de prévision ont été comparés sous un même protocole (GRU, GRU-AE, TCNN, ARIMA, k-NN, XGBoost), et des agents IA s'appuient sur un modèle Mistral ajusté avec LoRA.",
      en: "QoSBuddy is a team project (January to May 2026): an AI platform for network quality of service, with anomaly detection, forecasting and root-cause analysis. Six forecasting models were benchmarked under one protocol (GRU, GRU-AE, TCNN, ARIMA, k-NN, XGBoost), and AI agents rely on a Mistral model fine-tuned with LoRA."
    },
    links: [L.qosbuddy, L.projets]
  },
  {
    id: "captioning",
    keywords: ["captioning", "caption", "legendage", "image", "images", "attention", "vision", "paper", "xu"],
    answer: {
      fr: "Donia a reproduit l'article « Show, Attend and Tell » (Xu et al., ICML 2015) sur le légendage d'images, avec attention douce et dure sur Flickr8k, Flickr30k et MS COCO. Le projet inclut une détection automatique des erreurs de légende par analyse de dépendances et des cartes d'attention pour l'explicabilité.",
      en: "Donia reproduced the \"Show, Attend and Tell\" paper (Xu et al., ICML 2015) on image captioning, with soft and hard attention on Flickr8k, Flickr30k and MS COCO. The project includes automatic caption error detection via dependency parsing and attention maps for explainability."
    },
    links: [L.projets]
  },
  {
    id: "competences",
    keywords: ["competence", "competences", "skill", "skills", "stack", "technologie", "technologies", "outils", "tools", "langage", "langages", "maitrise"],
    answer: {
      fr: "En entreprise, Donia a pratiqué Python, SQL, la suite ELK, le RAG avec modèle local, Power BI et Talend. En projet, elle a pratiqué PyTorch, TensorFlow, l'ajustement LoRA, l'apprentissage par renforcement (PPO), Docker et FastAPI. La section Compétences sépare ces deux niveaux.",
      en: "In companies, Donia has practiced Python, SQL, the ELK stack, RAG with a local model, Power BI and Talend. In projects, she has practiced PyTorch, TensorFlow, LoRA fine-tuning, reinforcement learning (PPO), Docker and FastAPI. The Skills section keeps these two levels apart."
    },
    links: [L.skills]
  },
  {
    id: "ia-generative",
    keywords: ["llm", "llms", "generative", "genai", "agents", "fine-tuning", "finetuning"],
    answer: {
      fr: "Oui. En entreprise, Donia a construit chez Orange Tunisie un assistant RAG avec un modèle exécuté en local (Qwen2.5 via Ollama). En projet d'équipe, sur QoSBuddy, elle a travaillé avec des agents IA sur un modèle Mistral ajusté avec LoRA.",
      en: "Yes. In a company, Donia built a RAG assistant at Orange Tunisia with a locally run model (Qwen2.5 via Ollama). In a team project, QoSBuddy, she worked with AI agents on a Mistral model fine-tuned with LoRA."
    },
    links: [L.experience, L.projets]
  },
  {
    id: "machine-learning",
    keywords: ["deep learning", "machine learning", "deep", "ml", "dl", "neurones", "neural", "cnn", "lstm", "gru", "modele", "modeles", "model", "models"],
    answer: {
      fr: "En entreprise, Donia a construit et évalué des modèles de régression et de classification chez BI4YOU. Le deep learning, elle l'a pratiqué en projet : réseaux récurrents (GRU) pour la prévision sur QoSBuddy, CNN et LSTM avec attention pour le légendage d'images, apprentissage par renforcement sur SUMO. Elle a aussi trois certifications NVIDIA DLI.",
      en: "In a company, Donia built and evaluated regression and classification models at BI4YOU. She has practiced deep learning in projects: recurrent networks (GRU) for forecasting on QoSBuddy, CNN and LSTM with attention for image captioning, reinforcement learning on SUMO. She also holds three NVIDIA DLI certifications."
    },
    links: [L.projets, L.skills]
  },
  {
    id: "langues",
    keywords: ["langue", "langues", "language", "languages", "anglais", "english", "francais", "french", "arabe", "arabic", "parle", "speak", "speaks"],
    answer: {
      fr: "Donia parle français (C1), anglais (C1) et arabe (langue maternelle).",
      en: "Donia speaks French (C1), English (C1) and Arabic (native)."
    },
    links: [L.parcours]
  },
  {
    id: "certifications",
    keywords: ["certification", "certifications", "certificat", "nvidia", "aws", "cloud"],
    answer: {
      fr: "Donia a trois certifications NVIDIA DLI (fondamentaux du deep learning, détection d'anomalies, NLP avec transformers) et la certification AWS Academy Cloud Foundations.",
      en: "Donia holds three NVIDIA DLI certifications (deep learning fundamentals, anomaly detection, transformer-based NLP) and AWS Academy Cloud Foundations."
    },
    links: [L.parcours]
  },
  {
    id: "extrascolaire",
    keywords: ["extrascolaire", "extra-scolaire", "extracurricular", "association", "associatif", "junior", "entrepreneur", "entrepreneuriat", "entrepreneurship", "leadership", "activites", "activities", "engagement", "engagements", "benevolat"],
    answer: {
      fr: "Donia a été consultante qualité à la Confédération Tunisienne des Junior Entreprises (2024 à 2025) et secrétaire générale de Néapolis Junior Entreprise (2022 à 2023). Elle a obtenu deux fois le statut national d'étudiant-entrepreneur.",
      en: "Donia was Quality Consultant at the Tunisian Confederation of Junior Enterprises (2024 to 2025) and Secretary General of Néapolis Junior Enterprise (2022 to 2023). She was awarded the National Student-Entrepreneur Status twice."
    },
    links: [L.parcours]
  },
  {
    id: "convention",
    keywords: ["convention", "visa", "titre de sejour", "permit", "agreement", "administratif", "papiers"],
    answer: {
      fr: "Le stage fait l'objet d'une convention tripartite établie par ESPRIT. Pour les modalités administratives et le calendrier, Donia vous répondra directement.",
      en: "The internship is covered by a three-party agreement issued by ESPRIT. For administrative details and timing, Donia will answer you directly."
    },
    links: [L.contact]
  },
  {
    id: "contact",
    keywords: ["contact", "contacter", "email", "e-mail", "mail", "linkedin", "joindre", "reach", "entretien", "interview", "rendez-vous"],
    answer: {
      fr: "Vous pouvez écrire à Donia à doniahali123@gmail.com ou la contacter sur LinkedIn. Les liens sont dans la section Contact.",
      en: "You can write to Donia at doniahali123@gmail.com or reach her on LinkedIn. The links are in the Contact section."
    },
    links: [L.contact, L.cv]
  },
  {
    id: "cv",
    keywords: ["cv", "curriculum", "pdf", "telecharger", "download"],
    answer: {
      fr: "Voici son CV au format PDF.",
      en: "Here is her CV as a PDF."
    },
    links: [L.cv]
  },
  {
    id: "salaire",
    keywords: ["salaire", "salary", "remuneration", "gratification", "pay", "pretentions"],
    answer: {
      fr: "Ce point se discute directement avec Donia.",
      en: "This is best discussed directly with Donia."
    },
    links: [L.contact]
  },
  {
    id: "assistante",
    keywords: ["assistante", "assistant", "chatbot", "robot", "comment fonctionnes", "how do you work", "qui es-tu", "who are you"],
    answer: {
      fr: "Je suis l'assistante de ce portfolio, un projet personnel de Donia. Je réponds uniquement à partir d'une base de connaissances qu'elle a rédigée et vérifiée. Si une information n'y figure pas, je le dis plutôt que d'inventer.",
      en: "I'm this portfolio's assistant, a personal project by Donia. I only answer from a knowledge base she wrote and checked. If something isn't in it, I say so rather than make it up."
    },
    links: [L.projets]
  },
  {
    id: "bonjour",
    keywords: ["bonjour", "salut", "hello", "hi", "hey", "bonsoir"],
    answer: {
      fr: "Bonjour. Vous pouvez me demander son profil, ses stages, ses projets, sa formation ou sa disponibilité.",
      en: "Hello. You can ask me about her profile, internships, projects, education or availability."
    },
    links: []
  }
];

/* Réponse quand rien ne correspond : on le dit, on n'invente pas. */
const FALLBACK = {
  answer: {
    fr: "Je n'ai pas cette information. Vous pouvez la demander directement à Donia, ou essayer une des questions proposées.",
    en: "I don't have that information. You can ask Donia directly, or try one of the suggested questions."
  },
  links: [L.contact, L.cv]
};

/* Réponses construites automatiquement quand la question cite une
   technologie de la section Compétences (voir matchSkill dans app.js). */
const SKILL_ANSWER = {
  company: {
    fr: "Oui. {skill} fait partie des outils que Donia a pratiqués en entreprise, sur des données réelles.",
    en: "Yes. {skill} is one of the tools Donia has practiced in a company, on real data."
  },
  project: {
    fr: "Oui, en projet. {skill} fait partie des outils que Donia a pratiqués dans ses projets académiques ou personnels, pas encore en entreprise.",
    en: "Yes, in projects. {skill} is one of the tools Donia has practiced in academic or personal projects, not yet in a company."
  },
  course: {
    fr: "Donia a vu {skill} pendant sa formation, en cours et en travaux pratiques, sans projet complet ni usage en entreprise.",
    en: "Donia covered {skill} in her coursework and lab work, without a full project or company use."
  }
};

/* La question porte sur une technologie qui n'est pas dans la section Compétences. */
const UNKNOWN_SKILL = {
  answer: {
    fr: "Cette technologie ne figure pas dans les compétences de Donia. La section Compétences liste ce qu'elle a pratiqué en entreprise, en projet et en formation.",
    en: "This technology is not among Donia's listed skills. The Skills section shows what she has practiced in companies, in projects and in coursework."
  },
  links: [L.skills]
};

/* La question n'a rien à voir avec le profil de Donia. */
const OUT_OF_SCOPE = {
  answer: {
    fr: "Je réponds uniquement aux questions sur le parcours de Donia : stages, projets, formation, compétences, disponibilité.",
    en: "I only answer questions about Donia's background: internships, projects, education, skills, availability."
  },
  links: []
};
