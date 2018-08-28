import React, { Fragment, Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import Form from "./Form";
import { Consumer } from "../../context";

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleFormSubmit = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise);
  };

  render() {
    const { open } = this.state;
    //const { muscles } = this.props;

    return (
      <Consumer>
        {/* or  value and  value.muscle below*/}
        {({ muscles }) => (
          <Fragment>
            <Button
              variant="fab"
              mini
              onClick={this.handleToggle}
              color="secondary"
            >
              <Add />
            </Button>
            <Dialog
              open={open}
              onClose={this.handleToggle}
              fullWidth
              maxWidth="xs"
            >
              <DialogTitle>Create a New Exercise</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please fill out the form below
                </DialogContentText>
                <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
              </DialogContent>
            </Dialog>
          </Fragment>
        )}
      </Consumer>
    );
  }
}
