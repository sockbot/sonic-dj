import React from "react";
import classnames from "classnames";

import "./SetButton.scss";

function SetButton(props) {
  const { label, color, active, onClick } = props;
  const buttonClass = classnames("button", {
    active: active
  });

  return (
    <button
      className={buttonClass}
      style={{ "background-color": color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default SetButton;
