import React, { Component } from 'react';
import './App.css';
import FoodContainer from '../containers/food-list'
import FoodDetailContainer from '../containers/food-detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React with Redux</h1>
        </header>
        <p className="App-intro">
          <p>This is a tutorial of React and Redux</p>
        </p>
        <h2>List of foods</h2>
          <FoodContainer />
        <hr />
        <h2>Foods detail:</h2>
          <FoodDetailContainer/>
      </div>
    );
  }
}

export default App;

