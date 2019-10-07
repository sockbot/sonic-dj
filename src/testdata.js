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
        label: "d"
      },
      {
        label: "e"
      },
      {
        label: "f"
      }
    ]
  },
  {
    colLabel: "Drum",
    activeIndex: null,
    buttons: [
      {
        label: "g"
      },
      {
        label: "h"
      },
      {
        label: "i"
      }
    ]
  },
  {
    colLabel: "Rise",
    activeIndex: 2,
    buttons: [
      {
        label: "j"
      },
      {
        label: "k"
      },
      {
        label: "l"
      }
    ]
  }
];
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

const quicksets = [
  {
    label: "Set Recommended",
    color: "green",
    buttons: buttons,
    quicksetAction: "Set Recommended"
  },
  {
    label: "Set Currently Playing",
    color: "blue",
    buttons: buttons,
    quicksetAction: "Set Currently Playing"
  },
  {
    label: "Set Previously Played",
    color: "red",
    buttons: buttons,
    quicksetAction: "Set Previously Played"
  }
];

export { columns, quicksetAction, buttons, quicksets };
