import React from "react";
import Button from "./Button";

import "./ButtonColumn.scss";

function ButtonColumn(props) {
  const { instrument } = props;
  // const instrument = "Lead";
  return (
    <div class="button-column">
      <div>{instrument}</div>
      <Button label="HELLO WORLD" />
      <Button label="0" active={true} />
      <Button label="a" />
    </div>
  );
}

export default ButtonColumn;
