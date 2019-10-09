import React from "react";
//import { sendLoopData } from "./websocketfunctions";

export default function useQuicksetState() {
  const [quicksetIndex, setQuicksetIndex] = React.useState({
    quicksets: [
      {
        buttons: [
          { colLabel: "Lead", label: "Electro" },
          { colLabel: "Bass", label: "electro" },
          { colLabel: "Drum", label: "electro" },
          { colLabel: "Rise", label: "electro" }
        ],
        color: "green",
        label: "Recommended",
        quicksetAction: "recommended"
      },
      {
        buttons: [
          { colLabel: "Lead", label: "electro" },
          { colLabel: "Bass", label: "electro" },
          { colLabel: "Drum", label: "electro" },
          { colLabel: "Rise", label: "electro" }
        ],
        color: "blue",
        label: "Currently Playing",
        quicksetAction: "current"
      },
      {
        buttons: [
          { colLabel: "Lead", label: "electro" },
          { colLabel: "Bass", label: "electro" },
          { colLabel: "Drum", label: "electro" },
          { colLabel: "Rise", label: "electro" }
        ],
        color: "red",
        label: "Previously Played",
        quicksetAction: "previous"
      }
    ]
  });

  const quicksetSetter = function(category, label, index) {
    setQuicksetIndex({
      ...quicksetIndex[0],
      [category]: { ...quicksetIndex[category]["loops"], [label]: index }
    });
  };

  const setPrevious = function(newLead, newBass, newDrum, newRise) {
    let newState = { ...quicksetIndex };
    let newValue = {
      buttons: [
        { colLabel: "Lead", label: newLead },
        { colLabel: "Bass", label: newBass },
        { colLabel: "Drum", label: newDrum },
        { colLabel: "Rise", label: newRise }
      ],
      color: "red",
      label: "Set Previously Played",
      quicksetAction: "previous"
    };
    newState.quicksets[2] = newValue;

    setQuicksetIndex({
      ...newState
    });
    //sendLoopData(quicksetIndex["quicksets"][2]["buttons"]);
  };

  return { quicksetIndex, setQuicksetIndex, quicksetSetter, setPrevious };
}
