import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaFileAlt,
  FaImage,
  FaGlobe,
  FaUserTie,
  FaRobot,
} from "react-icons/fa";

function Hero() {
  return (
    <>
      {/* Hero Section */}

      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "white",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <div className="container">

          <FaShieldAlt size={70} color="#38bdf8" />

          <h1
            style={{
              fontSize: "54px",
              fontWeight: "700",
              marginTop: "20px",
            }}
          >
            AI JobShield Pro
          </h1>

          <h5
            style={{
              color: "#38bdf8",
              marginTop: "15px",
              fontWeight: "500",
            }}
          >
            AI-Powered Recruitment Fraud Detection Platform
          </h5>

          <p
            style={{
              maxWidth: "760px",
              margin: "25px auto",
              fontSize: "20px",
              color: "#CBD5E1",
              lineHeight: "1.8",
            }}
          >
            Analyze job postings, websites, resumes, PDFs, and images to
            identify recruitment scams using Machine Learning, OCR,
            Rule-Based Detection, and Explainable AI.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
              marginTop: "35px",
              marginBottom: "40px",
            }}
          >
            <Link
              to="/job"
              className="btn btn-primary btn-lg"
            >
              Analyze Job
            </Link>

            <Link
              to="/dashboard"
              className="btn btn-outline-light btn-lg"
            >
              View Dashboard
            </Link>

            <Link
              to="/about"
              className="btn btn-outline-info btn-lg"
            >
              About Project
            </Link>
          </div>

        </div>
      </section>

      {/* Features */}

      <section className="container py-5">

        <h2 className="text-center mb-5">
          Our Features
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <FaRobot size={45} className="mx-auto text-primary mb-3" />
              <h5>Job Analysis</h5>
              <p>
                Detect fake recruitment advertisements using
                Machine Learning and Explainable AI.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <FaFileAlt size={45} className="mx-auto text-success mb-3" />
              <h5>PDF Analysis</h5>
              <p>
                Upload recruitment PDFs and identify suspicious
                content automatically.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <FaImage size={45} className="mx-auto text-warning mb-3" />
              <h5>Image OCR</h5>
              <p>
                Extract text from recruitment posters using OCR
                technology for scam detection.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <FaGlobe size={45} className="mx-auto text-info mb-3" />
              <h5>URL Verification</h5>
              <p>
                Verify suspicious recruitment websites before
                sharing your personal information.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <FaUserTie size={45} className="mx-auto text-danger mb-3" />
              <h5>Resume Matching</h5>
              <p>
                Compare your resume against the job description
                and identify missing skills.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-4">
              <FaShieldAlt size={45} className="mx-auto text-secondary mb-3" />
              <h5>Explainable AI</h5>
              <p>
                Understand why a job posting was marked as
                suspicious with transparent AI explanations.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section
        className="py-5"
        style={{
          background: "#F8FAFC",
        }}
      >
        <div className="container">

          <h2 className="text-center mb-5">
            Platform Highlights
          </h2>

          <div className="row text-center">

            <div className="col-md-3 mb-4">
              <div className="card shadow p-4">
                <h2 className="text-primary">99.38%</h2>
                <p>Model Accuracy</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow p-4">
                <h2 className="text-success">5</h2>
                <p>Analysis Modules</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow p-4">
                <h2 className="text-danger">100+</h2>
                <p>Scam Indicators</p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow p-4">
                <h2 className="text-info">24/7</h2>
                <p>Fraud Detection</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* How It Works */}

      <section className="container py-5">

        <h2 className="text-center mb-5">
          How It Works
        </h2>

        <div className="row text-center">

          <div className="col-md-3">
            <h1>1️⃣</h1>
            <h5>Choose Module</h5>
            <p>Select Text, PDF, Image, URL, or Resume Analyzer.</p>
          </div>

          <div className="col-md-3">
            <h1>2️⃣</h1>
            <h5>Upload Input</h5>
            <p>Paste text or upload your file for analysis.</p>
          </div>

          <div className="col-md-3">
            <h1>3️⃣</h1>
            <h5>AI Analysis</h5>
            <p>The hybrid AI engine analyzes the input for fraud indicators.</p>
          </div>

          <div className="col-md-3">
            <h1>4️⃣</h1>
            <h5>View Report</h5>
            <p>Review the prediction, fraud score, confidence, and detected indicators.</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Hero;