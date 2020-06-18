import React from 'react';

const Button = (props) => {
  return (
    <button
      type="button"
      className={`btn btn-${props.color} m-2`}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export { Button };
