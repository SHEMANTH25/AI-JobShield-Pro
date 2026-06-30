import { useState } from "react";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { downloadReport } from "../utils/reportGenerator";
import { toast } from "react-toastify";

function ResumeAnalyzer() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    if (!resume) {
      toast.warning("Please upload your resume.");
      return;
    }

    if (!jobDescription.trim()) {
      toast.warning("Please enter a job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("job_description", jobDescription);

    try {
      setLoading(true);

      const response = await api.post(
        "/api/resume/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);

      toast.success("Resume analyzed successfully.");

    } catch (err) {
      console.log(err);

      toast.error("Unable to analyze resume.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">

      <h2 className="mb-3">Resume Analyzer</h2>

      <p className="text-muted mb-4">
        Upload your resume and compare it with a job description to
        identify matching and missing skills.
      </p>

      <div className="card shadow p-4">

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="form-control"
          onChange={(e) => setResume(e.target.files[0])}
        />

        <textarea
          rows="8"
          className="form-control mt-3"
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />

        <button
          className="btn btn-primary mt-4"
          onClick={analyzeResume}
          disabled={loading}
        >
          Analyze Resume
        </button>

        {loading && <LoadingSpinner />}

      </div>

      {result && (

        <div className="card shadow mt-5 p-4">

          <h4 className="mb-4">Resume Analysis Result</h4>

          <div className="row">

            <div className="col-md-6">
              <h6>Match Score</h6>
              <h3 className="text-primary">
                {result.match_score}%
              </h3>
            </div>

            <div className="col-md-6">
              <h6>Recommendation</h6>
              <h5>{result.recommendation}</h5>
            </div>

          </div>

          <hr />

          <h5>Matched Skills</h5>

          <div className="mt-3">

            {result.matched_skills.length > 0 ? (

              result.matched_skills.map((skill, index) => (

                <span
                  key={index}
                  className="badge bg-success me-2 mb-2 p-2"
                >
                  {skill}
                </span>

              ))

            ) : (

              <p>No matching skills found.</p>

            )}

          </div>

          <hr />

          <h5>Missing Skills</h5>

          <div className="mt-3">

            {result.missing_skills.length > 0 ? (

              result.missing_skills.map((skill, index) => (

                <span
                  key={index}
                  className="badge bg-danger me-2 mb-2 p-2"
                >
                  {skill}
                </span>

              ))

            ) : (

              <p>No missing skills.</p>

            )}

          </div>

          <hr />

          <div className="text-end">

            <button
              className="btn btn-success"
              onClick={() =>
                downloadReport(
                  {
                    prediction: result.recommendation,
                    fraud_score: result.match_score,
                    confidence: result.match_score,
                    keywords_found: result.missing_skills,
                  },
                  "Resume Analysis"
                )
              }
            >
              📄 Download Report
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default ResumeAnalyzer;