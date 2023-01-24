import React from "react";
import "./header.css";
import Typical from "react-typical";

import CTA from "./CTA";
// import ME from "../../assets/img/headshot.jpg";
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
                "Dog Lover",
                1000,
                "Seattleite",
                1000
              ]}
            />
          </h4>
        </div>
        
        <CTA />
        <Socials />

        {/* <div className="headshot">
          <img src={ME} alt="Anita's Headshot" />
        </div> */}

        <a href="#contact" className="scroll-down"><HiArrowNarrowDown /></a>
      </div>
    </header>
  );
};

export default Header;