from urllib.parse import urlparse
import ipaddress

SUSPICIOUS_TLDS = [
    ".xyz",
    ".top",
    ".click",
    ".loan",
    ".work",
    ".live",
    ".shop",
    ".buzz",
]

SUSPICIOUS_WORDS = [
    "login",
    "verify",
    "bonus",
    "gift",
    "free",
    "earn",
    "crypto",
    "telegram",
    "whatsapp",
    "investment",
]

# Trusted companies
TRUSTED_DOMAINS = [
    "google.com",
    "microsoft.com",
    "amazon.jobs",
    "amazon.com",
    "tcs.com",
    "infosys.com",
    "wipro.com",
    "accenture.com",
    "ibm.com",
    "oracle.com",
    "deloitte.com",
    "capgemini.com",
    "cognizant.com",
]


def analyze_url_security(url):

    score = 0
    reasons = []

    parsed = urlparse(url)

    hostname = (parsed.hostname or "").lower()

    # Trusted company websites
    for domain in TRUSTED_DOMAINS:
        if hostname.endswith(domain):
            return {
                "url_score": 0,
                "url_reasons": []
            }

    # HTTPS
    if parsed.scheme != "https":
        score += 20
        reasons.append("Website is not using HTTPS")

    # Long URL
    if len(url) > 80:
        score += 15
        reasons.append("Very long URL")

    # Suspicious TLD
    for tld in SUSPICIOUS_TLDS:
        if hostname.endswith(tld):
            score += 25
            reasons.append(f"Suspicious domain extension ({tld})")

    # Suspicious words
    lower = url.lower()

    for word in SUSPICIOUS_WORDS:
        if word in lower:
            score += 10
            reasons.append(f"Suspicious word: {word}")

    # IP Address
    try:
        ipaddress.ip_address(hostname)
        score += 30
        reasons.append("Uses IP address instead of domain")
    except:
        pass

    score = min(score, 100)

    return {
        "url_score": score,
        "url_reasons": reasons
    }