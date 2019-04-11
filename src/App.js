import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Layout>
          {/* routes for links here */}
        </Layout>
      </div>
    );
  }
}

export default App;
