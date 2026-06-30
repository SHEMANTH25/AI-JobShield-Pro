import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

function History() {

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {

    try {

      const response = await api.get("/api/history");

      setHistory(response.data);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load history.");

    }

  };

  const clearHistory = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to clear all history?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete("/api/history/clear");

      setHistory([]);

      toast.success("History cleared successfully.");

    } catch (err) {

      console.log(err);

      toast.error("Unable to clear history.");

    }

  };

  const filteredHistory = history.filter((item) =>
    item.analysis_type.toLowerCase().includes(search.toLowerCase()) ||
    item.prediction.toLowerCase().includes(search.toLowerCase())
  );

  const badgeColor = (prediction) => {

    if (prediction === "Highly Suspicious")
      return "danger";

    if (prediction === "Suspicious")
      return "warning";

    return "success";

  };

  return (

    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Analysis History</h2>

        <button
          className="btn btn-danger"
          onClick={clearHistory}
        >
          🗑 Clear History
        </button>

      </div>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by analysis type or prediction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card shadow p-4">

        <table className="table table-hover align-middle">

          <thead>

            <tr>

              <th>ID</th>
              <th>Type</th>
              <th>Prediction</th>
              <th>Fraud Score</th>
              <th>Confidence</th>
              <th>Date & Time</th>

            </tr>

          </thead>

          <tbody>

            {filteredHistory.length === 0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="text-center"
                >
                  No history available.
                </td>

              </tr>

            ) : (

              filteredHistory.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.analysis_type}</td>

                  <td>

                    <span
                      className={`badge bg-${badgeColor(item.prediction)}`}
                    >
                      {item.prediction}
                    </span>

                  </td>

                  <td>{item.fraud_score}</td>

                  <td>{item.confidence}%</td>

                  <td>
                    {new Date(item.created_at).toLocaleString()}
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default History;