"""Charge la base de connaissances (dossier knowledge/) et la découpe en passages.

Un passage = une section de fiche, c'est-à-dire un titre « ## » et le texte qui suit.
Le fichier 00_regles.md n'est pas découpé : il sert de consignes, pas de source.
"""
from dataclasses import dataclass
from pathlib import Path

KNOWLEDGE_DIR = Path(__file__).resolve().parents[2] / "knowledge"
RULES_FILE = "00_regles.md"


@dataclass
class Passage:
    source: str   # nom du fichier, ex. "03_experiences.md"
    title: str    # titre de la section
    text: str     # contenu de la section


def load_passages(folder: Path = KNOWLEDGE_DIR) -> list[Passage]:
    passages = []
    for path in sorted(folder.glob("*.md")):
        if path.name == RULES_FILE:
            continue
        doc_title, section_title, lines = path.stem, None, []
        for line in path.read_text(encoding="utf-8").splitlines():
            if line.startswith("# "):
                doc_title = line[2:].strip()
            elif line.startswith("## "):
                _flush(passages, path.name, section_title or doc_title, lines)
                section_title, lines = line[3:].strip(), []
            else:
                lines.append(line)
        _flush(passages, path.name, section_title or doc_title, lines)
    return passages


def _flush(passages, source, title, lines):
    text = "\n".join(lines).strip()
    if text:
        passages.append(Passage(source=source, title=title, text=text))


def load_rules(folder: Path = KNOWLEDGE_DIR) -> str:
    return (folder / RULES_FILE).read_text(encoding="utf-8")
