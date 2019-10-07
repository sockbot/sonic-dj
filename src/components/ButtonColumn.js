import React from "react";
import Button from "./Button";

import "./ButtonColumn.scss";

function ButtonColumn(props) {
  const { colLabel, activeIndex, buttons, onClick } = props;
  const buttonColumn = buttons.map((button, index) => {
    return (
      <Button
        label={button.label}
        colLabel={colLabel}
        active={activeIndex === index}
        onClick={onClick}
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
