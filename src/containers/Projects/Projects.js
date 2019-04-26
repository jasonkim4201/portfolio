// List my work here. Each project should be listed in some kind of card which has title, description, link, and picture 

import React, { Component } from "react";
import Cards from "../../components/Cards/Cards";

class Projects extends Component {
  state = {}

  render() {
    return (
      <section className="projects">
        <div className="container projects__container">
          <h2 className="projects__title">Featured work</h2>

          {/* place grid here */}
          <div className="projects__works">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>


        </div>

      </section>
    )
  }
}

export default Projects;