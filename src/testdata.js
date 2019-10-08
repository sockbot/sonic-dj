const columns = [
  {
    colLabel: "Lead",
    activeIndex: 0,
    buttons: [
      {
        label: "Beep",
        index: 0
      },
      {
        label: "Silly",
        index: 1
      },
      {
        label: "Flanged",
        index: 2
      }
    ]
  },
  {
    colLabel: "Bass",
    activeIndex: 1,
    buttons: [
      {
        label: "Simple",
        index: 0
      },
      {
        label: "Echo",
        index: 1
      },
      {
        label: "Dub",
        index: 2
      }
    ]
  },
  {
    colLabel: "Drum",
    activeIndex: null,
    buttons: [
      {
        label: "Amen",
        index: 0
      },
      {
        label: "Basic",
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
        label: "Snare",
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
    label: "Shoryuken",
    onClick: () => alert("jumping"),
    active: true
  },
  {
    colLabel: "Bass",
    label: "Air Horn",
    onClick: () => alert("jack"),
    active: false
  },
  {
    colLabel: "Drum",
    label: "Siren",
    onClick: () => alert("flash"),
    active: true
  },
  {
    colLabel: "Rise",
    label: "AK-47",
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
