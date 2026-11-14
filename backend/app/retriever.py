"""Moteur de recherche dans la base de connaissances.

Version 1 : TF-IDF et similarité cosinus. Sert de référence simple.
Version 2 (prévue) : embeddings de phrases multilingues, à comparer à cette
référence sur le même jeu de test avant de la remplacer.
"""
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

from .knowledge import Passage, load_passages
from .text import normalize


class Retriever:
    def __init__(self, passages: list[Passage] | None = None):
        self.passages = passages if passages is not None else load_passages()
        self.vectorizer = TfidfVectorizer(preprocessor=normalize, analyzer="char_wb",
                                          ngram_range=(3, 5), sublinear_tf=True)
        documents = [p.title + "\n" + p.text for p in self.passages]
        self.matrix = self.vectorizer.fit_transform(documents)

    def search(self, question: str, k: int = 3) -> list[tuple[Passage, float]]:
        """Renvoie les k passages les plus proches de la question, avec leur score."""
        scores = linear_kernel(self.vectorizer.transform([question]), self.matrix)[0]
        ranked = scores.argsort()[::-1][:k]
        return [(self.passages[i], float(scores[i])) for i in ranked if scores[i] > 0]
