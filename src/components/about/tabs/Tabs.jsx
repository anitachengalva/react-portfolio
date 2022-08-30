import React from "react";

import Bio from "./Bio";
import Skills from "./Skills";
import Experience from "./Experience";

const Tabs = () => {
    return (
        <div className="about-tabs">
          <ul className="tab tab-pills" role="tablist">
            <li className="tab-item">
              <a className="tab-link active" data-toggle="pill" href="#about2">About</a>
            </li>
            <li className="tab-item">
              <a className="tab-link" data-toggle="pill" href="#skills">Skills</a>
            </li>
            <li className="tab-item">
              <a className="tab-link" data-toggle="pill" href="#experience">Experience</a>
            </li>
          </ul>

          <div className="tab-content">
            <Bio />
            <Skills />
            <Experience />
            
          </div>
        </div>
    );
};

export default Tabs;