import React from "react";
import Logo from "./components/Logo";
import Progressbar from "./components/Progressbar";
import ButtonGrid from "./components/ButtonGrid";
import Quickset from "./components/Quickset";
import { columns, quicksetAction, buttons, quicksets } from "./testdata";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main className="layout">
      <section className="samples">Samples</section>
      <section className="middle">
        <section className="logo">
          <Logo />
        </section>
        <section className="progress">
          <Progressbar />
        </section>
        <section className="buttongrid">
          <ButtonGrid columns={columns} />
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
