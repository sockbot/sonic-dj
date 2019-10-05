import React from "react";

import ButtonColumn from "../components/ButtonColumn";

export default {
  title: "Button Column"
};

export const column = () => {
  const colLabel = "Lead";
  const activeIndex = 0;
  const buttons = [
    {
      label: "HOWDY",
      onClick: () => alert("howdy")
    },
    {
      label: "DOODY",
      onClick: () => alert("doody")
    },
    {
      label: "TIME",
      onClick: () => alert("time")
    }
  ];
  return (
    <ButtonColumn
      colLabel={colLabel}
      activeIndex={activeIndex}
      buttons={buttons}
    />
  );
};
column.story = {
  name: "Button Column"
};
