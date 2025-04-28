import React from "react";
import "../styles/Results.css";

const Results = ({ clearImage }) => {
  return (
    <div className="results-container">
      <h2>Dehazed Image</h2>
      <img src={clearImage} alt="Clear Output" className="clear-image" />
    </div>
  );
};

export default Results;
