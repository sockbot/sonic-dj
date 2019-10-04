import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../components/Button";

export default {
  title: "Sonic DJ Button"
};

export const activeButton = () => (
  <Button onClick={() => action("clicked")} label={"JUNGLE"} active={true} />
);
activeButton.story = {
  name: "Active Button"
};

export const inactiveButton = () => (
  <Button onClick={action("clicked")} label={"JUNGLE"} active={false} />
);
inactiveButton.story = {
  name: "Inactive Button"
};
