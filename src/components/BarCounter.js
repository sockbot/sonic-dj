import React, { Component } from "react";
import "./BarCounter.scss";
//import useTrackState from "./useTrackState";
import openSocket from "socket.io-client";
import Progressbar from "./Progressbar";
//const { trackState, trackSetter } = useTrackState();
import { socket } from "./websocketfunctions";

//const socket = openSocket("http://localhost:8000");

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
  }

  render() {
    return (
      <section className="barTracker">
        <section className="counter">{this.state.bar}/8</section>
        <section className="progress">
          <Progressbar />
        </section>
      </section>
    );
  }
}
