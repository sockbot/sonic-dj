import React from "react";
import QuickButton from "../components/QuickButton";
import SetButton from "../components/SetButton";

import "./Quickset.scss";

function Quickset(props) {
  const { buttons, quicksetAction, onClick } = props;
  const buttonRow = buttons.map(button => {
    return (
      <div>
        {button.colLabel}
        <QuickButton label={button.label} active={button.active} />
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
