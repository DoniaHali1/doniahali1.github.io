"""La chaîne complète : question -> sujet détecté + passages utiles.

Étape suivante : un agent (modèle de langage avec outils) rédigera la réponse
à partir des passages. En attendant, le champ « answer » reste vide et le site
affiche la réponse pré-écrite du sujet détecté.
"""
from .retriever import Retriever
from .router import Router

MAX_QUESTION_LENGTH = 200


class Assistant:
    def __init__(self):
        self.router = Router()
        self.retriever = Retriever()

    def ask(self, question: str) -> dict:
        question = question.strip()[:MAX_QUESTION_LENGTH]
        intent, confidence = self.router.predict(question)
        sources = []
        if intent not in ("hors_sujet", "bonjour"):
            sources = [
                {"source": passage.source, "title": passage.title, "score": round(score, 3)}
                for passage, score in self.retriever.search(question)
            ]
        return {
            "intent": intent,
            "confidence": round(confidence, 3),
            "sources": sources,
            "answer": None,
        }
