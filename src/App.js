import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import Task01 from './components/Task01.js'
import Task02 from './components/Task02.js'
import Task03 from './components/Task03.js'

class App extends Component {
  render(){
    return (
      <Router>
          <div className="c-header">
            <nav>
              <ul>
                <li><NavLink to="/task01" activeClassName="active">Task01</NavLink></li>
                <li><NavLink to="/task02" activeClassName="active">Task02</NavLink></li>
                <li><NavLink to="/task03" activeClassName="active">Task03</NavLink></li>
              </ul>
            </nav>
          </div>
        <Switch>
          <Route exact path="/task01"><Task01 /></Route>
          <Route path="/task02"><Task02 /></Route>
          <Route path="/task03"><Task03 /></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
