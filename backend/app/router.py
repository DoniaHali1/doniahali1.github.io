"""Routeur d'intention : un modèle de machine learning qui lit une question
et prédit de quel sujet elle parle (stage Orange, disponibilité, hors sujet...).

Modèle : TF-IDF (mots + groupes de caractères) puis régression logistique.
Choix assumé : avec quelques centaines d'exemples, un modèle linéaire est
plus fiable et plus simple à expliquer qu'un réseau de neurones.
"""
import json
from pathlib import Path

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import FeatureUnion, Pipeline

from .text import normalize

DATA_FILE = Path(__file__).resolve().parents[1] / "data" / "intents.json"

# En dessous de ce niveau de confiance, le routeur répond « inconnu »
# plutôt que de risquer un mauvais sujet. Valeur de départ, à régler avec evaluate.py.
CONFIDENCE_THRESHOLD = 0.30
UNKNOWN = "inconnu"


def load_examples(path: Path = DATA_FILE) -> tuple[list[str], list[str]]:
    rows = json.loads(path.read_text(encoding="utf-8"))
    return [row["text"] for row in rows], [row["intent"] for row in rows]


def build_model() -> Pipeline:
    features = FeatureUnion([
        ("mots", TfidfVectorizer(preprocessor=normalize, ngram_range=(1, 2), sublinear_tf=True)),
        ("caracteres", TfidfVectorizer(preprocessor=normalize, analyzer="char_wb",
                                       ngram_range=(2, 5), sublinear_tf=True)),
    ])
    classifier = LogisticRegression(C=20, max_iter=2000, class_weight="balanced")
    return Pipeline([("features", features), ("classifier", classifier)])


class Router:
    def __init__(self, threshold: float = CONFIDENCE_THRESHOLD):
        self.threshold = threshold
        texts, intents = load_examples()
        self.model = build_model().fit(texts, intents)

    def predict(self, question: str) -> tuple[str, float]:
        """Renvoie (sujet, confiance entre 0 et 1)."""
        probabilities = self.model.predict_proba([question])[0]
        best = probabilities.argmax()
        confidence = float(probabilities[best])
        intent = str(self.model.classes_[best])
        if confidence < self.threshold:
            return UNKNOWN, confidence
        return intent, confidence
