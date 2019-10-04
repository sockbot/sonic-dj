import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import Button from "../../components/button/Button";

export default {
  title: "Sonic DJ Button"
};

export const button = () => (
  <Button onClick={action("clicked")} label={"JUNGLE"} active={false} />
);

// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// storiesOf("Button", module).add("Inactive", () => {
//   <Button onClick={action("clicked")}>Hello Button</Button>;
// });
