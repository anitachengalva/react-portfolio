import React from "react";
import "./header.css";
import Typical from "react-typical";

import CTA from "./CTA";
import Socials from "./Socials";

import {HiArrowNarrowDown} from "react-icons/hi";

const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <div className="header-text-container">
          <h4>Hello, I'm</h4>
          <h1>Anita Chengalva</h1>
          <h4 className="text-light">
            <Typical
              loop={Infinity}
              steps={[
                "Full Stack Web Developer",
                1000,
                "Proficent in Node.js",
                1000,
                "Proficent in React.js",
                1000,
                "Proficent in Progressive Web Applications",
                1000,
                "Proficent in Search Engine Optimization",
                1000,
                "Proficent in CSS Frameworks",
                1000,
                "Proficent in SQL and MongoDB",
                1000,
                "Passionate for Designing Elegent UI",
                1000,
                "Avid Hiker",
                1000,
                "Dog Mom",
                1000,
                "Coffee Enthusiast",
                1000,
                "Seattleite",
                1000
              ]}
            />
          </h4>
        </div>
        
        <CTA />
        <Socials />

        <a href="#contact" className="scroll-down"><HiArrowNarrowDown /></a>
      </div>
    </header>
  );
};

export default Header;