import React from "react";
import Logo from "./components/Logo";
import Progressbar from "./components/Progressbar";
import ButtonGrid from "./components/ButtonGrid";
import Quickset from "./components/Quickset";
import SetButton from "./components/SetButton";
import useApplicationData from "./components/useApplicationData";

import { columns, quicksetAction, buttons, quicksets } from "./testdata";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { activeIndex, indexSetter } = useApplicationData();
  console.log(activeIndex);
  return (
    <main className="layout">
      <section className="samples">
        <Quickset label="Samples" color="#6D3015" buttons={buttons} />
      </section>
      <section className="middle">
        <section className="logo">
          <Logo />
        </section>
        <section className="progress">
          <Progressbar />
        </section>
        <section className="buttongrid">
          <ButtonGrid columns={columns} onClick={indexSetter} />
        </section>
        <section className="clear">
          <SetButton label="CLEAR" color="lightblue" />
        </section>
      </section>
      <section className="right">
        {quicksets.map(quickset => (
          <Quickset
            label={quickset.label}
            color={quickset.color}
            buttons={quickset.buttons}
            quicksetAction={quickset.quicksetAction}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
