import React, { Component } from "react";
import "./BarCounter.scss";
import Progressbar from "./Progressbar";
import { socket } from "./websocketfunctions";

export default class BarCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { bar: 1, phrase: 1 };
  }

  componentDidMount() {
    const trackSetter = (type, value) => {
      this.setState({ [type]: value });
    };
    socket.on("bar", message => {
      trackSetter("bar", message + 1);
    });
    socket.on("phrase", message => {
      trackSetter("phrase", message + 1);
    });
    if (this.state.bar == 9) {
      trackSetter("phrase", 7);
    }
  }

  render() {
    return (
      <section className="barTracker">
        <section className="counter">{this.state.bar}/8</section>
        <section className="progress">
          <Progressbar progress={this.state.phrase} />
        </section>
      </section>
    );
  }
}
