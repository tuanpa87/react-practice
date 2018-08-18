import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: ""
  };

  componentDidMount() {
    this.loadData();
  }

  // componentDidUpdate() {
  //   this.loadData();
  // }

  loadData() {
    const query = new URLSearchParams(this.props.location.search);
    //console.log(this.props.location);
    for (let params of query.entries()) {
      if (this.state.courseTitle !== params[1])
        this.setState({ courseTitle: params[1] });
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
