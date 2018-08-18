import React from 'react';
const char = (props) => {
  const  style={
    display: "inline-block",
    padding: "16px",
    margin: "10px",
    textAlign: "center",
    border: "1px solid grey"
  }

  return (
    <div style={style} onClick={props.click}>
      {props.char}
    </div>
  )
}

export default char;