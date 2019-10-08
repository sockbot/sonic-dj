import React from "react";
import SampleButton from "../components/SampleButton";
import SetButton from "../components/SetButton";

import "./Sampleset.scss";

function Sampleset(props) {
  const { buttons, quicksetAction, onClick } = props;
  const buttonRow = buttons.map(button => {
    return (
      <div>
        <SampleButton
          label={button.label}
          active={button.active}
          onClick={onClick}
          index={button.index}
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
