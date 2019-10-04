import React from "react";
import classnames from "classnames";

import "../../src/App.scss";

function Button(props) {
  const { label, active, onClick } = props;
  const buttonClass = classnames("button", {
    active: active
  });
  return (
    <div className={buttonClass} onClick={onClick}>
      {label}
    </div>
  );
}

export default Button;
