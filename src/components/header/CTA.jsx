import React from "react";
import CV from "../../assets/AnitaChengalva_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" className="btn">View Resume</a>
      <a href="#contact" className="btn btn-primary">Get In Touch</a>
    </div>
  );
};

export default CTA;
