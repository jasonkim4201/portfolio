import React from "react";

const ContactMethod = (props) => (
    <div className="contact__methods">
      <a href={props.link} className="contact__link" target="_blank" rel="noopener noreferrer">
        <i className={props.classProp}></i>
        <p>{props.method}</p>
      </a>
      
    </div>
  );


export default ContactMethod;