import React from "react";
import "./about.css";

const About = () => {
  return (
      <section id="about">
        <h1>Nice to meet you, I'm Anita!</h1>
        <p>
          I am currently a student at the University of Washington studying web
          development, with the end goal of being a full stack developer. I am
          very passionate about design and tech, and this career is the perfect
          union of the two. As a new developer, I bring a fresh set of eyes and
          a multidisciplinary approach to the table. I am eager to create an
          interface and experience that is both appealing and intuitive to the
          user.{" "}
        </p>
        <p>
          Beyond web development, I am enthusiastic about robotics and have
          experimented with both Arduino and Raspberry PI in the past. I also
          very much enjoy hiking in the PNW, weather permitting. My favorite
          activity, however, is hanging out with my pup Nova!
        </p>
        <img src="./assets/images/me&dog.jpg" alt="Nova & Anita" />
      </section>
  );
};

export default About;
