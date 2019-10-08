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

  const indexSetter = function(collabel, index) {
    if (activeIndex["loops"][collabel] === index) {
      setActiveIndex({
        ...activeIndex,
        loops: { ...activeIndex["loops"], [collabel]: null }
      });
    } else {
      setActiveIndex({
        ...activeIndex,
        loops: { ...activeIndex["loops"], [collabel]: index }
      });
    }
    sendLoopData(activeIndex);
  };

  const sampleSetter = function(sound) {
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
