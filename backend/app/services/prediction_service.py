import re

# High Risk Keywords
HIGH_RISK = {
    "registration fee":40,
    "processing fee":40,
    "telegram":35,
    "whatsapp":35,
    "crypto":35,
    "bitcoin":35,
    "upi":30,
    "investment":35,
    "deposit":30,
    "pay first":40,

    "instant pay":35,
    "guaranteed pay":40,
    "guaranteed income":40,
    "base pay":30,

    "no interview":35,

    "earn money":30,
    "earn daily":30,
    "earn over":30,
    "daily earnings":35,
    "high income":35,
    "income":20,

    "work from home":25,
    "done from home":25,
    "remote work":20,
    "part time":20,
    "part-time":20,
    "part-time work":25,

    "30 minutes":20,
    "1 hour":15,

    "urgent hiring":20,
    "limited seats":20,
    "join immediately":20,
    "click here":15,

    "bonus":15,
    "commission":15,

    "training":15,
    "ready to get started":15,

    "contact us":20,
    "contact on telegram":35,
    "contact on whatsapp":35,

    "age 18+":15,
    "age 21+":15,
    "age 22+":15,
}
# Suspicious Company Words
FAKE_COMPANY = [
    "international solution",
    "technosol",
    "global company",
    "international ltd",
]

# Suspicious Salary Patterns
salary_patterns = [
    r"\$\d+",
    r"₹\d+",
    r"earn.*day",
    r"earn.*hour",
    r"\d+\s*per\s*day",
    r"\d+\s*per\s*hour",
    r"high income",
    r"daily earnings",
    r"base pay",
    r"instant pay",
]

def analyze_text(text):

    text=text.lower()

    score=0

    found=[]

    # keyword checking

    for word,weight in HIGH_RISK.items():

        if word in text:

            score+=weight

            found.append(word)

    # company names

    for company in FAKE_COMPANY:

        if company in text:

            score+=20

            found.append(company)

    # salary regex

    for pattern in salary_patterns:

        if re.search(pattern,text):

            score+=20

            found.append("unrealistic salary")

    # Too many money symbols

    if text.count("$")>=2:

        score+=20

    if text.count("₹")>=2:

        score+=20

    # Phone numbers

    if re.search(r"\d{10}",text):

        score+=10

        found.append("phone number")

    # Email

    if re.search(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",text):

        score+=10

    # URL

    if "http://" in text or "https://" in text:

        score+=10
    
    # Multiple money amounts in the text
    money_matches = re.findall(r"[$₹]\d+", text)

    if len(money_matches) >= 3:
        score += 25
        found.append("multiple salary claims")

    # Normalize

    if score>100:

        score=100

    if score>=75:

        prediction="Highly Suspicious"

    elif score>=40:

        prediction="Suspicious"

    else:

        prediction="Likely Genuine"

    confidence=min(score+60,99)

    return{

        "prediction":prediction,

        "fraud_score":score,

        "confidence":confidence,

        "keywords_found":list(set(found))

    }