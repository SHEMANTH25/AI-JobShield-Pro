import {
  FaRobot,
  FaFilePdf,
  FaGlobe,
  FaUserShield
} from "react-icons/fa";

function Features() {

  const features = [
    {
      icon: <FaRobot size={40} />,
      title: "AI Job Detection",
      desc: "Detect fake job postings using NLP and Machine Learning."
    },
    {
      icon: <FaFilePdf size={40} />,
      title: "PDF Analysis",
      desc: "Upload PDF job offers for automatic AI analysis."
    },
    {
      icon: <FaGlobe size={40} />,
      title: "URL Scanner",
      desc: "Analyze job URLs from LinkedIn, Naukri and other portals."
    },
    {
      icon: <FaUserShield size={40} />,
      title: "Resume Matching",
      desc: "Compare your resume with the job description."
    }
  ];

  return (

    <section className="container py-5">

      <h2 className="text-center mb-5">
        AI Features
      </h2>

      <div className="row">

        {features.map((feature, index) => (

          <div className="col-md-6 col-lg-3 mb-4" key={index}>

            <div className="card h-100 shadow">

              <div className="card-body text-center">

                <div className="text-primary mb-3">
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