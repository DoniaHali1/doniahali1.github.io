/* ==========================================================
   data.js : TOUT le contenu affiché dans les sections du site.
   Pour corriger un texte, c'est ici. Chaque texte existe en
   français (fr) et en anglais (en).
   Règle : ne rien écrire ici qui ne soit pas sur le CV.
   ========================================================== */

const DATA = {

  links: {
    email: "doniahali123@gmail.com",
    linkedin: "https://www.linkedin.com/in/donia-hali-499ab1221",
    github: "https://github.com/DoniaHali1",
    cv: "assets/CV_Donia_Hali.pdf"
  },

  hero: {
    title: { fr: "Donia Hali, élève ingénieure en data science", en: "Donia Hali, data science engineering student" },
    tags: {
      fr: ["Data science", "Machine learning", "IA générative", "Agents"],
      en: ["Data science", "Machine learning", "Generative AI", "Agents"]
    },
    facts: {
      fr: "Stage de fin d'études de 6 mois, à partir de janvier 2027. France, Europe ou Tunisie.",
      en: "6-month end-of-studies internship from January 2027. France, Europe or Tunisia."
    }
  },

  nav: [
    { href: "#experience", label: { fr: "Expérience", en: "Experience" } },
    { href: "#projets", label: { fr: "Projets", en: "Projects" } },
    { href: "#competences", label: { fr: "Compétences", en: "Skills" } },
    { href: "#parcours", label: { fr: "Parcours", en: "Background" } },
    { href: "#contact", label: { fr: "Contact", en: "Contact" } }
  ],

  /* ---------- Expérience en entreprise ---------- */
  experience: {
    title: { fr: "Expérience en entreprise", en: "Professional experience" },
    items: [
      {
        title: { fr: "Stagiaire data scientist", en: "Data Scientist Intern" },
        meta: { fr: "Orange Tunisie, Tunis · juil. à août 2026", en: "Orange Tunisia, Tunis · Jul to Aug 2026" },
        points: {
          fr: [
            "Assistant RAG sur environ 6 000 passages de documentation technique, avec un modèle de langage exécuté en local (Qwen2.5 via Ollama) : aucune donnée ne sort de l'infrastructure.",
            "Pipeline ELK indexant 377 660 enregistrements SMS, dont la structure de champs non documentée a été reconstituée par rétro-ingénierie.",
            "Détection d'anomalies horaire par statistiques robustes (médiane et MAD), suivie dans Kibana."
          ],
          en: [
            "RAG assistant over about 6,000 passages of technical documentation, with a locally run language model (Qwen2.5 via Ollama): no data leaves the infrastructure.",
            "ELK pipeline indexing 377,660 SMS records, whose undocumented field layout was reverse-engineered.",
            "Hourly anomaly detection with robust statistics (median and MAD), monitored in Kibana."
          ]
        },
        limit: {
          fr: "Le seuil de détection est statistique, pas appris. L'assistant n'a pas été évalué sur un jeu de questions de référence. Code et données appartiennent à l'entreprise et ne sont pas publiés.",
          en: "The detection threshold is statistical, not learned. The assistant was not evaluated on a reference question set. Code and data belong to the company and are not published."
        },
        stack: ["Python", "Elasticsearch", "Logstash", "Kibana", "RAG", "Ollama"]
      },
      {
        title: { fr: "Stagiaire data analyst", en: "Data Analyst Intern" },
        meta: { fr: "Banque de Tunisie, Tunis · juin à août 2025", en: "Banque de Tunisie, Tunis · Jun to Aug 2025" },
        points: {
          fr: ["Tableau de bord Power BI (indicateurs en DAX) comparant les agences équipées en photovoltaïque et les autres, utilisé par la direction."],
          en: ["Power BI dashboard (DAX KPIs) comparing photovoltaic and non-photovoltaic branches, used by management."]
        },
        stack: ["Power BI", "DAX"]
      },
      {
        title: { fr: "Stagiaire business intelligence et machine learning", en: "Business Intelligence and Machine Learning Intern" },
        meta: { fr: "BI4YOU, Tunis · févr. à mai 2024", en: "BI4YOU, Tunis · Feb to May 2024" },
        points: {
          fr: [
            "Modèles de régression et de classification pour prévoir et segmenter des indicateurs métier, intégrés aux tableaux de bord.",
            "Pipelines ETL Talend intégrant des sources hétérogènes, avec contrôles de qualité des données."
          ],
          en: [
            "Regression and classification models to forecast and segment business indicators, integrated into dashboards.",
            "Talend ETL pipelines integrating heterogeneous sources, with data quality controls."
          ]
        },
        limit: {
          fr: "Les composants prédictifs ont été livrés en fin de stage : pas de recul sur leur tenue en production.",
          en: "The predictive components were delivered at the end of the internship: no visibility on how they held up in production."
        },
        stack: ["Talend", "SQL", "Power BI", "Python", "scikit-learn"]
      },
      {
        title: { fr: "Stagiaire data analyst", en: "Data Analyst Intern" },
        meta: { fr: "Parhelion Consulting and Training, Nabeul · juin à août 2023", en: "Parhelion Consulting and Training, Nabeul · Jun to Aug 2023" },
        points: {
          fr: ["Rapports Power BI interactifs pour l'aide à la décision de clients, et formation basée sur la certification Microsoft PL-300."],
          en: ["Interactive Power BI reports for client decision-making, and training based on the Microsoft PL-300 certification."]
        },
        stack: ["Power BI"]
      }
    ]
  },

  /* ---------- Projets ---------- */
  projects: {
    title: { fr: "Projets IA et data", en: "AI and data projects" },
    items: [
      {
        title: { fr: "SUMO Traffic Agents", en: "SUMO Traffic Agents" },
        tag: { fr: "Projet d'équipe", en: "Team project" },
        meta: { fr: "Sept. à nov. 2026 · équipe de 7", en: "Sep to Nov 2026 · team of 7" },
        points: {
          fr: [
            "Système multi-agents qui pilote les feux de circulation d'un corridor de Tunis simulé dans SUMO.",
            "Des orchestrateurs à base de règles délèguent à 5 agents spécialisés entraînés par renforcement (PPO) : flux, urgences, bus, piétons, incidents.",
            "Ma part : l'agent incident, avec une contribution plus limitée à l'orchestrateur et à l'explicabilité (XAI). Le système est comparé à un contrôle à cycle fixe et à la méthode max-pressure."
          ],
          en: [
            "Multi-agent system controlling traffic lights on a Tunis corridor simulated in SUMO.",
            "Rule-based orchestrators delegate to 5 specialist reinforcement learning agents (PPO): flow, emergency, bus, pedestrian, incident.",
            "My part: the incident agent, with a smaller contribution to the orchestrator and to explainability (XAI). The system is benchmarked against fixed-time and max-pressure control."
          ]
        },
        stack: ["Python", "SUMO", "PPO", "FastAPI"]
      },
      {
        title: { fr: "QoSBuddy : plateforme IA pour la qualité de service réseau", en: "QoSBuddy: AI platform for network quality of service" },
        tag: { fr: "Projet d'équipe", en: "Team project" },
        meta: { fr: "Janv. à mai 2026", en: "Jan to May 2026" },
        points: {
          fr: [
            "Plateforme co-développée : détection d'anomalies, prévision et analyse de causes racines.",
            "Six modèles de prévision comparés sous un même protocole : GRU, GRU-AE, TCNN, ARIMA, k-NN, XGBoost.",
            "Agents IA sur un modèle Mistral ajusté avec LoRA, le tout conteneurisé avec Docker Compose."
          ],
          en: [
            "Co-developed platform: anomaly detection, forecasting and root-cause analysis.",
            "Six forecasting models benchmarked under one protocol: GRU, GRU-AE, TCNN, ARIMA, k-NN, XGBoost.",
            "AI agents on a Mistral model fine-tuned with LoRA, containerized with Docker Compose."
          ]
        },
        limit: {
          fr: "L'ajustement LoRA n'a pas fait l'objet d'une étude d'ablation : son gain propre n'est pas démontré.",
          en: "The LoRA fine-tuning had no ablation study: its own gain is not demonstrated."
        },
        stack: ["Python", "TensorFlow", "Mistral", "LoRA", "Docker"],
        link: { href: "https://github.com/DoniaHali1/QoSBuddy-project-", label: { fr: "Voir le dépôt GitHub", en: "View the GitHub repository" } }
      },
      {
        title: { fr: "Reproduction de « Show, Attend and Tell » (légendage d'images)", en: "Reproducing \"Show, Attend and Tell\" (image captioning)" },
        tag: { fr: "Projet académique", en: "Academic project" },
        meta: { fr: "Févr. à mai 2026", en: "Feb to May 2026" },
        points: {
          fr: [
            "Reproduction de Xu et al. (ICML 2015) : attention douce et dure sur Flickr8k, Flickr30k et MS COCO.",
            "Détection automatique des erreurs de légende par analyse de dépendances, d'après Liu et Brailsford (2023).",
            "Cartes d'attention pour l'explicabilité."
          ],
          en: [
            "Reproduction of Xu et al. (ICML 2015): soft and hard attention on Flickr8k, Flickr30k and MS COCO.",
            "Automatic caption error detection via dependency parsing, after Liu and Brailsford (2023).",
            "Attention maps for explainability."
          ]
        },
        stack: ["PyTorch", "CNN", "LSTM", "spaCy"]
      },
      {
        title: { fr: "L'assistante de ce portfolio", en: "This portfolio's assistant" },
        tag: { fr: "Projet personnel, en cours", en: "Personal project, in progress" },
        meta: { fr: "Nov. 2026", en: "Nov 2026" },
        points: {
          fr: ["Assistante qui répond aux questions des recruteurs à partir d'une base de connaissances vérifiée.", "Un modèle de classification (TF-IDF et régression logistique) détecte le sujet de la question, un moteur de recherche retrouve les passages utiles.", "Évaluée sur un jeu de test séparé, avec les erreurs publiées dans le dépôt."],
          en: ["Assistant answering recruiters' questions from a verified knowledge base.", "A classification model (TF-IDF and logistic regression) detects the topic of the question, a search engine retrieves the relevant passages.", "Evaluated on a held-out test set, with errors published in the repository."]
        },
        stack: ["Python", "scikit-learn", "FastAPI", "JavaScript"]
      }
    ]
  },

  /* ---------- Compétences ---------- */
  skills: {
    title: { fr: "Compétences", en: "Skills" },
    groups: [
      {
        title: { fr: "Pratiqué en entreprise", en: "Practiced in companies" },
        hint: { fr: "Données réelles, livrables utilisés", en: "Real data, deliverables in use" },
        items: ["Python", "SQL", "PL/SQL", "Elasticsearch", "Logstash", "Kibana", "RAG", "Ollama", "Power BI", "DAX", "Talend", "pandas", "scikit-learn", "Git"]
      },
      {
        title: { fr: "Pratiqué en projet", en: "Practiced in projects" },
        hint: { fr: "Projets académiques ou personnels", en: "Academic or personal projects" },
        items: ["PyTorch", "TensorFlow", "XGBoost", "LoRA", "Mistral", "PPO", "SUMO", "Docker", "FastAPI", "spaCy"]
      },
      {
        title: { fr: "Vu en formation", en: "Covered in coursework" },
        hint: { fr: "Cours et travaux pratiques, sans projet complet", en: "Courses and lab work, no full project" },
        items: ["Java", "C#", "JavaScript", "React.js", "Spring Boot", "MySQL", "R", "Statistiques", "Séries temporelles", "Programmation linéaire", "Théorie des graphes", "Optimisation"]
      }
    ]
  },

  /* ---------- Parcours ---------- */
  background: {
    title: { fr: "Parcours", en: "Background" },
    groups: [
      {
        title: { fr: "Formation", en: "Education" },
        items: {
          fr: [
            "2024 à 2027 : diplôme d'ingénieur en data science, ESPRIT (Tunis). Programme labellisé EUR-ACE, accrédité par la CTI. Diplôme prévu en septembre 2027.",
            "2021 à 2024 : licence en business intelligence, Faculté des Sciences Économiques et de Gestion de Nabeul."
          ],
          en: [
            "2024 to 2027: engineering degree in data science, ESPRIT (Tunis). EUR-ACE labeled program, accredited by the French CTI. Graduation expected in September 2027.",
            "2021 to 2024: bachelor's degree in business intelligence, Faculty of Economics and Management of Nabeul."
          ]
        }
      },
      {
        title: { fr: "Engagements et certifications", en: "Activities and certifications" },
        items: {
          fr: [
            "Consultante qualité, Confédération Tunisienne des Junior Entreprises (2024 à 2025).",
            "Secrétaire générale, Néapolis Junior Entreprise (2022 à 2023).",
            "Statut national d'étudiant-entrepreneur, obtenu deux fois (PEEC).",
            "Certifications : NVIDIA DLI (deep learning, détection d'anomalies, NLP avec transformers), AWS Academy Cloud Foundations.",
            "Langues : français (C1), anglais (C1), arabe (langue maternelle)."
          ],
          en: [
            "Quality Consultant, Tunisian Confederation of Junior Enterprises (2024 to 2025).",
            "Secretary General, Néapolis Junior Enterprise (2022 to 2023).",
            "National Student-Entrepreneur Status, awarded twice (PEEC).",
            "Certifications: NVIDIA DLI (deep learning, anomaly detection, transformer-based NLP), AWS Academy Cloud Foundations.",
            "Languages: French (C1), English (C1), Arabic (native)."
          ]
        }
      }
    ]
  },

  /* ---------- Contact ---------- */
  contact: {
    title: { fr: "Contact", en: "Contact" },
    text: {
      fr: "Disponible pour un stage de fin d'études de 6 mois à partir de janvier 2027, en France, en Europe ou en Tunisie. Le stage fait l'objet d'une convention tripartite établie par ESPRIT.",
      en: "Available for a 6-month end-of-studies internship from January 2027, in France, Europe or Tunisia. The internship is covered by a three-party agreement issued by ESPRIT."
    }
  },

  /* ---------- Petits textes de l'interface ---------- */
  ui: {
    limit: { fr: "Limites", en: "Limits" },
    greeting: {
      fr: "Bonjour, je suis l'assistante de Donia. Choisissez une question, ou écrivez la vôtre.",
      en: "Hello, I'm Donia's assistant. Pick a question, or type your own."
    },
    placeholder: { fr: "A-t-elle déjà utilisé Docker ?", en: "Has she used Docker?" },
    send: { fr: "Envoyer", en: "Send" },
    assistantName: { fr: "Assistante de Donia", en: "Donia's assistant" },
    online: { fr: "en ligne", en: "online" },
    detected: { fr: "Sujet détecté par le modèle", en: "Topic detected by the model" },
    confidence: { fr: "confiance", en: "confidence" },
    note: {
      fr: "Les réponses viennent d'une base de connaissances rédigée et vérifiée par Donia.",
      en: "Answers come from a knowledge base written and checked by Donia."
    },
    empty: { fr: "Écrivez une question d'abord.", en: "Type a question first." },
    downloadCv: { fr: "Télécharger le CV", en: "Download CV" },
    footer: { fr: "© 2026 Donia Hali", en: "© 2026 Donia Hali" }
  }
};
