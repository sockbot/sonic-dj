import React from "react";
import { sendLoopData } from "./websocketfunctions";

export default function useIndexState() {
  const [activeIndex, setActiveIndex] = React.useState({
    loops: {
      Lead: "silly_lead",
      Bass: null,
      Drum: null,
      Rise: null
    }
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
  };

  const sampleSetter = function(sound) {
    setActiveIndex({
      ...activeIndex,
      sample: sound
    });
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

  React.useEffect(() => {
    sendLoopData(activeIndex);
  }, [activeIndex]);

  return { activeIndex, indexSetter, indexClearer, sampleSetter };
}
