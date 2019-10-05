import React from "react";
import Button from "../components/Button";

import "./Quickset.scss";

function Quickset(props) {
  const { buttons, quicksetAction } = props;
  const buttonRow = buttons.map(button => {
    return (
      <div>
        {button.colLabel}
        <Button label={button.label} active={button.active} />
      </div>
    );
  });

  return (
    <div class="quickset">
      <button class="quickset-button">{quicksetAction}</button>
      <div class="button-row">{buttonRow}</div>
    </div>
  );
}

export default Quickset;
