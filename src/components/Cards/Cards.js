// This will be within my cards or something and it will have the images, description, link, and github page with it 

import React from "react";

const Cards = (props) => {
  return (
    <div className="card">

      <div className="card__side card__side--front">
        <p>FRONT</p>
      </div>

      <div className="card__side card__side--back">
        <p>BACK</p>
      </div>

    </div>
  )
}

export default Cards;