"""Mesure la qualité du routeur d'intention et écrit eval/resultats.md.

Lancer depuis backend/ :   python evaluate.py

Deux mesures :
  1. Validation croisée sur les exemples d'entraînement (data/intents.json).
  2. Jeu de test séparé (eval/test_set.csv), jamais vu à l'entraînement.
"""
import csv
from collections import Counter
from pathlib import Path

from sklearn.metrics import accuracy_score, f1_score
from sklearn.model_selection import StratifiedKFold, cross_val_predict

from app.retriever import Retriever
from app.router import CONFIDENCE_THRESHOLD, UNKNOWN, Router, build_model, load_examples

ROOT = Path(__file__).resolve().parents[1]
TEST_FILE = ROOT / "eval" / "test_set.csv"
REPORT_FILE = ROOT / "eval" / "resultats.md"

# Fiche attendue pour chaque sujet, pour mesurer le moteur de recherche.
EXPECTED_SOURCE = {
    "orange": "03_experiences.md", "banque": "03_experiences.md", "bi4you": "03_experiences.md",
    "parhelion": "03_experiences.md", "experience": "03_experiences.md",
    "sumo": "04_projets.md", "qosbuddy": "04_projets.md", "captioning": "04_projets.md",
    "projets": "04_projets.md", "formation": "02_etudes.md", "certifications": "02_etudes.md",
    "langues": "01_profil.md", "extrascolaire": "06_extrascolaire.md",
    "convention": "07_faq_rh.md", "competences": "05_competences.md",
}


def main():
    texts, intents = load_examples()
    lines = ["# Résultats d'évaluation", "",
             "Fichier généré par `backend/evaluate.py`. Ne pas modifier à la main.", ""]

    # 1. Validation croisée
    folds = StratifiedKFold(n_splits=5, shuffle=True, random_state=0)
    predicted = cross_val_predict(build_model(), texts, intents, cv=folds)
    majority = Counter(intents).most_common(1)[0][1] / len(intents)
    lines += [
        "## 1. Routeur : validation croisée (5 plis)", "",
        f"- Exemples : {len(texts)}, sujets : {len(set(intents))}",
        f"- Exactitude : {accuracy_score(intents, predicted):.1%}",
        f"- F1 macro : {f1_score(intents, predicted, average='macro'):.1%}",
        f"- Référence naïve (toujours le sujet le plus fréquent) : {majority:.1%}", "",
    ]

    # 2. Jeu de test séparé
    with open(TEST_FILE, encoding="utf-8") as f:
        test = list(csv.DictReader(f))
    router = Router()
    results = [(row, *router.predict(row["question"])) for row in test]
    correct = sum(intent == row["intent"] for row, intent, _ in results)
    unknown = sum(intent == UNKNOWN for _, intent, _ in results)
    wrong = [(row, intent, conf) for row, intent, conf in results
             if intent not in (row["intent"], UNKNOWN)]
    lines += [
        "## 2. Routeur : jeu de test séparé", "",
        f"- Questions : {len(test)}, seuil de confiance : {CONFIDENCE_THRESHOLD}",
        f"- Bon sujet : {correct} ({correct / len(test):.1%})",
        f"- « Je ne sais pas » (confiance trop basse) : {unknown} ({unknown / len(test):.1%})",
        f"- Mauvais sujet : {len(wrong)} ({len(wrong) / len(test):.1%})", "",
    ]
    for lang in ("fr", "en"):
        subset = [(row, intent) for row, intent, _ in results if row["lang"] == lang]
        good = sum(intent == row["intent"] for row, intent in subset)
        lines.append(f"- {lang} : {good}/{len(subset)}")
    lines += ["", "### Erreurs", "", "| Question | Attendu | Prédit | Confiance |", "|---|---|---|---|"]
    for row, intent, conf in results:
        if intent != row["intent"]:
            lines.append(f"| {row['question']} | {row['intent']} | {intent} | {conf:.2f} |")

    # 3. Moteur de recherche
    retriever = Retriever()
    scored = [row for row in test if row["intent"] in EXPECTED_SOURCE]
    hits1 = hits3 = 0
    for row in scored:
        sources = [p.source for p, _ in retriever.search(row["question"], k=3)]
        expected = EXPECTED_SOURCE[row["intent"]]
        hits1 += sources[:1] == [expected]
        hits3 += expected in sources
    lines += [
        "", "## 3. Moteur de recherche TF-IDF", "",
        f"- Questions évaluées : {len(scored)}",
        f"- Bonne fiche en première position : {hits1} ({hits1 / len(scored):.1%})",
        f"- Bonne fiche dans les 3 premières : {hits3} ({hits3 / len(scored):.1%})", "",
        "## Limites de cette évaluation", "",
        "- Les exemples d'entraînement et le jeu de test ont été écrits par la même personne.",
        "  Les vraies questions de recruteurs seront plus variées : ces chiffres sont optimistes.",
        "- Le jeu de test est petit. Un écart d'une ou deux questions n'est pas significatif.",
        "- Le moteur de recherche est évalué au niveau de la fiche, pas du passage exact.", "",
    ]
    REPORT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print("\n".join(lines))


if __name__ == "__main__":
    main()
