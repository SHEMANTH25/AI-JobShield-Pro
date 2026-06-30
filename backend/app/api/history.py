from fastapi import APIRouter
from app.database.database import SessionLocal
from app.database.models import AnalysisHistory

router = APIRouter()


@router.get("/")
def get_history():

    db = SessionLocal()

    history = (
        db.query(AnalysisHistory)
        .order_by(AnalysisHistory.created_at.desc())
        .all()
    )

    result = []

    for row in history:

        result.append({
            "id": row.id,
            "analysis_type": row.analysis_type,
            "prediction": row.prediction,
            "fraud_score": row.fraud_score,
            "confidence": row.confidence,
            "created_at": row.created_at
        })

    db.close()

    return result


@router.delete("/clear")
def clear_history():

    db = SessionLocal()

    db.query(AnalysisHistory).delete()

    db.commit()

    db.close()

    return {
        "message": "History cleared successfully."
    }