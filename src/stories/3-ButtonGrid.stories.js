import React from "react";
// import { action } from "@storybook/addon-actions";

import ButtonGrid from "../components/ButtonGrid";

export default {
  title: "Button Grid"
};

const instruments = ["Lead", "Bass", "Drum", "Rise"];
export const grid = () => <ButtonGrid />;
grid.story = {
  name: "Button Grid"
};
