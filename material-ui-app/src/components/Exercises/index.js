import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Form from "./Form";
import { withStyles } from "@material-ui/core/styles";

const styles = themes => ({
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 0,
    height: 500,
    overflowY: "auto"
  }
});

export default withStyles(styles)(
  ({
    classes,
    exercises,
    category,
    onSelect,
    exercise,
    exercise: {
      //same exercise but add default parameter
      id,
      title = "Welcome!",
      description = "Please select an exercise from the list on the left."
    },
    onDelete,
    onSelectEdit,
    editMode,
    muscles,
    onEdit
  }) => (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <Paper className={classes.Paper}>
          {exercises.map(
            ([group, exercises]) =>
              !category || category === group ? (
                <Fragment key={group}>
                  <Typography
                    variant="headline"
                    style={{ textTransform: "capitalize" }}
                    color="secondary"
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ id, title }) => (
                      <ListItem key={id} button onClick={() => onSelect(id)}>
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                          <IconButton onClick={() => onSelectEdit(id)}>
                            <Edit />
                          </IconButton>
                          <IconButton onClick={() => onDelete(id)}>
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
          )}
        </Paper>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Paper className={classes.Paper}>
          <Typography variant="display1" color="secondary">{title}</Typography>
          {editMode ? (
            <Form muscles={muscles} onSubmit={onEdit} exercise={exercise} />
          ) : (
            <Typography variant="subheading" style={{ marginTop: 20 }}>
              {description}
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  )
);

/* *****
Old code below 
using LeftPane and RightPane components

***** */

/*
import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const exercises = props => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane
          exercises={props.exercises}
          category={props.category}
          onSelect={props.onSelect}
        />
      </Grid>
      <Grid item sm>
        <RightPane exercise={props.exercise} />
      </Grid>
    </Grid>
  );
};

export default exercises;
*/
