import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#020617",
        color: "white",
        marginTop: "80px",
      }}
    >
      <div className="container py-5">

        <div className="row">

          {/* About */}

          <div className="col-md-4 mb-4">

            <h3 className="mb-3">
              <FaShieldAlt className="me-2 text-info" />
              AI JobShield Pro
            </h3>

            <p style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
              AI-powered recruitment fraud detection platform that
              helps job seekers identify fake job postings,
              phishing websites, and online recruitment scams using
              Machine Learning and Explainable AI.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-md-4 mb-4">

            <h5 className="mb-3">Quick Links</h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/job">
                  Job Analyzer
                </Link>
              </li>

              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/history">
                  History
                </Link>
              </li>

              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className="text-light text-decoration-none" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-md-4 mb-4">

            <h5 className="mb-3">Contact</h5>

            <p style={{ color: "#CBD5E1" }}>
              <FaEnvelope className="me-2 text-info" />
              shemanthnaidu@gmail.com
            </p>

            <p style={{ color: "#CBD5E1" }}>
              <FaPhoneAlt className="me-2 text-success" />
              +91 6301472349
            </p>

            <div className="mt-4">

              <a
                href="https://github.com/SHEMANTH25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-4"
              >
                <FaGithub size={28} />
              </a>

              {/* Replace with your LinkedIn profile */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedin size={28} />
              </a>

            </div>

          </div>

        </div>

        <hr style={{ borderColor: "#334155" }} />

        <div
          className="text-center"
          style={{
            color: "#CBD5E1",
            fontSize: "15px",
          }}
        >
          © 2026 AI JobShield Pro. All Rights Reserved.
          <br />
          Developed by <strong>S Hemanth Naidu</strong>
        </div>

      </div>
    </footer>
  );
}

export default Footer;