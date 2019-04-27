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

      <div className="card__heading">
        {props.heading}
      </div>
      <div className="card__text u-center-text">
      <p>Technologies used</p>
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