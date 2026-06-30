import { useState } from "react";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { downloadReport } from "../utils/reportGenerator";
import { toast } from "react-toastify";

function JobAnalyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeJob = async () => {
    if (!text.trim()) {
      toast.warning("Please enter a job description.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/api/analyze/text", {
        text,
      });

      setResult(response.data);

      toast.success("Analysis completed successfully.");

    } catch (err) {
      console.log(err);

      toast.error("Unable to analyze job description.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">

      <h2 className="mb-3">Job Description Analyzer</h2>

      <p className="text-muted mb-4">
        Paste any job description below. AI JobShield Pro will evaluate
        it using Machine Learning and Explainable AI.
      </p>

      <div className="card shadow p-4">

        <textarea
          rows="10"
          className="form-control"
          placeholder="Paste job description here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="btn btn-primary mt-4"
          onClick={analyzeJob}
          disabled={loading}
        >
          Analyze Job
        </button>

        {loading && <LoadingSpinner />}

      </div>

      {result && (

        <div className="card shadow mt-5 p-4">

          <h4 className="mb-4">Analysis Result</h4>

          <div className="row">

            <div className="col-md-4">
              <h6>Prediction</h6>
              <h5>{result.prediction}</h5>
            </div>

            <div className="col-md-4">
              <h6>Fraud Score</h6>
              <h5>{result.fraud_score}</h5>
            </div>

            <div className="col-md-4">
              <h6>Confidence</h6>
              <h5>{result.confidence}%</h5>
            </div>

          </div>

          <hr />

          <h5>Detected Indicators</h5>

          {result.keywords_found.length === 0 ? (

            <p className="text-success">
              No suspicious indicators detected.
            </p>

          ) : (

            <div className="mt-3">

              {result.keywords_found.map((item, index) => (

                <span
                  key={index}
                  className="badge bg-danger me-2 mb-2 p-2"
                >
                  {item}
                </span>

              ))}

            </div>

          )}

          <hr />

          <div className="text-end">

            <button
              className="btn btn-success"
              onClick={() =>
                downloadReport(result, "Job Description")
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

export default JobAnalyzer;