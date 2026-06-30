import requests
from bs4 import BeautifulSoup


def extract_text_from_url(url: str):

    headers = {
        "User-Agent": "Mozilla/5.0"
    }

    try:
        response = requests.get(
            url,
            headers=headers,
            timeout=10
        )

        response.raise_for_status()

    except requests.exceptions.RequestException as e:
        return f"URL_ERROR: {str(e)}"

    soup = BeautifulSoup(response.text, "lxml")

    # Remove unwanted tags
    for tag in soup(["script", "style", "noscript"]):
        tag.decompose()

    text = soup.get_text(separator=" ")

    text = " ".join(text.split())

    return text