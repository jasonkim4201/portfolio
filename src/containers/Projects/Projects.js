// List my work here. Each project should be listed in some kind of card which has title, description, link, and picture 

import React, { Component } from "react";
import Cards from "../../components/Cards/Cards";

class Projects extends Component {
  state = {}

  render() {
    return (
      <section className="projects">
        <div> {/* left container out */}
          {/* place grid here */}
          <div className="projects__works">
            <Cards 
            heading="Burger Builder"
            classProps="card__side card__side--back card__side--back--1"
            tech1="React.js" tech2="Redux" tech3="Firebase" tech4="Node.js"
            picClassProps="card__picture card__picture--1"
            />
            <Cards
              heading="Starwars database"
              classProps="card__side card__side--back card__side--back--2"
              tech1="React.js" tech2="MongoDB" tech3="Node.js" tech4="Express.js"
              picClassProps="card__picture card__picture--2"
            />
            <Cards
            heading="Beer Clicky Game" 
              classProps="card__side card__side--back card__side--back--3"
              tech1="React.js" tech2="Bootstrap"
              picClassProps="card__picture card__picture--3"
            />
            <Cards
              heading="Beer Identification"
              classProps="card__side card__side--back card__side--back--4"
              tech1="jQuery" tech2="Bootstrap" tech3="Firebase"
              picClassProps="card__picture card__picture--4"
            />
            <Cards
              heading="Book Searcher"
              classProps="card__side card__side--back card__side--back--5"
              tech1="React.js" tech2="Redux" tech3="Firebase" tech4="Node.js"
              picClassProps="card__picture card__picture--5"  
            />
            <Cards
              heading="News Scrapper"
              classProps="card__side card__side--back card__side--back--6"
              tech1="React.js" tech2="Redux" tech3="Firebase" tech4="Node.js"
              picClassProps="card__picture card__picture--6"
            />
          </div>


        </div>

      </section>
    )
  }
}

export default Projects;