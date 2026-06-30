import {
  FaShieldAlt,
  FaRobot,
  FaBrain,
  FaFilePdf,
  FaImage,
  FaLink,
  FaFileAlt,
} from "react-icons/fa";

function About() {
  return (
    <div className="container py-5 text-white">

      <h1 className="mb-4">
        About AI JobShield Pro
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#CBD5E1",
          lineHeight: "1.8",
        }}
      >
        AI JobShield Pro is an intelligent recruitment fraud detection
        platform developed to help job seekers identify fake job postings,
        phishing websites, fraudulent recruitment advertisements, and
        suspicious resumes using Artificial Intelligence and Machine
        Learning.
      </p>

      <div className="row mt-5">

        <div className="col-md-6 mb-4">

          <div className="card shadow p-4 h-100">

            <h4>
              <FaShieldAlt className="text-primary me-2" />
              Project Objective
            </h4>

            <p className="mt-3">
              To protect job seekers from online recruitment scams by
              combining Machine Learning, OCR, URL analysis, Resume
              Matching, and Explainable AI into a single platform.
            </p>

          </div>

        </div>

        <div className="col-md-6 mb-4">

          <div className="card shadow p-4 h-100">

            <h4>
              <FaRobot className="text-success me-2" />
              AI Features
            </h4>

            <ul className="mt-3">

              <li>Job Description Analysis</li>

              <li>PDF Scam Detection</li>

              <li>Image OCR Analysis</li>

              <li>Website URL Security Check</li>

              <li>Resume Matching</li>

              <li>Explainable AI Predictions</li>

            </ul>

          </div>

        </div>

      </div>

      <div className="card shadow p-4 mt-3">

        <h4 className="mb-4">
          <FaBrain className="text-info me-2" />
          Technologies Used
        </h4>

        <div className="row text-center">

          <div className="col-md-2">
            <FaRobot size={35} className="mb-2 text-primary" />
            <h6>FastAPI</h6>
          </div>

          <div className="col-md-2">
            <FaBrain size={35} className="mb-2 text-success" />
            <h6>Machine Learning</h6>
          </div>

          <div className="col-md-2">
            <FaFilePdf size={35} className="mb-2 text-danger" />
            <h6>PDF Analysis</h6>
          </div>

          <div className="col-md-2">
            <FaImage size={35} className="mb-2 text-warning" />
            <h6>OCR</h6>
          </div>

          <div className="col-md-2">
            <FaLink size={35} className="mb-2 text-info" />
            <h6>URL Security</h6>
          </div>

          <div className="col-md-2">
            <FaFileAlt size={35} className="mb-2 text-secondary" />
            <h6>React</h6>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;