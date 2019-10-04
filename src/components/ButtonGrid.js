import React from "react";
import Button from "./Button";

import "./ButtonGrid.scss";

function ButtonGrid(props) {
  // const buttons = {
  //   lead: [
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     },
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     },
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     }
  //   ],
  //   bass: [
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     },
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     },
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     }
  //   ],
  //   drum: [
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     },
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     },
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     }
  //   ],
  //   rise: [
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     },
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     },
  //     {
  //       label: "HELLO WORLD",
  //       active: true
  //     }
  //   ]
  // };
  return (
    <div class="button-grid">
      <div class="button-column">
        <Button label="HELLO WORLD" />
        <Button label="0" />
        <Button label="a" />
      </div>
      <div class="button-column">
        <Button label="b" />
        <Button label="c" />
        <Button label="d" />
      </div>
      <div class="button-column">
        <Button label="e" />
        <Button label="f" />
        <Button label="g" />
      </div>
      <div class="button-column">
        <Button label="h" />
        <Button label="i" />
        <Button label="j" />
      </div>
    </div>
  );
}

export default ButtonGrid;
