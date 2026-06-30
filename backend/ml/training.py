import os
import joblib
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer

from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC
from sklearn.ensemble import RandomForestClassifier

from sklearn.metrics import accuracy_score, classification_report

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# -------------------------
# DATASET 1
# -------------------------

df1 = pd.read_csv(
    os.path.join(BASE_DIR, "datasets", "dataset1", "fake_job_postings.csv")
)

df1 = df1.fillna("")

df1["text"] = (
    df1["title"] + " " +
    df1["company_profile"] + " " +
    df1["description"] + " " +
    df1["requirements"] + " " +
    df1["benefits"]
)

df1 = df1[["text", "fraudulent"]]

# -------------------------
# DATASET 3
# -------------------------

df3 = pd.read_excel(
    os.path.join(BASE_DIR, "datasets", "dataset3", "labeled_dataset.xlsx")
)

df3 = df3[["text", "fraudulent"]]

df3 = df3.dropna(subset=["fraudulent"])
df3["fraudulent"] = df3["fraudulent"].astype(int)

# -------------------------
# MERGE
# -------------------------

df = pd.concat([df1, df3], ignore_index=True)

df = df.drop_duplicates(subset=["text"])

print("Dataset Shape:", df.shape)

X = df["text"]
y = df["fraudulent"]

# -------------------------
# TF-IDF
# -------------------------

vectorizer = TfidfVectorizer(
    stop_words="english",
    max_features=15000
)

X = vectorizer.fit_transform(X)

# -------------------------
# TRAIN TEST SPLIT
# -------------------------

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# -------------------------
# MODELS
# -------------------------

models = {
    "Logistic Regression": LogisticRegression(max_iter=1000),
    "Naive Bayes": MultinomialNB(),
    "Linear SVM": LinearSVC(),
    "Random Forest": RandomForestClassifier(
        n_estimators=200,
        random_state=42
    )
}

best_model = None
best_name = ""
best_accuracy = 0

for name, model in models.items():

    print("\n" + "=" * 60)
    print(name)
    print("=" * 60)

    model.fit(X_train, y_train)

    pred = model.predict(X_test)

    accuracy = accuracy_score(y_test, pred)

    print("Accuracy:", round(accuracy * 100, 2), "%")

    print(classification_report(y_test, pred))

    if accuracy > best_accuracy:

        best_accuracy = accuracy
        best_model = model
        best_name = name

print("\n" + "=" * 60)
print("BEST MODEL:", best_name)
print("Accuracy:", round(best_accuracy * 100, 2), "%")
print("=" * 60)

os.makedirs("saved_models", exist_ok=True)

joblib.dump(best_model, "saved_models/model.pkl")
joblib.dump(vectorizer, "saved_models/vectorizer.pkl")

print("\nModel Saved Successfully!")