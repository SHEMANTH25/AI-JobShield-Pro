def explain_prediction(rule_result, ml_result):

    explanations = []

    for keyword in rule_result["keywords_found"]:

        if keyword == "registration fee":
            explanations.append({
                "feature": "Registration Fee",
                "impact": "+40",
                "reason": "Scam jobs often ask candidates to pay money."
            })

        elif keyword == "telegram":
            explanations.append({
                "feature": "Telegram Contact",
                "impact": "+35",
                "reason": "Fraudsters commonly move conversations to Telegram."
            })

        elif keyword == "whatsapp":
            explanations.append({
                "feature": "WhatsApp Contact",
                "impact": "+35",
                "reason": "Scammers frequently communicate only through WhatsApp."
            })

        elif keyword == "phone number":
            explanations.append({
                "feature": "Phone Number",
                "impact": "+10",
                "reason": "Direct contact information can increase suspicion."
            })

        elif keyword == "click here":
            explanations.append({
                "feature": "Click Here",
                "impact": "+15",
                "reason": "Urgent links are commonly used in phishing."
            })

        elif keyword == "unrealistic salary":
            explanations.append({
                "feature": "Unrealistic Salary",
                "impact": "+20",
                "reason": "Extremely high salaries are common bait."
            })

        elif keyword == "work from home":
            explanations.append({
                "feature": "Work From Home",
                "impact": "+25",
                "reason": "Not always fraudulent, but often abused by scammers."
            })

        elif keyword == "urgent hiring":
            explanations.append({
                "feature": "Urgent Hiring",
                "impact": "+20",
                "reason": "Creates pressure to act quickly."
            })

        else:
            explanations.append({
                "feature": keyword.title(),
                "impact": "",
                "reason": "Suspicious keyword detected."
            })

    explanations.append({
        "feature": "Machine Learning Model",
        "impact": f'{ml_result["confidence"]:.2f}%',
        "reason": f'Model prediction: {ml_result["prediction"]}'
    })

    return explanations