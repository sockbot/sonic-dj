import React from "react";

export default function useQuicksetState() {
  const [quicksetIndex, setQuicksetIndex] = React.useState({
    quicksets: [
      {
        recommended: {
          Lead: 1,
          Bass: null,
          Drum: null,
          Rise: null,
          active: null
        }
      },
      {
        current: {
          Lead: 2,
          Bass: null,
          Drum: null,
          Rise: null,
          active: null
        }
      },
      {
        previous: {
          Lead: null,
          Bass: null,
          Drum: 3,
          Rise: null,
          active: null
        }
      }
    ]
  });

  const quicksetSetter = function(category, label, index) {
    setQuicksetIndex({
      ...quicksetIndex[0],
      [category]: { ...quicksetIndex[category]["loops"], [label]: index }
    });
  };

  return { quicksetIndex, setQuicksetIndex, quicksetSetter };
}
