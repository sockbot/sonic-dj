import React from "react";
import Logo from "./components/Logo";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main className="layout">
      <section className="samples">Samples</section>
      <section className="middle">
        <Logo />
      </section>
      <section className="right">Set Recommended</section>
    </main>
  );
}

export default App;
