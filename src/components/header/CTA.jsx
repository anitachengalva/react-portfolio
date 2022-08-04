import React from "react";
import CV from "../../assets/resume-portfolio.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" className="btn">View Resume</a>
      <a href="#contact" className="btn btn-primary">Let's Connect</a>
    </div>
  );
};

export default CTA;
