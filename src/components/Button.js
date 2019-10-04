import React from "react";
import classnames from "classnames";

import "./Button.scss";

function Button(props) {
  const { label, active, onClick } = props;
  const buttonClass = classnames("button", {
    active: active
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
