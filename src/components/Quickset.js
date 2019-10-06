import React from "react";
import Button from "../components/Button";
import SetButton from "../components/SetButton";

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
      <SetButton
        label={props.label}
        color={props.color}
        onclick={props.quicksetAction}
      />
      <div class="button-row">{buttonRow}</div>
    </div>
  );
}

export default Quickset;
