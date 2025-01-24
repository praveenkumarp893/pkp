import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            DevOps engineer with 6.6 years of experience in continuous integration and continuous
            deployment. I’m looking to secure a new role to make the best use of my existing
            skills and further my personal and professional development.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/praveen.jpg" alt="Praveen Kumar Prabhakaran" />
        </div>
      </div>
    </section>
  );
};

export default About;
