import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          {/* Menu       */}
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink 
                  /* activeStyle = {{
                    backgroundColor: '#080808',
                   color: '#fff',
                   }} 
                  */
                  //them class
                  //activeClassName="active"
                  exact to="/"
                >
                  Home 
                  </NavLink>
              </li>
              <li>
                <NavLink 
                  /*activeStyle = {{
                    backgroundColor: '#080808',
                    color: '#fff',
                  }} 
                  */
                  //them class
                  //activeClassName="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                /*
                  activeStyle = {{
                    backgroundColor: '#080808',
                    color: '#fff',
                  }} 
                */
                //them class
                //activeClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Content        */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
