import React from "react";

const CardText = (props) => (
  <div className="card__text">
    <p>Powered by:</p>
    <ul>
      <li>{props.tech1}</li>
      <li>{props.tech2}</li>
      <li>{props.tech3}</li>
      <li>{props.tech4}</li>
    </ul>
  </div>
)

export default CardText;