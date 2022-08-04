import React from "react";
import CV from "../../assets/resume-portfolio.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV}>View Resume</a>
      <a href="#contact">Let's Connect</a>
    </div>
  );
};

export default CTA;
