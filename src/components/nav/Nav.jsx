import React from "react";
import "./nav.css";

import {MdOutlineStarBorderPurple500} from 'react-icons/md';
import {BsFillPersonFill} from "react-icons/bs";
import {BsTools} from "react-icons/bs";
import {FaLaptopCode} from "react-icons/fa";
import {FiMail} from "react-icons/fi"

const Nav = () => {
  return (
    <nav id="about">
      <a href="#header"><MdOutlineStarBorderPurple500 /></a>
      <a href="#about"><BsFillPersonFill /></a>
      <a href="#skills"><BsTools /></a>
      <a href="#projects"><FaLaptopCode /></a>
      <a href="#contact"><FiMail /></a>
    </nav>
  );
};

export default Nav;
