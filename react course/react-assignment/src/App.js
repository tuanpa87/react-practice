import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    username: "some Username",
    userInput: '21321',
  };

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  inputChangedHandler = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleleCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  
  render() {
    const charArray = this.state.userInput.split("");
    const charList = charArray.map((char, i) => {
      return (
        <Char 
          key={i}
          char={char}
          click={() => this.deleleCharHandler(i)}
        />
      )
    })

    return (
      <div className="App">
        <div className="assignment assignment-1">
          <h2>Assignment #1</h2>
          <UserInput
            changed={this.usernameChangedHandler}
            currentName={this.state.username}
          />
          <UserOutput userName={this.state.username} />
          <UserOutput userName={this.state.username} />
          <UserOutput userName="Max" />
        </div>


        <div className="assignment assignment-2">
          <h2>Assignment #2</h2>
          <input 
            type="text" 
            value={this.state.userInput}
            onChange={this.inputChangedHandler}
          />
          <br/> <br/>
          <div> {this.state.userInput} </div>
          <Validation inputLength={this.state.userInput.length} /> 
          {charList}
        </div>
      </div>
    );
  }
}

export default App;
