# portfolio-assistant

Portfolio de Donia Hali avec une assistante qui répond aux questions des recruteurs.

Projet personnel, en cours. Site actuel : https://doniahali1.github.io

## L'idée

Un recruteur passe peu de temps sur un portfolio. Ici il a trois façons d'obtenir une réponse,
de la plus rapide à la plus libre :

1. **Lire la première ligne** : poste recherché, durée, date, lieu.
2. **Cliquer sur un bouton** : réponse pré-écrite, affichée tout de suite.
3. **Écrire sa question** : un modèle de machine learning détecte le sujet et l'assistante répond.

Les sections classiques (expérience, projets, compétences, parcours, contact) restent sous
l'assistante. Elle s'ajoute au portfolio, elle ne le remplace pas.

## Comment une question est traitée

```
question du visiteur
        |
        v
  site (js/app.js)  ---- backend éteint ? ---->  mots-clés en local (secours)
        |
        v
  backend Python (FastAPI)
        |
        +--> routeur d'intention      quel sujet ? avec quelle confiance ?
        |    TF-IDF + régression logistique, 26 sujets
        |
        +--> moteur de recherche      quels passages de la base de connaissances ?
        |    TF-IDF + similarité cosinus
        v
  sujet + confiance + sources  --->  le site affiche la réponse vérifiée du sujet
```

Si la confiance du routeur est trop basse, il répond « inconnu » et le site retombe sur les
mots-clés. Si rien ne correspond, l'assistante dit qu'elle n'a pas l'information.

## Arborescence

```
portfolio-assistant/
├── index.html              structure de la page
├── css/style.css           mise en forme
├── js/
│   ├── data.js             contenu des sections (français et anglais)
│   ├── answers.js          réponses de l'assistante et mots-clés de secours
│   └── app.js              logique : affichage, langue, appel du backend
├── assets/                 avatar, photo, CV
├── knowledge/              base de connaissances, une fiche par thème
├── backend/
│   ├── app/
│   │   ├── knowledge.py    charge les fiches et les découpe en passages
│   │   ├── text.py         nettoyage du texte
│   │   ├── router.py       routeur d'intention (machine learning)
│   │   ├── retriever.py    moteur de recherche
│   │   ├── pipeline.py     enchaîne routeur et recherche
│   │   └── api.py          API web FastAPI
│   ├── data/intents.json   questions d'exemple pour entraîner le routeur
│   ├── tests/              tests automatiques
│   ├── evaluate.py         mesure la qualité, écrit eval/resultats.md
│   └── requirements.txt
├── eval/
│   ├── test_set.csv        60 questions de test, jamais vues à l'entraînement
│   ├── resultats.md        résultats chiffrés et liste des erreurs
│   └── questions_test.md   scénarios et pièges pour l'étape agent
└── ROADMAP.md              avancement, étape par étape
```

## Lancer le projet

### Le site seul

Double-cliquer sur `index.html`. L'assistante fonctionne avec les mots-clés.

### Le site avec le backend (Windows)

Dans le terminal de VS Code, la première fois :

```
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

Puis à chaque fois :

```
cd backend
.venv\Scripts\activate
uvicorn app.api:app --reload --port 8000
```

Laisser ce terminal ouvert, puis ouvrir `index.html`. Sous chaque réponse à une question
libre apparaît la ligne « Sujet détecté par le modèle », avec la confiance.

Pour tester l'API seule : http://127.0.0.1:8000/docs

### Évaluer et tester

```
cd backend
python evaluate.py
pytest
```

## Résultats actuels

Détail et liste des erreurs dans `eval/resultats.md`.

| Mesure | Résultat |
|---|---|
| Routeur, validation croisée 5 plis (338 exemples, 26 sujets) | 53 % d'exactitude |
| Routeur, jeu de test séparé (60 questions) : bon sujet | 83 % |
| Routeur, jeu de test : « je ne sais pas » | 15 % |
| Routeur, jeu de test : mauvais sujet | 2 % |
| Recherche : bonne fiche dans les 3 premières | 83 % |

Le routeur se trompe rarement mais s'abstient souvent : c'est voulu, une abstention renvoie
vers les mots-clés, une erreur afficherait une réponse hors de propos.




