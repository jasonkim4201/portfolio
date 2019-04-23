// CONTACT CONTACT

// Well for starters I should add basic contact information here and links to my github page and contact info

// Maybe add a form here to leave comments or whatever. Maybe make a mongo database to store in all the comments. Or SQL hmm....
// We'll see. last thing i want is to get spammed but i can always look into adding spam filters and what not

import React from "react";

const Contact = (props) => (
  <section className="contact">
    <div className="contact__container">
      <div className="contact__text u-center-text">
      <h1 className="u-margin-bottom-small">Contact me!</h1>
      <p className="u-margin-bottom-medium">Also feel free to browse through my Github and LinkedIn page!</p>
    </div>

      <div className="contact__card">

        <div className="contact__info u-center-text">
          <div className="contact__methods">
            <i className="contact__icon far fa-envelope"></i>
            <p>jasonkim4201@gmail.com</p>
          </div>

          <div className="contact__methods">
            <i className="contact__icon fab fa-github"></i>
            <p>Github</p>
          </div>

          <div className="contact__methods">
            <i className="contact__icon fab fa-linkedin"></i>
            <p>LinkedIn</p>
          </div>
          <div className="contact__methods">
            <i className="contact__icon fas fa-phone"></i>
            <p>(856)316-2181</p>
          </div>


        </div>



      </div>

    </div>
  </section>
)

export default Contact;