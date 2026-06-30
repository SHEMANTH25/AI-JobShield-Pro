import { useState } from "react";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { downloadReport } from "../utils/reportGenerator";
import { toast } from "react-toastify";

function ImageAnalyzer() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeImage = async () => {
    if (!file) {
      toast.warning("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post(
        "/api/image/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);

      toast.success("Image analyzed successfully.");

    } catch (err) {
      console.log(err);

      toast.error("Unable to analyze image.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">

      <h2 className="mb-3">Image Analyzer</h2>

      <p className="text-muted mb-4">
        Upload a recruitment poster, screenshot or advertisement.
        OCR extracts the text and AI analyzes it for recruitment scams.
      </p>

      <div className="card shadow p-4">

        <input
          type="file"
          accept="image/*"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          className="btn btn-primary mt-4"
          onClick={analyzeImage}
          disabled={loading}
        >
          Analyze Image
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
                downloadReport(result, "Image Analysis")
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

export default ImageAnalyzer;