from fastapi import APIRouter
from pydantic import BaseModel

from app.services.url_security import analyze_url_security
from app.services.url_service import extract_text_from_url
from app.ai.engine import predict
from app.database.crud import save_analysis

router = APIRouter()


class URLInput(BaseModel):
    url: str


@router.post("/analyze")
def analyze_url(data: URLInput):

    # URL security analysis
    security = analyze_url_security(data.url)

    # Try extracting website text
    text = extract_text_from_url(data.url)

    # ---------------------------------------------------
    # If the website cannot be scraped
    # ---------------------------------------------------
    if text.startswith("URL_ERROR"):

        # Decide prediction based only on URL score
        if security["url_score"] >= 40:
            prediction = "Highly Suspicious"
        elif security["url_score"] >= 20:
            prediction = "Suspicious"
        else:
            prediction = "Likely Genuine"

        save_analysis(
            analysis_type="URL",
            prediction=prediction,
            fraud_score=security["url_score"],
            confidence=75
        )

        return {
            "prediction": prediction,
            "fraud_score": security["url_score"],
            "confidence": 75,
            "keywords_found": [],
            "ml_prediction": "Website content could not be analyzed.",
            "url_score": security["url_score"],
            "url_reasons": security["url_reasons"],
            "reason": text
        }

    # ---------------------------------------------------
    # AI Analysis
    # ---------------------------------------------------

    result = predict(text)

    final_score = result["fraud_score"] + security["url_score"]

    final_score = min(final_score, 100)

    if final_score >= 75:
        prediction = "Highly Suspicious"
    elif final_score >= 40:
        prediction = "Suspicious"
    else:
        prediction = "Likely Genuine"

    save_analysis(
        analysis_type="URL",
        prediction=prediction,
        fraud_score=final_score,
        confidence=result["confidence"]
    )

    return {
        **result,
        "prediction": prediction,
        "fraud_score": final_score,
        "url_score": security["url_score"],
        "url_reasons": security["url_reasons"]
    }