import React from "react";

export default function useQuicksetState() {
  const [quicksetIndex, setQuicksetIndex] = React.useState({
    quicksets: [
      {
        buttons: [
          { colLabel: "Lead", label: "electro" },
          { colLabel: "Bass", label: "electro" },
          { colLabel: "Drum", label: "electro" },
          { colLabel: "Rise", label: "electro" }
        ],
        color: "green",
        label: "Set Recommended",
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
        label: "Set Currently Playing",
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
        label: "Set Previously Played",
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

  return { quicksetIndex, setQuicksetIndex, quicksetSetter };
}
