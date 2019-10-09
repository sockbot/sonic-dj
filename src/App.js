import React from "react";
import Logo from "./components/Logo";
import Progressbar from "./components/Progressbar";
import BarCounter from "./components/BarCounter";
import ButtonGrid from "./components/ButtonGrid";
import Quickset from "./components/Quickset";
import Sampleset from "./components/Sampleset";
import SetButton from "./components/SetButton";
import useIndexState from "./components/useIndexState";
import useQuicksetState from "./components/useQuicksetState";
import { columns, quicksetAction, buttons, quicksets } from "./testdata";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const {
    activeIndex,
    indexSetter,
    indexClearer,
    sampleSetter
  } = useIndexState();
  const {
    quicksetIndex,
    setQuicksetIndex,
    quicksetSetter,
    setPrevious
  } = useQuicksetState();
  return (
    <main className="layout">
      <section className="samples">
        <Sampleset
          label="Samples"
          color="#6D3015"
          buttons={buttons}
          onClick={sampleSetter}
        />
      </section>
      <section className="middle">
        <section className="logo">
          <Logo />
        </section>
        <section className="barcounter">
          <BarCounter />
        </section>
        <section className="buttongrid">
          <ButtonGrid
            columns={columns}
            onClick={indexSetter}
            activeIndex={activeIndex}
          />
        </section>
        <section className="clear">
          <SetButton onClick={indexClearer} label="CLEAR" color="lightblue" />
        </section>
      </section>
      <section className="right">
        {quicksetIndex["quicksets"].map(quickset => (
          <Quickset
            label={quickset.label}
            color={quickset.color}
            buttons={quickset.buttons} //quicksetIndex["quicksets"][0]
            onClick={indexSetter}
            quickset={setPrevious}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
