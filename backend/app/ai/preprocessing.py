import re


def clean_text(text: str) -> str:
    """
    Clean extracted text before prediction.
    """

    if not text:
        return ""

    text = text.lower()

    text = re.sub(r"\s+", " ", text)

    text = re.sub(r"[^\w\s₹$:/.-]", " ", text)

    return text.strip()