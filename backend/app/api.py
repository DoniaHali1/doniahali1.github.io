"""API web de l'assistante.

Lancer en local, depuis le dossier backend/ :
    uvicorn app.api:app --reload --port 8000
Puis ouvrir http://127.0.0.1:8000/docs pour tester.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from .pipeline import MAX_QUESTION_LENGTH, Assistant

app = FastAPI(title="Assistante du portfolio de Donia Hali")

# Le site (ouvert en local ou sur GitHub Pages) a le droit d'appeler l'API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type"],
)

assistant = Assistant()


class Question(BaseModel):
    question: str = Field(min_length=1, max_length=MAX_QUESTION_LENGTH)
    lang: str = "fr"


@app.get("/")
def health():
    return {"status": "ok"}


@app.post("/ask")
def ask(body: Question):
    return assistant.ask(body.question)
