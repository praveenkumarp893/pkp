import React from "react";
import { useParams } from "react-router-dom";
import experienceData from "../data/experienceData";

const ExperienceDetails = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const experience = experienceData.find((exp) => exp.id === parseInt(id)); // Match ID (ensure parseInt is used for numeric IDs)

  if (!experience) {
    return <p>Experience not found.</p>;
  }

  return (
    <div style={{ padding: "50px", color: "#fff", backgroundColor: "#141e30" }}>
      <h1>{experience.title}</h1>
      <p>
        <strong>Company:</strong> {experience.company}
      </p>
      <p>{experience.details}</p>
    </div>
  );
};

export default ExperienceDetails;