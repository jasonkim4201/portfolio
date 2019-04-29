import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Layout from './hoc/Layout/Layout';
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Skills from "./containers/Skills/Skills";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";

class App extends Component {
  state = {}

  render() {
    let routes = (
      <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home}/>
            <Route exact path={process.env.PUBLIC_URL + "/about"} component={About}/>
            <Route exact path={process.env.PUBLIC_URL + "/skills"} component={Skills} />
            <Route expact path={process.env.PUBLIC_URL + "/projects"} component={Projects}/>
            <Route expact path={process.env.PUBLIC_URL + "/contact"} component={Contact}/>
          </Switch>
    );
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
