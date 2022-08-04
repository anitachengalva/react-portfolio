import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container.header__container">
        <h5>Nice to meet you! I'm</h5>
        <h1>Anita Chengalva</h1>
        <h5 className="text-light">Full-Stack Web Developer</h5>
      </div>
    </header>
  );
};

export default Header;