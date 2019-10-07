import React from "react";

export default function useApplicationData() {
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
  };

  return { activeIndex, indexSetter };
}
