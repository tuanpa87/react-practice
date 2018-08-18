import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount()");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Person.js] inside componentWillReceiveProps",
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Person.js] inside shouldComponentUpdate",
      nextProps,
      nextState
    );
    return (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    );
    //return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Person.js] inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE Person.js] inside componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] inside render()");
    return this.props.persons.map((person, index) => (
      <Person
        clicked={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        position={index}
        //authenticated={this.props.isAuthenticated}
        changed={event => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;

// const persons = props =>
//   props.persons.map((person, index) => {
//     return (
//       <Person
//         clicked={() => props.clicked(index)}
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         changed={event => props.changed(event, person.id)}
//       />
//   )
// });

// export default persons;
