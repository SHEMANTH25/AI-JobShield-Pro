import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container-fluid text-white"
      style={{
        minHeight: "90vh",
        background:
          "linear-gradient(135deg,#0F172A,#1E293B,#2563EB)",
      }}
    >
      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1
              style={{
                fontSize: "58px",
                fontWeight: "700",
              }}
            >
              🤖 AI JobShield Pro
            </h1>

            <h3 className="mt-3 text-info">
              Detect Fake Jobs with Explainable AI
            </h3>

            <p
              className="mt-4"
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
              }}
            >
              Protect job seekers from fraudulent job postings using
              Machine Learning, Rule-Based Detection, OCR, Resume
              Matching and Explainable AI.
            </p>

            <div className="mt-4">

              <Link
                to="/job"
                className="btn btn-info btn-lg me-3"
              >
                Analyze Job
              </Link>

              <Link
                to="/dashboard"
                className="btn btn-outline-light btn-lg"
              >
                View Dashboard
              </Link>

            </div>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
              alt="AI"
              style={{
                width: "420px",
                maxWidth: "100%",
              }}
            />

          </div>

        </div>

        <div className="row mt-5">

          <div className="col-md-4">

            <div className="card p-4 text-center shadow">

              <h2>99.38%</h2>

              <h5>ML Accuracy</h5>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card p-4 text-center shadow">

              <h2>5</h2>

              <h5>AI Modules</h5>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card p-4 text-center shadow">

              <h2>24/7</h2>

              <h5>Fraud Detection</h5>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;