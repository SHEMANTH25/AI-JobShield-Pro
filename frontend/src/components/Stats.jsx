function Stats() {
  return (
    <section className="container py-5">

      <h2 className="text-center mb-5">
        Platform Statistics
      </h2>

      <div className="row text-center">

        <div className="col-md-3 mb-4">
          <div className="card shadow p-4">
            <h1 className="text-primary">95%</h1>
            <p>Prediction Accuracy</p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow p-4">
            <h1 className="text-success">10K+</h1>
            <p>Jobs Analyzed</p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow p-4">
            <h1 className="text-danger">250+</h1>
            <p>Fake Jobs Detected</p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow p-4">
            <h1 className="text-warning">24/7</h1>
            <p>AI Monitoring</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Stats;