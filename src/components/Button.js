import React from "react";
import classnames from "classnames";
import "./Button.scss";

function Button(props) {
  const { label, active, onClick, colLabel } = props;
  const buttonClass = classnames("button", {
    active: active
  });
  return (
    <button className={buttonClass} onClick={() => onClick(colLabel, label)}>
      {label}
    </button>
  );
}

export default Button;
