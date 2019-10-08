const setPrevious = function(newLabel) {
  let newState = { ...quicksetIndex };
  let newValue = {
    buttons: [
      { colLabel: "Lead", label: newLabel },
      { colLabel: "Bass", label: "electro" },
      { colLabel: "Drum", label: "electro" },
      { colLabel: "Rise", label: "electro" }
    ],
    color: "red",
    label: "Set Previously Played",
    quicksetAction: "previous"
  };
  newState.quickset[2] = newValue;

  setQuicksetIndex({
    ...newState
  });
};
//quicksetIndex["quicksets"][2]["buttons"][index]["label"] = newLabel

export { setPrevious };
