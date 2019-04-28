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

          {/* just going to keep doing it like this for now. Will refactor this when its all done (again). */}
            <Cards 
            heading="Burger Builder"
            classProps="card__side card__side--back card__side--back--1"
            tech1="React.js" tech2="Redux" tech3="Firebase" tech4="Node.js"
            picClassProps="card__picture card__picture--1"
            description="Build a burger with this website and make an account to buy a burger! Disclaimer: I won't send you a burger. It's just all a fun simulation"
            demo="https://jasonkim4201.github.io/basic-burger-builder/"
            github="https://github.com/jasonkim4201/basic-burger-builder"
            />
            <Cards
              heading="Starwars database"
              classProps="card__side card__side--back card__side--back--2"
              tech1="React.js" tech2="MongoDB" tech3="Node.js" tech4="Express.js"
              picClassProps="card__picture card__picture--2"
              description="View all your favorite Star Wars characters and all items related to the Star Wars universe. Powered by the Star Wars API."
              demo="https://a-starwars-database.herokuapp.com/"
              github="https://github.com/jasonkim4201/a-star-wars-database"
            />
            <Cards
            heading="Beer Clicky Game" 
              classProps="card__side card__side--back card__side--back--3"
              tech1="React.js" tech2="Bootstrap"
              picClassProps="card__picture card__picture--3"
              description="Play a small memory game and pick each beer once. Keep going and get a high score. Lose upon clicking the same beer twice"
              demo="https://jasonkim4201.github.io/clicky-game/"
              github="https://github.com/jasonkim4201/clicky-game"
            />
            <Cards
              heading="Beer Identification"
              classProps="card__side card__side--back card__side--back--4"
              tech1="jQuery" tech2="Bootstrap" tech3="Firebase"
              picClassProps="card__picture card__picture--4"
              description="Ever had that issue where you saw a beer and was curious about it? Search up all your beer queries and get as much information before making that purchase!"
              demo="https://ryanpaul22.github.io/project_1/"
              github="https://github.com/Ryanpaul22/project_1"
            />
            <Cards
              heading="Book Searcher"
              classProps="card__side card__side--back card__side--back--5"
              tech1="React.js" tech2="Express.js" tech3="MongoDb" tech4="Node.js"
              picClassProps="card__picture card__picture--5"
              description="Search any book and a get a small description of it. Get an idea what the book is before picking it up! Powered by Google Books."
              demo="https://cloudy-waffles-books.herokuapp.com/"
              github="https://github.com/jasonkim4201/google-books"
            />
            <Cards
              heading="News Scrapper"
              classProps="card__side card__side--back card__side--back--6"
              tech1="jQuery" tech2="MongoDb" tech3="Bootstrap" tech4="Node.js"
              picClassProps="card__picture card__picture--6"
              description="Scrape all the latest financial news on Reuters and be up to date!"
              demo="https://quiet-caverns-11878.herokuapp.com/"
              github="https://github.com/jasonkim4201/FinancialNewsScrapper"
            />
          </div>


        </div>

      </section>
    )
  }
}

export default Projects;