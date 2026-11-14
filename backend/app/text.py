"""Nettoyage de texte partagé par le routeur et le moteur de recherche."""
import re
import unicodedata


def normalize(text: str) -> str:
    """Minuscules, sans accents, sans ponctuation superflue."""
    text = unicodedata.normalize("NFD", text.lower())
    text = "".join(c for c in text if unicodedata.category(c) != "Mn")
    text = re.sub(r"[^a-z0-9+#\- ]", " ", text)
    return re.sub(r"\s+", " ", text).strip()
