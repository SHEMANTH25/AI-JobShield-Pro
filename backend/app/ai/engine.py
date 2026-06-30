from app.ai.ml_predict import predict_job
from app.services.prediction_service import analyze_text
from app.services.explain_service import explain_prediction

def predict(text):

    # Machine Learning Prediction
    ml_result = predict_job(text)

    # Rule-Based Prediction
    rule_result = analyze_text(text)

    final_score = rule_result["fraud_score"]

    # Boost score if ML predicts fake
    if ml_result["ml_prediction"] == 1:
        final_score += 20

    if final_score > 100:
        final_score = 100

    # Final Decision
    if final_score >= 75:
        prediction = "Highly Suspicious"

    elif final_score >= 40:
        prediction = "Suspicious"

    else:
        prediction = "Likely Genuine"

    explanations = explain_prediction(rule_result, ml_result)

    return {
        "prediction": prediction,
        "fraud_score": final_score,
        "confidence": ml_result["confidence"],
        "keywords_found": rule_result["keywords_found"],
        "ml_prediction": ml_result["prediction"],
        "explanations": explanations
    }