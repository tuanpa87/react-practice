import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Exercises from "./components/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    exercise: {},
    editMode: false
  };

  /* old code below*/
  getExercisesByGroup() {
    //create an object from muscles array
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: [] //key is an muscle,  value: empty array
      }),
      {}
    );

    //console.log(initExercises);
    return Object.entries(
      this.state.exercises.reduce((categories, item) => {
        //initcategories = {}
        //console.log(category)
        const { muscles } = item; //~const muscles = exercise.muscles
        //console.log(muscles)
        categories[muscles] = [...categories[muscles], item];
        //add item to init categories

        return categories; //return an object
      }, initExercises)
    );
  }

  handleCategorySelect = category => {
    this.setState({ category });
  }; //category: category;

  handleExerciseSelect = id => {
    this.setState(
      ({ exercises }) => ({
        exercise: exercises.find(ex => ex.id === id),
        editMode: false
      })
      //note here is exercise (dont have s)
      // {exercise} = prevState.exercise
      //set state base on exercises that match selected id
    );
  };

  handleExerciseCreate = newExercise => {
    this.setState(({ exercises }) => ({
      //exercises is part of the prevState
      exercises: [...exercises, newExercise]
    }));
  };

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      //exercises is the prevState
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      exercise: {}
    }));
  };

  handleExerciseSelectEdit = id => {
    this.setState(
      ({ exercises }) => ({
        exercise: exercises.find(ex => ex.id === id),
        editMode: true
      })
      //re setState exercise
    );
  };

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise, //update the form after edit
      editMode: false
    }));
  };

  render() {
    const exercises = this.getExercisesByGroup();
    console.log(exercises);
    console.log(exercises.length);

    const { category, exercise, editMode } = this.state;

    return (
      <div className="App">
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
          exercise={exercise}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          editMode={editMode}
          muscles={muscles}
          onEdit={this.handleExerciseEdit}
        />
        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelect}
          category={category}
        />
      </div>
    );
  }
}

export default App;

/* *****
getExercisesByGroup() {
  return Object.entries(
    this.state.exercises.reduce((categories, item) => {
      //initcategories = {}
      //console.log(category)
      const { muscles } = item; //~const muscles = exercise.muscles
      //console.log(muscles)
      categories[muscles] = categories[muscles]
        ? [...categories[muscles], item]
        : [item];
      //add item to init categories
      //if have categories[leg] then add clone and add more, if dont have then create new one
      return categories; //return an object
    }, {})
  );
}

***** */
