// CONTACT CONTACT

// Well for starters I should add basic contact information here and links to my github page and contact info

// Maybe add a form here to leave comments or whatever. Maybe make a mongo database to store in all the comments. Or SQL hmm....
// We'll see. last thing i want is to get spammed but i can always look into adding spam filters and what not

import React from "react";
import ContactCard from "../../components/ContactCard/ContactCard";

const Contact = (props) => (
  <section className="contact">
    <div className="container contact__container">

      <div className="contact__text u-center-text">
        <h1 className="u-margin-bottom-small">Contact me!</h1>
        <p className="u-margin-bottom-medium">Also feel free to browse through my Github and LinkedIn page!</p>
      </div>

      <ContactCard />

    </div>
  </section>
)

export default Contact;