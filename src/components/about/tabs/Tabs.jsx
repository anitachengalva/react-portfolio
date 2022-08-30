import React from "react";

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
            <div id="about2" className="tab-container tab-pane active">
              <h3>About Me</h3>
              <h5>Hello hello hello!</h5>
            </div>
            <div id="skills" className="tab-container tab-pane fade">
              <h3>Skills</h3>
              <h5>Hello hello hello</h5>
            </div>
            <div id="experience" className="tab-container tab-pane fade">
              <h3>Experience</h3>
              <h5>Hello hello hello</h5>
            </div>
          </div>
        </div>
    );
};

export default Tabs;