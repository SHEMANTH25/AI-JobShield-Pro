import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const activeStyle = {
    color: "#38BDF8",
    fontWeight: "600",
    borderBottom: "2px solid #38BDF8",
    paddingBottom: "4px",
  };

  const normalStyle = {
    color: "#ffffff",
    textDecoration: "none",
    transition: "0.3s",
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow"
      style={{
        background: "linear-gradient(90deg, #0F172A, #1E293B)",
        padding: "15px 30px",
      }}
    >
      <div className="container-fluid">

        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: "#38BDF8",
            fontSize: "30px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          🤖 AI JobShield Pro
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div
            className="navbar-nav gap-3"
            style={{ fontSize: "16px" }}
          >

            <Link
              to="/"
              className="nav-link"
              style={location.pathname === "/" ? activeStyle : normalStyle}
            >
              🏠 Home
            </Link>

            <Link
              to="/job"
              className="nav-link"
              style={location.pathname === "/job" ? activeStyle : normalStyle}
            >
              💼 Job
            </Link>

            <Link
              to="/pdf"
              className="nav-link"
              style={location.pathname === "/pdf" ? activeStyle : normalStyle}
            >
              📄 PDF
            </Link>

            <Link
              to="/image"
              className="nav-link"
              style={location.pathname === "/image" ? activeStyle : normalStyle}
            >
              🖼 Image
            </Link>

            <Link
              to="/url"
              className="nav-link"
              style={location.pathname === "/url" ? activeStyle : normalStyle}
            >
              🌐 URL
            </Link>

            <Link
              to="/resume"
              className="nav-link"
              style={location.pathname === "/resume" ? activeStyle : normalStyle}
            >
              📑 Resume
            </Link>

            <Link
              to="/dashboard"
              className="nav-link"
              style={
                location.pathname === "/dashboard"
                  ? activeStyle
                  : normalStyle
              }
            >
              📊 Dashboard
            </Link>

            <Link
              to="/history"
              className="nav-link"
              style={
                location.pathname === "/history"
                  ? activeStyle
                  : normalStyle
              }
            >
              🕘 History
            </Link>

            <Link
              to="/about"
              className="nav-link"
              style={
                location.pathname === "/about"
                  ? activeStyle
                  : normalStyle
              }
            >
              ℹ About
            </Link>

            <Link
              to="/contact"
              className="nav-link"
              style={
                location.pathname === "/contact"
                  ? activeStyle
                  : normalStyle
              }
            >
              📞 Contact
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;