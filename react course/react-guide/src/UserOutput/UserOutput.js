import React from 'react';
import classes from './UserOutput.css';

const userOutput = (props) => {
  return (
		<div className={classes.UserOutput}>
			<p> {props.userName} </p>
			<p>Definition: {props.title}</p>
			<p>Detail: {props.detail}</p>
		</div>
  );
}

export default userOutput;