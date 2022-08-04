import React from "react";
import "./header.css";

import CTA from "./CTA";
import ME from "../../assets/img/headshot.jpg";
import Socials from "./Socials";

import {HiArrowNarrowDown} from "react-icons/hi";

const Header = () => {
  return (
    <header>
      <div id="header" className="container header-container">
        <h5>Hello, I'm</h5>
        <h1>Anita Chengalva</h1>
        <h5 className="text-light">Full-Stack Web Developer</h5>
        
        <CTA />
        <Socials />

        <div className="headshot">
          <img src={ME} alt="Anita's Headshot" />
        </div>

        <a href="#contact" className="scroll-down"><HiArrowNarrowDown /></a>
      </div>
    </header>
  );
};

export default Header;