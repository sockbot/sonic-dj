const columns = [
  {
    colLabel: "Lead",
    buttons: [
      {
        label: "Silly",
        index: "silly_lead"
      },
      {
        label: "Flanged",
        index: "flanged_lead"
      },
      {
        label: "Electro",
        index: "electro_lead"
      }
    ]
  },
  {
    colLabel: "Bass",
    buttons: [
      {
        label: "Dub",
        index: "dub_bass"
      },
      {
        label: "Echo",
        index: "echo_bass"
      },
      {
        label: "Simple",
        index: "simple_bass"
      }
    ]
  },
  {
    colLabel: "Drum",
    buttons: [
      {
        label: "Groovy",
        index: "groovy_drum"
      },
      {
        label: "Amen",
        index: "amen_drum"
      },
      {
        label: "Basic",
        index: "basic_drum"
      }
    ]
  },
  {
    colLabel: "Rise",
    buttons: [
      {
        label: "Snare",
        index: "snare_rise"
      },
      {
        label: "second",
        index: "second_rise"
      },
      {
        label: "third",
        index: "third_rise"
      }
    ]
  }
];
const buttons = [
  {
    label: "Shoryuken",
    index: "shoryuken_sample"
  },
  {
    label: "Air Horn",
    index: "airhorn_sample"
  },
  {
    label: "Siren",
    index: "siren_sample"
  },
  {
    label: "Torpedo",
    index: "photontorpedo_sample"
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

export { columns, buttons, quicksets };
