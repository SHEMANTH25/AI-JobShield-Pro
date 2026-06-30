import { useEffect, useState } from "react";
import api from "../services/api";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
} from "recharts";

function Dashboard() {

  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {

    try {

      const response = await api.get("/api/dashboard/stats");

      setStats(response.data);

    } catch (err) {

      console.log(err);

    }

  };

  if (!stats)
    return (
      <div className="container py-5">
        <h3>Loading Dashboard...</h3>
      </div>
    );

  const pieData = [
    { name: "Safe", value: stats.safe },
    { name: "Suspicious", value: stats.suspicious },
    { name: "High Risk", value: stats.high_risk },
  ];

  const COLORS = ["#22C55E", "#FACC15", "#EF4444"];

  const barData = [
    { name: "Text", value: stats.text },
    { name: "PDF", value: stats.pdf },
    { name: "Image", value: stats.image },
    { name: "URL", value: stats.url },
    { name: "Resume", value: stats.resume },
  ];

  return (

    <div className="container py-5">

      <h2 className="mb-5">
        AI Analytics Dashboard
      </h2>

      {/* Statistics */}

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card shadow p-4 text-center">
            <h1>{stats.total}</h1>
            <p>Total Analyses</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow p-4 text-center">
            <h1 className="text-success">{stats.safe}</h1>
            <p>Safe Jobs</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow p-4 text-center">
            <h1 className="text-warning">{stats.suspicious}</h1>
            <p>Suspicious</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow p-4 text-center">
            <h1 className="text-danger">{stats.high_risk}</h1>
            <p>High Risk</p>
          </div>
        </div>

      </div>

      <div className="row mt-5">

        {/* Pie Chart */}

        <div className="col-lg-6">

          <div className="card p-4 shadow">

            <h4 className="mb-4">
              Analysis Distribution
            </h4>

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={110}
                  label
                >

                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Bar Chart */}

        <div className="col-lg-6">

          <div className="card p-4 shadow">

            <h4 className="mb-4">
              Analysis Types
            </h4>

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <BarChart data={barData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#2563EB"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;