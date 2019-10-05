import React from "react";
import classnames from "classnames";

import "./SetButton.scss";

function SetButton(props) {
  const { label, color, active, onClick } = props;
  const setbuttonClass = classnames("setbutton", {
    active: active
  });

  return (
    <button
      className={setbuttonClass}
      style={{ "background-color": color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default SetButton;
