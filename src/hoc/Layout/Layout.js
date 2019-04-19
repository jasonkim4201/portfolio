// Shared layout page most likely. Though I image my home page may differ.

import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Navbar from "../../components/Navbar/Navbar";

class Layout extends Component {
  state = {}

  render() {
    // layout should consist of navbar with links to other pages
    return (
      <Auxiliary>
        <Navbar/>
        <h1>cheers from layout page</h1>
      </Auxiliary>
    )
  }
}

export default Layout;