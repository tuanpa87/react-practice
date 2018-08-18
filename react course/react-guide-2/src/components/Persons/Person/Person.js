import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  render() {
    console.log("[Person.js] inside render()");
    return (
      <div className={classes.Person}>
        <AuthContext.Consumer>
          {auth => (auth ? <p> im authenticated </p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.clicked}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;

// const person = ( props ) => {
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.clicked}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

// export default person;
