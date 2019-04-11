import React from "react";
import classes from "./NavbarLinks.module.css";


const NavbarLinks = (props) => (
  <li className={classes.NavbarLinks}>
    <a href="/">{props.children}</a>
  </li>
)

export default NavbarLinks;