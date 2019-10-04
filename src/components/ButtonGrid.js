import React from "react";
import ButtonColumn from "./ButtonColumn";

import "./ButtonGrid.scss";

function ButtonGrid(props) {
  const { instrument } = props;
  return (
    <div class="button-grid">
      <ButtonColumn instrument={instrument} />
      <ButtonColumn instrument={instrument} />
      <ButtonColumn instrument={instrument} />
      <ButtonColumn instrument={instrument} />
    </div>
  );
}

export default ButtonGrid;
