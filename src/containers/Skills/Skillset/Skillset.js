import React from "react";

const Skillset = (props) => (
  <div>
    <i className={props.classProp}></i>
    <h2>{props.type}</h2>
    <p>{props.typeName}</p>
  </div>
)

export default Skillset;