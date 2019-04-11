import React from "react"; 
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import classes from "./Nabvar.module.css";

// remidner: throw in links here once i have everything else cleared away...
const Navbar = (props) => (
  <ul className={classes.Navbar}>
    <NavbarLinks>Home</NavbarLinks>
    <NavbarLinks>About</NavbarLinks>
    <NavbarLinks>Skills</NavbarLinks>
    <NavbarLinks>Projects</NavbarLinks>
    <NavbarLinks>Contact</NavbarLinks>
  </ul>
)

export default Navbar;