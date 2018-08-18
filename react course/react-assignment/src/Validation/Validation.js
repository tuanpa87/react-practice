import React from 'react';
const validation = (props) => {
  let validateMessage = "text too short"
  if (props.inputLength > 5) {
    validateMessage = "text long enough"
  }

  return (
    <div>
      {validateMessage}
    </div>
  )
}

export default validation;
