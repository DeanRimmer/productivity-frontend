import React from "react";

const Button = ({ label, onClickFunction, buttonClass }) => {
  return (
    <button className={buttonClass} onClick={onClickFunction}>
      {label}
    </button>
  );
};

export default Button;
