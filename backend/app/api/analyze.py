from fastapi import UploadFile, File
from app.services.pdf_service import extract_pdf_text
from fastapi import APIRouter
from pydantic import BaseModel
from app.database.crud import save_analysis
from app.ai.engine import predict

router = APIRouter()


class JobInput(BaseModel):
    text: str


@router.post("/text")
def analyze_job(data: JobInput):

    result = predict(data.text)

    save_analysis(
        "Text",
        result["prediction"],
        result["fraud_score"],
        result["confidence"]
    )

    return result

@router.post("/pdf")
async def analyze_pdf(file: UploadFile = File(...)):

    text = extract_pdf_text(file.file)

    result = predict(text)

    save_analysis(
        "PDF",
        result["prediction"],
        result["fraud_score"],
        result["confidence"]
    )

    return result