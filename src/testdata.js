const columns = [
  {
    colLabel: "Lead",
    activeIndex: 0,
    buttons: [
      {
        label: "a",
        index: 0
      },
      {
        label: "b",
        index: 1
      },
      {
        label: "c",
        index: 2
      }
    ]
  },
  {
    colLabel: "Bass",
    activeIndex: 1,
    buttons: [
      {
        label: "d",
        index: 0
      },
      {
        label: "e",
        index: 1
      },
      {
        label: "f",
        index: 2
      }
    ]
  },
  {
    colLabel: "Drum",
    activeIndex: null,
    buttons: [
      {
        label: "g",
        index: 0
      },
      {
        label: "h",
        index: 1
      },
      {
        label: "i",
        index: 2
      }
    ]
  },
  {
    colLabel: "Rise",
    activeIndex: 2,
    buttons: [
      {
        label: "j",
        index: 0
      },
      {
        label: "k",
        index: 1
      },
      {
        label: "l",
        index: 2
      }
    ]
  }
];
const quicksetAction = "Set Recommended";
const buttons = [
  {
    colLabel: "Lead",
    label: "b",
    onClick: () => alert("jumping"),
    active: true
  },
  {
    colLabel: "Bass",
    label: "f",
    onClick: () => alert("jack"),
    active: false
  },
  {
    colLabel: "Drum",
    label: "g",
    onClick: () => alert("flash"),
    active: true
  },
  {
    colLabel: "Rise",
    label: "k",
    onClick: () => alert("flash"),
    active: true
  }
];

const quicksets = [
  {
    label: "Set Recommended",
    color: "green",
    buttons: buttons,
    quicksetAction: "recommended"
  },
  {
    label: "Set Currently Playing",
    color: "blue",
    buttons: buttons,
    quicksetAction: "current"
  },
  {
    label: "Set Previously Played",
    color: "red",
    buttons: buttons,
    quicksetAction: "previous"
  }
];

export { columns, quicksetAction, buttons, quicksets };
