import React from "react";
import ButtonColumn from "./ButtonColumn";
import "./ButtonGrid.scss";

function ButtonGrid(props) {
  const { columns, onClick, activeIndex } = props;
  const buttonGrid = columns.map(column => {
    return (
      <ButtonColumn
        colLabel={column.colLabel}
        activeIndex={column.activeIndex}
        buttons={column.buttons}
        onClick={onClick}
        activeIndex={activeIndex}
      />
    );
  });
  return <div class="button-grid">{buttonGrid}</div>;
}

export default ButtonGrid;
