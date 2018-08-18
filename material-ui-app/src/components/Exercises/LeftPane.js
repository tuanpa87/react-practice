
// import React, { Fragment } from "react";
// import {
//   Paper,
//   Typography,
//   List,
//   ListItemText,
//   ListItem
// } from "@material-ui/core";
// import { withStyles } from "@material-ui/core/styles";

// const styles = {
//   Paper: {
//     padding: 20,
//     margin: "10px auto",
//     textTransform: "capitalize"
//   }
// };

// const leftPane = props => {
//   const { classes } = props;

//   // props.exercises.map(([a, b]) => {
//   //   console.log(a);
//   // });

//   return (
//     <Paper className={classes.Paper}>
//       {props.exercises.map(([group, exercises], index) => {
//         console.log("cat: " + props.category);
//         console.log("group: " + group);
//         console.log(exercises);
//         return !props.category || props.category === group ? (
//           /* ************
//             map throught exercises by group
//             if cat === undefine or '' show all (all true) 
//             if not only cat === group (true), other exercises return null (false)
//           ************ */
//           <Fragment key={group}>
//             <Typography variant="headline"> {group} </Typography>
//             <List>
//               {exercises.map(({ id, title }) => {
//                 console.log({ title });
//                 return (
//                   <ListItem
//                     button
//                     key={title}
//                     onClick={() => props.onSelect(id)}
//                   >
//                     <ListItemText primary={title} />
//                   </ListItem>
//                 );
//               })}
//             </List>
//           </Fragment>
//         ) : null;
//       })}
//     </Paper>
//   );
// };


// /* *****
//  // http://es6-features.org/#ParameterContextMatching

// exercises.map(function (_ref) {
//   var title = _ref.title;
//   console.log({ title: title });
// });
// ***** */

// export default withStyles(styles)(leftPane);
