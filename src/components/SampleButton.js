import React from "react";
import classnames from "classnames";
import { sendSampleData } from "./websocketfunctions";
import "./SampleButton.scss";

function SampleButton(props) {
  const { label, active, onClick, index } = props;
  const buttonClass = classnames("samplebutton", {
    active: active
  });
  return (
    <button className={buttonClass} onClick={() => sendSampleData(index)}>
      {label}
    </button>
  );
}

export default SampleButton;
