import pytesseract
from PIL import Image

from app.services.prediction_service import analyze_text

# Tesseract Path
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


def analyze_image(image_path):
    """
    Extract text from image and analyze using the common AI engine.
    """

    text = pytesseract.image_to_string(Image.open(image_path))

    # Use the SAME fraud detection engine as Text and PDF
    from app.ai.engine import predict

    # Include OCR text in response
    result = predict(text)
    result["extracted_text"] = text

    return result