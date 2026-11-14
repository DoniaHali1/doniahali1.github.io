# Avancement

## Étape 1 : le site et l'assistante à boutons (fait)

- [x] Page d'accueil avec avatar, boutons et champ de question
- [x] Réponses pré-écrites en français et en anglais
- [x] Questions libres par mots-clés, sans serveur
- [x] Sections expérience, projets, compétences (3 niveaux), parcours, contact
- [x] Affichage téléphone
- [ ] Relecture par Donia de `js/data.js` et `js/answers.js`

## Étape 2 : backend Python et machine learning (fait, à lancer chez Donia)

- [x] Jeu de 338 questions d'exemple, 26 sujets (`backend/data/intents.json`)
- [x] Routeur d'intention : TF-IDF et régression logistique (`backend/app/router.py`)
- [x] Moteur de recherche TF-IDF sur la base de connaissances (`backend/app/retriever.py`)
- [x] Évaluation sur un jeu de test séparé (`eval/resultats.md`)
- [x] Le site appelle le backend et retombe sur les mots-clés s'il est éteint
- [ ] Premier lancement de l'API FastAPI sur l'ordinateur de Donia

## Étape 3 : deep learning, recherche par embeddings

- [ ] Remplacer TF-IDF par des embeddings de phrases multilingues
- [ ] Comparer les deux sur le même jeu de test, garder le meilleur
- [ ] Essayer les embeddings aussi pour le routeur

## Étape 4 : agent

- [ ] Choisir le modèle de langage (local avec Ollama, ou API en ligne)
- [ ] Agent avec outils : chercher dans les fiches, citer ses sources, refuser le hors sujet
- [ ] Passer les 30 scénarios de `eval/questions_test.md`, dont les pièges

## Étape 5 : mise en ligne

- [ ] Héberger le backend
- [ ] Dépôt GitHub `portfolio-assistant` avec Pages activé (adresse de test)
- [ ] Copie vers `doniahali1.github.io` en un seul envoi
- [ ] Enregistrer les vraies questions des visiteurs (anonymes) pour réentraîner le routeur
