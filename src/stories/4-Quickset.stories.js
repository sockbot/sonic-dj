import React from "react";

import Quickset from "../components/Quickset";

export default {
  title: "Quickset"
};

export const row = () => {
  const quicksetAction = "Set Recommended";
  const buttons = [
    {
      colLabel: "Lead",
      label: "JUMPING",
      onClick: () => alert("jumping"),
      active: true
    },
    {
      colLabel: "Bass",
      label: "JACK",
      onClick: () => alert("jack"),
      active: false
    },
    {
      colLabel: "Drum",
      label: "FLASH",
      onClick: () => alert("flash"),
      active: true
    },
    {
      colLabel: "Rise",
      label: "HOME",
      onClick: () => alert("flash"),
      active: true
    }
  ];
  return <Quickset buttons={buttons} quicksetAction={quicksetAction} />;
};
row.story = {
  name: "Quickset"
};
