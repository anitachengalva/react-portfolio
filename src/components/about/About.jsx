import React from "react";
import "./about.css";

import DOG from "../../assets/img/nova-hike.JPG";

const About = () => {
  return (
    <section id="about">
      <h5>Nice To Meet You!</h5>
      <h2>Allow Me to Introduce Myself</h2>

      <div className="container about-container">
        <div className="about-image">
          <img src={DOG} alt="Nova and Anita on a hike!" />
        </div>
        
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
        
      </div>
    </section>
  );
};

export default About;

{/* <p>
I am currently a student at the University of Washington studying web
development, with the end goal of being a full stack developer. I am
very passionate about design and tech, and this career is the perfect
union of the two. As a new developer, I bring a fresh set of eyes and a
multidisciplinary approach to the table. I am eager to create an
interface and experience that is both appealing and intuitive to the
user.
Beyond web development, I am enthusiastic about robotics and have
experimented with both Arduino and Raspberry PI in the past. I also very
much enjoy hiking in the PNW, weather permitting. My favorite activity,
however, is hanging out with my pup Nova!
</p> */}
