import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../../components/button/Button";

export default {
  title: "Sonic DJ Button"
};

export const button = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
