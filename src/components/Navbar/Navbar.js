import React from "react";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
/* import classes from "./Nabvar.module.css"; */

// remidner: throw in links here once i have everything else cleared away...
const Navbar = (props) => (
  <header className="navbar">
    <ul className="navbar__nav">
      <NavbarLinks link ="/" exact>Home</NavbarLinks>
      <NavbarLinks link ="/about">About</NavbarLinks>
      <NavbarLinks>Skills</NavbarLinks>
      <NavbarLinks>Projects</NavbarLinks>
      <NavbarLinks>Contact</NavbarLinks>
    </ul>
  </header>
)

export default Navbar;