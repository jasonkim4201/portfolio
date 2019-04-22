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
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/skills" component={Skills} />
            <Route expact path="/projects" component={Projects}/>
            <Route expact path="/contact" component={Contact}/>
          </Switch>
          {/* routes for links here */}
        </Layout>
      </div>
    );
  }
}

export default App;
