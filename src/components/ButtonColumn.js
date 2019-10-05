import React from "react";
import Button from "./Button";

import "./ButtonColumn.scss";

function ButtonColumn(props) {
  const { colLabel, activeIndex, buttons } = props;
  const buttonColumn = buttons.map((button, index) => {
    return (
      <Button
        label={button.label}
        active={activeIndex === index}
        onClick={button.onClick}
      />
    );
  });

  return (
    <div class="button-column">
      <div>{colLabel}</div>
      {buttonColumn}
    </div>
  );
}

export default ButtonColumn;
