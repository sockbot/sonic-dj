import React from "react";
import QuickButton from "../components/QuickButton";
import SetButton from "../components/SetButton";

import "./Sampleset.scss";

function Sampleset(props) {
  const { buttons, quicksetAction, onClick } = props;
  const buttonRow = buttons.map(button => {
    return (
      <div>
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
      <SetButton
        label={props.label}
        color={props.color}
        onclick={props.quicksetAction}
      />
      <div class="button-row">{buttonRow}</div>
    </div>
  );
}

export default Sampleset;
