import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            className="container py-5 text-center"
            style={{ minHeight: "75vh" }}
        >
            <h1
                style={{
                    fontSize: "55px",
                    fontWeight: "bold",
                    color: "#38BDF8"
                }}
            >
                JobShield AI
            </h1>

            <h4
                style={{
                    color: "#CBD5E1",
                    marginTop: "20px"
                }}
            >
                AI Powered Recruitment Fraud Detection Platform
            </h4>

            <p
                style={{
                    maxWidth: "800px",
                    margin: "25px auto",
                    color: "#94A3B8",
                    fontSize: "18px"
                }}
            >
                Detect fake job postings using Artificial Intelligence,
                OCR, PDF Analysis, Resume Matching,
                Website Verification and Explainable AI.
            </p>

            <div
                className="d-flex justify-content-center flex-wrap gap-3 mt-5"
            >
                <Link className="btn btn-primary btn-lg px-5" to="/job">
                    Analyze Text
                </Link>

                <Link className="btn btn-success btn-lg px-5" to="/pdf">
                    Analyze PDF
                </Link>

                <Link className="btn btn-warning btn-lg px-5" to="/image">
                    Analyze Image
                </Link>

                <Link className="btn btn-info btn-lg px-5" to="/url">
                    Analyze URL
                </Link>
            </div>
        </section>
    );
}

export default Hero;