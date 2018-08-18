import React from 'react';

const userInput = (props) => {
	const style = {
		border: '1px solid orange'
	};
	return (
		<div>
			<input style={style}  type="text" onChange={props.change} value={props.currentName}/>
		</div>  
	);
}

export default userInput;