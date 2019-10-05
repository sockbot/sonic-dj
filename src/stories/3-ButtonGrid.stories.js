import React from "react";
import { action } from "@storybook/addon-actions";

import ButtonGrid from "../components/ButtonGrid";

export default {
  title: "Button Grid"
};

const columns = [
  {
    colLabel: "Lead",
    activeIndex: 0,
    buttons: [
      {
        label: "a",
        onClick: action(`clicked lead instrument a`)
      },
      {
        label: "b",
        onClick: action(`clicked lead instrument b`)
      },
      {
        label: "c",
        onClick: action(`clicked lead instrument c`)
      }
    ]
  },
  {
    colLabel: "Bass",
    activeIndex: 1,
    buttons: [
      {
        label: "d",
        onClick: action(`clicked bass instrument d`)
      },
      {
        label: "e",
        onClick: action(`clicked bass instrument e`)
      },
      {
        label: "f",
        onClick: action(`clicked bass instrument f`)
      }
    ]
  },
  {
    colLabel: "Drum",
    activeIndex: null,
    buttons: [
      {
        label: "g",
        onClick: action(`clicked drum instrument g`)
      },
      {
        label: "h",
        onClick: action(`clicked drum instrument h`)
      },
      {
        label: "i",
        onClick: action(`clicked drum instrument i`)
      }
    ]
  },
  {
    colLabel: "Rise",
    activeIndex: 2,
    buttons: [
      {
        label: "j",
        onClick: action(`clicked rise instrument j`)
      },
      {
        label: "k",
        onClick: action(`clicked rise instrument k`)
      },
      {
        label: "l",
        onClick: action(`clicked rise instrument l`)
      }
    ]
  }
];
export const grid = () => <ButtonGrid columns={columns} />;
grid.story = {
  name: "Button Grid"
};
