from fastapi import APIRouter, UploadFile, File
import shutil
import os
from app.database.crud import save_analysis
from app.services.image_service import analyze_image

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/image")
async def analyze_image_api(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = analyze_image(file_path)

    save_analysis(
        "Image",
        result["prediction"],
        result["fraud_score"],
        result["confidence"]
    )

    return result