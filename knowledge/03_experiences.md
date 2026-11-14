# Stages en entreprise

Quatre stages, du plus récent au plus ancien.

## Orange Tunisie, stagiaire data scientist (juillet à août 2026, Tunis)

- Problème : les enregistrements de trafic ne se consultaient qu'à la main, et la
  documentation technique était dispersée.
- Assistant RAG sur environ 6 000 passages de documentation, avec un modèle de langage
  exécuté en local (Qwen2.5-3B via Ollama). Aucune donnée ne sort de l'infrastructure.
- Pipeline ELK (Elasticsearch, Logstash, Kibana) indexant 377 660 enregistrements SMS (CDR).
  La structure des champs MO/MT n'était pas documentée : reconstituée par rétro-ingénierie.
- Détection d'anomalies horaire par statistiques robustes (médiane et MAD), suivie dans Kibana.
- Limites : le seuil est statistique, pas appris, et ne tient que si le profil horaire reste
  stable. L'assistant n'a pas été évalué sur un jeu de questions de référence.
- Confidentialité : code et données appartiennent à l'entreprise. Rien n'est publié.

## Banque de Tunisie, stagiaire data analyst (juin à août 2025, Tunis)

- Tableau de bord Power BI avec indicateurs en DAX, comparant les agences équipées en
  photovoltaïque et les autres. Utilisé par la direction.

## BI4YOU, stagiaire business intelligence et machine learning (février à mai 2024, Tunis)

- Modèles de régression et de classification pour prévoir et segmenter des indicateurs métier.
- Pipelines ETL Talend intégrant des sources hétérogènes, avec contrôles de qualité.
- Prédictions intégrées aux tableaux de bord.
- Limites : composants livrés en fin de stage, pas de recul sur leur tenue en production.
- Stack : Talend, SQL, Power BI, Python, scikit-learn.

## Parhelion Consulting and Training, stagiaire data analyst (juin à août 2023, Nabeul)

- Rapports Power BI interactifs pour l'aide à la décision de clients.
- Formation basée sur la certification Microsoft PL-300.
