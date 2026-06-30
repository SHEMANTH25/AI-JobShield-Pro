import re

SKILLS = [

    "python",
    "java",
    "c++",
    "javascript",
    "typescript",

    "react",
    "angular",
    "vue",

    "fastapi",
    "flask",
    "django",

    "html",
    "css",

    "sql",
    "mysql",
    "postgresql",
    "mongodb",

    "machine learning",
    "deep learning",
    "tensorflow",
    "pytorch",
    "opencv",

    "git",
    "github",

    "docker",
    "kubernetes",

    "aws",
    "azure",
    "gcp",

    "linux",
    "rest api",

    "pandas",
    "numpy",
    "scikit-learn"

]


def extract_skills(text):

    text = text.lower()

    found = []

    for skill in SKILLS:

        if re.search(r"\b" + re.escape(skill) + r"\b", text):

            found.append(skill)

    return sorted(list(set(found)))


def compare_resume(resume_text, job_text):

    resume_skills = set(extract_skills(resume_text))

    job_skills = set(extract_skills(job_text))

    matched = sorted(list(resume_skills & job_skills))

    missing = sorted(list(job_skills - resume_skills))

    if len(job_skills) == 0:

        score = 0

    else:

        score = round(len(matched) / len(job_skills) * 100)

    if score >= 80:

        recommendation = "Excellent Match"

    elif score >= 60:

        recommendation = "Good Match"

    elif score >= 40:

        recommendation = "Average Match"

    else:

        recommendation = "Poor Match"

    return {

        "match_score": score,

        "matched_skills": matched,

        "missing_skills": missing,

        "recommendation": recommendation

    }