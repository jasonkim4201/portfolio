// This area will map out my skills and everything. I will state what I am able to do and which libraries and languages I am proficient in

import React from "react";
import "../../assets/css/icon-font.css";
import Skillset from "./Skillset/Skillset";

const Skills = (props) => {
  return (
    <section className="skills">

      <div className="container skills__container u-center-text">

        <h1 className="skills__title u-margin-bottom-tiny">As a full stack developer</h1>
        <h4 className="u-margin-bottom-medium">I have knowledge in the following areas</h4>

        <div className="skills__skillset u-margin-bottom-medium">
          <Skillset classProp="icon-basic-webpage-img-txt" type="Frontend" typeName="HTML, CSS, JavaScript, SASS"/>
          <Skillset classProp="icon-basic-server2" type="Backend" typeName="Node.js, MySql, Sequalize, MongoDB, Mongoose" />
          <Skillset classProp="icon-basic-folder-multiple" type="Frameworks/Libraries" typeName="Bootstrap, MD Bootstrap, jQuery, React.js/Redux" />
          <Skillset classProp="fas fa-code-branch" type="Version Control" typeName="Git, Github" />
        </div>

        <h1 className="skills__title u-margin-bottom-tiny">Future roadmap</h1>
        <h4 className="u-margin-bottom-medium">As programming is a constantly evolving field I also do my best to stay to constantly learn new skills</h4>

        <div className="skills__inProgress">
          <Skillset classProp="fas fa-code" type="Languages" typeName="Python, Java, C#" />
          <Skillset classProp="icon-basic-server2" type="Backend" typeName="GraphQL" />
          <Skillset classProp="icon-basic-folder-multiple" type="Frameworks/Libraries" typeName="Angular, Vue.js" />
        
        </div>

      </div>
    </section>
  )
}

export default Skills;