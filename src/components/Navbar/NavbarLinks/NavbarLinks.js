import React from "react";
import { NavLink } from "react-router-dom";


const NavbarLinks = (props) => (
  <li className="navbar__navbarLinks">
    <NavLink to={props.link} exact={process.exact}>
      {props.children}
    </NavLink>
  </li>
)

export default NavbarLinks;