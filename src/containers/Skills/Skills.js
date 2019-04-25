// This area will map out my skills and everything. I will state what I am able to do and which libraries and languages I am proficient in

import React from "react";
import "../../assets/css/icon-font.css";

const Skills = (props) => {
  return (
    <section className="skills">

      <div className="container skills__container u-center-text">

        <h1 className="skills__title u-margin-bottom-tiny">As a full stack developer</h1>
        <h4 className="u-margin-bottom-medium">I have knowledge in the following areas</h4>

        <div className="skills__skillset u-margin-bottom-medium">
          <div>
            <i className="icon-basic-webpage-img-txt"></i>
            <h2>Frontend</h2>
            <p>HTML, CSS, JavaScript, SASS</p>
          </div>

          <div>
            <i className="icon-basic-server2"></i>
            <h2>Backend</h2>
            <p>Node.js, MySql, Sequalize, MongoDB, Mongoose</p>
          </div>

          <div>
            <i className="icon-basic-folder-multiple"></i>
            <h2>Frameworks/Libraries</h2  >
            <p>Bootstrap, MD Bootstrap, jQuery, React.js/Redux</p>
          </div>

          <div>
            <i className="fas fa-code-branch"></i>
            <h2>Version Control</h2>
            <p>Git, Github</p>
          </div>

        </div>

        <h1 className="skills__title u-margin-bottom-tiny">Future roadmap</h1>
        <h4 className="u-margin-bottom-medium">As programming is a constantly evolving field I also do my best to stay to constantly learn new skills</h4>

        <div className="skills__inProgress">
          <div>
            <i className="fas fa-code"></i>
            <h2>Languages</h2>
            <p>Python, Java, C#</p>
          </div>

          <div>
            <i className="icon-basic-server2"></i>
            <h2>Backend</h2>
            <p>GraphQL</p>
          </div>

          <div>
            <i className="icon-basic-folder-multiple"></i>
            <h2>Frameworks/Libraries</h2  >
            <p>Angular, Vue.js</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills;