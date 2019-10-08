import React from "react";
import classnames from "classnames";
import "./QuickButton.scss";

function QuickButton(props) {
  const { label, active, onClick, colLabel, index } = props;
  const buttonClass = classnames("quickbutton", {
    active: active
  });
  return (
    <button
      className={buttonClass}
      onClick={() => onClick(colLabel, index, label)}
    >
      {label}
    </button>
  );
}

export default QuickButton;
