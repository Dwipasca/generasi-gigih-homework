import React from "react";

import "./button.css";

const STYLES = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];

const SIZES = ["btn-small", "btn-medium", "btn-large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    >
      {children}
    </button>
  );
};

export default Button;
