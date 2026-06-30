import os
import joblib

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(os.path.abspath(__file__))
    )
)

MODEL_PATH = os.path.join(BASE_DIR, "saved_models", "model.pkl")
VECTORIZER_PATH = os.path.join(BASE_DIR, "saved_models", "vectorizer.pkl")

model = joblib.load(MODEL_PATH)
vectorizer = joblib.load(VECTORIZER_PATH)


def predict_job(text):

    vector = vectorizer.transform([text])

    prediction = model.predict(vector)[0]

    # Default confidence
    confidence = 95.0

    # For models like Logistic Regression / Random Forest
    if hasattr(model, "predict_proba"):

        probabilities = model.predict_proba(vector)[0]

        confidence = round(max(probabilities) * 100, 2)

    # For LinearSVC
    elif hasattr(model, "decision_function"):

        score = abs(model.decision_function(vector)[0])

        confidence = min(round(70 + score * 8, 2), 99.5)

    if prediction == 1:
        label = "Highly Suspicious"
    else:
        label = "Likely Genuine"

    return {
        "prediction": label,
        "confidence": confidence,
        "ml_prediction": int(prediction)
    }