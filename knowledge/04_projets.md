# Projets

## SUMO Traffic Agents (septembre à novembre 2026, terminé)

- Projet d'équipe, 7 personnes.
- Système multi-agents qui pilote les feux d'un corridor de Tunis simulé dans SUMO.
- Des orchestrateurs à base de règles délèguent à 5 agents PPO : flux, urgences, bus,
  piétons, incidents.
- Part de Donia : l'agent incident. Contribution plus limitée à l'orchestrateur et à l'explicabilité (XAI).
- Filtre de sécurité sur les actions, détection d'anomalies, prévision des files d'attente.
- Évaluation : comparaison au contrôle à cycle fixe et à la méthode max-pressure.
- Stack : Python, SUMO, PPO, FastAPI.
- Dépôt et résultats : [À COMPLÉTER : lien et chiffres du benchmark]

## QoSBuddy (janvier à mai 2026)

- Projet d'équipe, co-développé. [À COMPLÉTER : taille de l'équipe et part de Donia]
- Plateforme IA pour la qualité de service réseau : détection d'anomalies, prévision,
  analyse de causes racines.
- Six modèles de prévision comparés sous un même protocole : GRU, GRU-AE, TCNN, ARIMA,
  k-NN, XGBoost. [À COMPLÉTER : métriques et meilleur modèle]
- Agents IA sur un modèle Mistral ajusté avec LoRA. Conteneurisé avec Docker Compose.
- Limite : pas d'étude d'ablation sur l'ajustement LoRA.
- Dépôt : github.com/DoniaHali1/QoSBuddy-project-

## Reproduction de « Show, Attend and Tell » (février à mai 2026)

- [À COMPLÉTER : projet individuel ou d'équipe ?]
- Reproduction de Xu et al. (ICML 2015) : attention douce et dure, comparées aux modèles
  de référence NIC, sur Flickr8k, Flickr30k et MS COCO.
- Réplication de Liu et Brailsford (2023) : taxonomie d'erreurs, détection automatique par
  analyse de dépendances.
- Correction de légendes avec des étiquettes VGG réordonnées par GPT-2. Cartes d'attention.
- Stack : PyTorch, spaCy.

## L'assistante de ce portfolio (novembre 2026, en cours)

- Projet personnel. Voir le README à la racine.
