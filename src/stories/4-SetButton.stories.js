import React from "react";
import SetButton from "../components/SetButton";

export default {
  title: "Sonic DJ Set Button"
};

export const setbutton = () => <SetButton />;

export const colored = () => (
  <SetButton color="green" label="Set Recommended" />
);
