import React from "react";
import { sendLoopData } from "./websocketfunctions";
export default function useIndexState() {
  const [activeIndex, setActiveIndex] = React.useState({
    loops: {
      Lead: null,
      Bass: null,
      Drum: null,
      Rise: null
    },
    sample: null
  });

  const indexSetter = function(label, index) {
    if (activeIndex["loops"][label] === index) {
      setActiveIndex({
        ...activeIndex,
        loops: { ...activeIndex["loops"], [label]: null }
      });
    } else {
      setActiveIndex({
        ...activeIndex,
        loops: { ...activeIndex["loops"], [label]: index }
      });
    }
    sendLoopData(activeIndex);
  };

  const sampleSetter = function(blank, blank2, sound) {
    setActiveIndex({
      ...activeIndex,
      sample: sound
    });
    sendLoopData(activeIndex);
  };

  const indexClearer = function() {
    setActiveIndex({
      loops: {
        Lead: null,
        Bass: null,
        Drum: null,
        Rise: null
      },
      sample: null
    });
  };

  return { activeIndex, indexSetter, indexClearer, sampleSetter };
}
