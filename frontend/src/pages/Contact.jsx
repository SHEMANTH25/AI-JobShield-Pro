import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="container py-5 text-white">
      <h1 className="mb-4">Contact</h1>
      <div className="card shadow p-5">
        <div className="mb-4">
          <h4>
            <FaUser className="me-3 text-primary" />
            S Hemanth Naidu
          </h4>
        </div>
        <div className="mb-4">
          <h5>
            <FaEnvelope className="me-3 text-danger" />
            Email
          </h5>
          <p>shemanthnaidu@gmail.com</p>
        </div>
        <div className="mb-4">
          <h5>
            <FaPhone className="me-3 text-success" />
            Phone
          </h5>
          <p>+91 6301472349</p>
        </div>
        <div>
          <h5>
            <FaGithub className="me-3" />
            GitHub
          </h5>
          <p>Add your GitHub repository link after deployment.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
