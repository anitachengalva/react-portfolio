import React from "react";
import "./nav.css";

import {MdOutlineStarBorderPurple500} from 'react-icons/md';
import {BsFillPersonFill} from "react-icons/bs";
import {BsTools} from "react-icons/bs";
import {FaLaptopCode} from "react-icons/fa";
import {FiMail} from "react-icons/fi";

const Nav = () => {
  return (
    <nav>
      <a href="#"><MdOutlineStarBorderPurple500 /></a>
      <a href="#about"></a>
      <a href="#skills"></a>
      <a href="#projects"></a>
      <a href="#contact"></a>
    </nav>
  )
}



// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("#");
//   return (
//     <nav id="about">
//       <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><MdOutlineStarBorderPurple500 /></a>
//       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill /></a>
//       <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BsTools /></a>
//       <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><FaLaptopCode /></a>
//       <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMail /></a>
//     </nav>
//   );
// };

export default Nav;
