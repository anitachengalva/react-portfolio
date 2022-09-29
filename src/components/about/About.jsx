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
        <div className="about-content">
          <h5>
            University of Washington graduate and Full Stack web developer with
            a passion for integrating design and tech. Founder of 
            <a href="www.adoptmeseaattle.org" target="_blank"> Adopt Me Seattle</a>
            . As a new developer, I bring a fresh set of eyes and a
            multidisciplinary approach to the table. I am eager to create an
            interface and experience that is both appealing and intuitive to the
            user. Beyond web development, I am enthusiastic about robotics and
            have experimented with both Arduino and Raspberry PI in the past. I
            also very much enjoy hiking in the PNW, weather permitting. My
            favorite activity, however, is hanging out with my pup Nova!
          </h5>
        </div>
      </div>
    </section>
  );
};

export default About;

{
  /* <p>
I am currently a student at the University of Washington studying web
development, with the end goal of being a full stack developer. I am
very passionate about design and tech, and this career is the perfect
union of the two. 
</p> */
}
