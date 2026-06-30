from fastapi import APIRouter

from app.database.database import SessionLocal
from app.database.models import AnalysisHistory

router = APIRouter()


@router.get("/stats")
def get_dashboard():

    db = SessionLocal()

    total = db.query(AnalysisHistory).count()

    high_risk = db.query(AnalysisHistory).filter(
        AnalysisHistory.prediction == "Highly Suspicious"
    ).count()

    suspicious = db.query(AnalysisHistory).filter(
        AnalysisHistory.prediction == "Suspicious"
    ).count()

    safe = db.query(AnalysisHistory).filter(
        AnalysisHistory.prediction == "Likely Genuine"
    ).count()

    text = db.query(AnalysisHistory).filter(
        AnalysisHistory.analysis_type == "Text"
    ).count()

    pdf = db.query(AnalysisHistory).filter(
        AnalysisHistory.analysis_type == "PDF"
    ).count()

    image = db.query(AnalysisHistory).filter(
        AnalysisHistory.analysis_type == "Image"
    ).count()

    url = db.query(AnalysisHistory).filter(
        AnalysisHistory.analysis_type == "URL"
    ).count()

    resume = db.query(AnalysisHistory).filter(
        AnalysisHistory.analysis_type == "Resume"
    ).count()

    db.close()

    return {
        "total": total,
        "safe": safe,
        "suspicious": suspicious,
        "high_risk": high_risk,
        "text": text,
        "pdf": pdf,
        "image": image,
        "url": url,
        "resume": resume
    }