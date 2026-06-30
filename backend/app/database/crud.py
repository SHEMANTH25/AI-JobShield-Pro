from app.database.database import SessionLocal
from app.database.models import AnalysisHistory

def save_analysis(analysis_type, prediction, fraud_score, confidence):

    db = SessionLocal()

    history = AnalysisHistory(
        analysis_type=analysis_type,
        prediction=prediction,
        fraud_score=fraud_score,
        confidence=confidence,
    )

    db.add(history)
    db.commit()
    db.close()