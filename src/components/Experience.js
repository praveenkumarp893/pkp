import React from "react";
import { Link } from "react-router-dom";
import experienceData from "../data/experienceData";
import "../css/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience Highlights</h2>
      <div className="experience-grid">
        {experienceData.map((experience) => (
          <div key={experience.id} className="experience-card">
            <h3>{experience.company}</h3>
            <Link to={`/experience/${experience.id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
