import { useState } from "react";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { downloadReport } from "../utils/reportGenerator";
import { toast } from "react-toastify";

function UrlAnalyzer() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeURL = async () => {
    if (!url.trim()) {
      toast.warning("Please enter a website URL.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/api/url/analyze", {
        url: url,
      });

      setResult(response.data);

      toast.success("URL analyzed successfully.");

    } catch (err) {
      console.log(err);

      toast.error("Unable to analyze URL.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">

      <h2 className="mb-3">URL Analyzer</h2>

      <p className="text-muted mb-4">
        Enter a recruitment website URL to detect phishing,
        fake job portals, and suspicious domains.
      </p>

      <div className="card shadow p-4">

        <input
          type="text"
          className="form-control"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          className="btn btn-primary mt-4"
          onClick={analyzeURL}
          disabled={loading}
        >
          Analyze URL
        </button>

        {loading && <LoadingSpinner />}

      </div>

      {result && (

        <div className="card shadow mt-5 p-4">

          <h4 className="mb-4">Analysis Result</h4>

          <div className="row">

            <div className="col-md-3">
              <h6>Prediction</h6>
              <h5>{result.prediction}</h5>
            </div>

            <div className="col-md-3">
              <h6>Fraud Score</h6>
              <h5>{result.fraud_score}</h5>
            </div>

            <div className="col-md-3">
              <h6>Confidence</h6>
              <h5>{result.confidence}%</h5>
            </div>

            <div className="col-md-3">
              <h6>URL Score</h6>
              <h5>{result.url_score}</h5>
            </div>

          </div>

          <hr />

          <h5>URL Security Findings</h5>

          {result.url_reasons && result.url_reasons.length > 0 ? (

            <div className="mt-3">

              {result.url_reasons.map((reason, index) => (

                <span
                  key={index}
                  className="badge bg-warning text-dark me-2 mb-2 p-2"
                >
                  {reason}
                </span>

              ))}

            </div>

          ) : (

            <p className="text-success">
              No suspicious URL indicators found.
            </p>

          )}

          <hr />

          <h5>Detected Scam Indicators</h5>

          {result.keywords_found && result.keywords_found.length > 0 ? (

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

          ) : (

            <p className="text-success">
              No suspicious keywords detected.
            </p>

          )}

          <hr />

          <div className="text-end">

            <button
              className="btn btn-success"
              onClick={() =>
                downloadReport(result, "URL Analysis")
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

export default UrlAnalyzer;