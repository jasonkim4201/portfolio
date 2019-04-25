import React from "react";
import ContactMethod from "./ContactMethod/ContactMethod";

const ContactCard = () => (
  <div className="contact__card">
    <div className="contact__info u-center-text">
      <ContactMethod classProp="contact__icon far fa-envelope" method="jasonkim4201@gmail.com"/>
      <ContactMethod link="https://github.com/jasonkim4201" classProp="contact__icon fab fa-github" method="Github"/>
      <ContactMethod link="https://www.linkedin.com/in/jason-kim-899604104/" classProp="contact__icon fab fa-linkedin" method="LinkedIn" />
      <ContactMethod classProp="contact__icon fas fa-phone" method="856-316-2181"/>
    </div>
  </div>
)

export default ContactCard;