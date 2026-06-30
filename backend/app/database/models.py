from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from zoneinfo import ZoneInfo

from app.database.database import Base


class AnalysisHistory(Base):

    __tablename__ = "analysis_history"

    id = Column(Integer, primary_key=True, index=True)

    analysis_type = Column(String)

    prediction = Column(String)

    fraud_score = Column(Integer)

    confidence = Column(Integer)

    created_at = Column(
        DateTime,
        default=lambda: datetime.now(ZoneInfo("Asia/Kolkata"))
    )