import React, { useState, useEffect } from "react";
import { getCurrentBar } from "./websocketfunctions";

function BarCounter(props) {
  const [bar, setBar] = useState(0);
  const { barCount } = props;
  return <div>{barCount}/8</div>;
}

export default BarCounter;
