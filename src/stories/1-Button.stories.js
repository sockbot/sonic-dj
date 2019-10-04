import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../components/Button";

export default {
  title: "Sonic DJ Button"
};

export const button = () => (
  <Button onClick={action("clicked")} label={"JUNGLE"} active={true} />
);

// export const inactiveButton = () => {
//   <Button onClick={action("clicked")} label={"JUNGLE"} active={false} />;
// };

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);
