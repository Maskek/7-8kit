import React from "react";

const Button = (props) => {
  return (
    <div className="remove">
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  );
};

export default Button;
