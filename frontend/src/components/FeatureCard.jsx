import {
  FaRobot,
  FaFilePdf,
  FaGlobe,
  FaUserShield,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={40} />,
    title: "AI Job Detection",
    desc: "Detect fake and genuine job postings using Machine Learning and NLP.",
  },
  {
    icon: <FaFilePdf size={40} />,
    title: "PDF Analyzer",
    desc: "Upload job offer PDFs and let AI extract and analyze the content.",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "URL Scanner",
    desc: "Analyze LinkedIn, Naukri and other job URLs automatically.",
  },
  {
    icon: <FaUserShield size={40} />,
    title: "Resume Matching",
    desc: "Compare your resume against the job description using AI.",
  },
];

function Features() {
  return (
    <section className="container py-5">

      <h2 className="text-center mb-5">
        Powerful AI Features
      </h2>

      <div className="row">

        {features.map((feature, index) => (

          <div className="col-md-6 col-lg-3 mb-4" key={index}>

            <div className="card h-100 shadow">

              <div className="card-body text-center">

                <div className="mb-3 text-primary">

                  {feature.icon}

                </div>

                <h5>{feature.title}</h5>

                <p>{feature.desc}</p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;