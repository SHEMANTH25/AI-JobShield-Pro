from fastapi import APIRouter, UploadFile, File, Form
from app.services.pdf_service import extract_pdf_text
from app.services.resume_service import compare_resume

router = APIRouter()

@router.post("/analyze")
async def analyze_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):
    resume_text = extract_pdf_text(resume.file)

    result = compare_resume(
        resume_text,
        job_description
    )

    from app.database.crud import save_analysis

    # Save Analysis
    save_analysis(
    analysis_type="Resume",
    prediction=result["recommendation"],
    fraud_score=result["match_score"],
    confidence=result["match_score"]
)

    return result