import React from "react";

import Progressbar from "../components/Progressbar";

export default {
  title: "Sonic DJ Progress Bar"
};

export const progressbar = () => <Progressbar />;

export const changePosition = () => <Progressbar progress={6} />;
