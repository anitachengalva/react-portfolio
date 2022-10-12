import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What am I familiar with?</h5>
      <h2>Skills and Technologies</h2>

      <div className="container skills-container">
        <article>
          <a>HTML5</a> — <a>CSS3</a> — <a>Javascript</a>
        </article>
        <article>
          <a>React.js</a> — <a>Node.js</a> — <a>Express.js</a> — <a>Handlebars.js</a> — <a>jQuery</a> — <a>Progressive Web Applications</a> — <a>Workbox</a>
        </article>
        <article>
          <a>MySQL</a> — <a>Sequelize</a> — <a>MongoDB</a> — <a>Mongoose</a> — <a>GraphQL</a> — <a>Apollo Server</a>
        </article>
        <article>
          <a>Bootstrap</a> — <a>TailwindCSS</a> — <a>HeadlessUI</a> — <a>SemanticUI</a>
        </article>
        <article>
          <a>Git</a> — <a>Heroku</a> — <a>Insomnia</a> — <a>Wordpress</a> — <a>Windows</a> — <a>Unix</a> — <a>Arduino</a> — <a>RaspberryPi</a>
        </article>
      </div>
    </section>
  );
};

export default Skills;