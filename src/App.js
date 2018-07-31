import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

import * as routes from './constants/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route
            exact path={routes.HOME}
            component={() => <Home />}
          />
          <Route
            exact path={routes.PORTFOLIO}
            component={() => <Portfolio />}
          />
          <Route
            exact path={routes.CONTACT}
            component={() => <Contact />}
          />
        </div>
      </Router>
      /* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 className="App-title">Welcome to React</h1>
    //   </header>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div> */

    );
  }
}

export default App;
