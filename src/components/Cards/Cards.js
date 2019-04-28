// This will be within my cards or something and it will have the images, description, link, and github page with it 

import React from "react";


const Cards = (props) => {
  return (
    <div className="card__container">
      <div className="card">

        <div className="card__side card__side--front">
          <div className={props.picClassProps} >
            &nbsp;
      </div>

          <h4 className="card__heading">
            <span className="card__heading--span">
              {props.heading}
            </span>

          </h4>
          <div className="card__text">
            <p>Powered by:</p>
            <ul>
              <li>{props.tech1}</li>
              <li>{props.tech2}</li>
              <li>{props.tech3}</li>
              <li>{props.tech4}</li>
            </ul>
          </div>

        </div>

        <div className={props.classProps}>
          <div className="card__details">
            <br />
            <br />
            <p>{props.description}</p>
            <div className="card__details--container">
              <a href={props.demo} className="btn btn--red">Live Demo</a>
              <a href={props.github} className="btn btn--blue">Github</a>
            </div>
            
          </div>
        </div>

      </div>
    </div>

  )
}

export default Cards;