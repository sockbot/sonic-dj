import React from "react";
import Button from "./Button";

import "./ButtonColumn.scss";

function ButtonColumn(props) {
  const { colLabel, activeIndex, buttons, onClick } = props;
  const buttonColumn = buttons.map(button => {
    return (
      <Button
        label={button.label}
        index={button.index}
        colLabel={colLabel}
        active={activeIndex["loops"][colLabel] === button.index}
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
