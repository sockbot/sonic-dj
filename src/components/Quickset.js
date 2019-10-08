import React from "react";
import QuickButton from "../components/QuickButton";
import SetButton from "../components/SetButton";

import "./Quickset.scss";

function Quickset(props) {
  const { buttons, quickset, onClick } = props;
  const buttonRow = buttons.map(button => {
    return (
      <div>
        {button.colLabel}
        <QuickButton
          label={button.label}
          active={button.active}
          onClick={onClick}
        />
      </div>
    );
  });

  return (
    <div class="quickset">
      <SetButton label={props.label} color={props.color} onClick={quickset} />
      <div class="button-row">{buttonRow}</div>
    </div>
  );
}

export default Quickset;
