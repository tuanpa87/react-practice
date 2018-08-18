import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitState();

    getInitState() {
      const { exercise } = this.props;
      return exercise
        ? exercise
        : {
            title: "",
            description: "",
            muscles: ""
          };
    }

    componentWillReceiveProps({ exercise }) {
      this.setState({
        ...exercise
      });
    }

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        [name]: value
      });
    };

    handleSubmit = () => {
      //TODO: validation

      this.props.onSubmit({
        id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
        ...this.state
      });

      this.setState(this.getInitState());
    };

    render() {
      const { title, description, muscles } = this.state,
        { exercise, classes, muscles: categories } = this.props;

      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="Muscles">Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            label="Description"
            value={description}
            onChange={this.handleChange("description")}
            margin="normal"
            multiline
            rows="4"
            className={classes.FormControl}
          />
          <br />

          <Button
            color="primary"
            variant="raised"
            onClick={this.handleSubmit}
            disabled={!title || !muscles}
          >
            {exercise ? "Edit" : "Create"}
          </Button>
        </form>
      );
    }
  }
);
