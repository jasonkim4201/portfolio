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
        <p>BACK</p>
      </div>

    </div>
    </div>
    
  )
}

export default Cards;