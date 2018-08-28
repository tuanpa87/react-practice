import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateDialog from "../Exercises/Dialogs";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  flexItem: {
    flex: 1
  }
}

const header = ({classes ,muscles, onExerciseCreate}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit" className={classes.flexItem}>
          Exercises Databate
        </Typography>
        <CreateDialog muscles={muscles} onCreate={onExerciseCreate}/>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(header);
