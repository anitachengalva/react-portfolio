import React from "react";

import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai"

const Socials = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/anitachengalva/" target="_blank"><AiFillLinkedin /></a>
      <a href="https://github.com/anitachengalva" target="_blank"><FaGithub /></a>
      <a href="https://g.dev/anitachengalva" target="_blank"><AiFillGoogleSquare /></a>
    </div>
  );
};

export default Socials;
