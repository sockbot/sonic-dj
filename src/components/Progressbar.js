import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Progressbar.scss";

function Progressbar(props) {
  return (
    <ProgressBar>
      <ProgressBar
        striped
        animated
        variant={props.progress === 1 ? "danger" : null}
        now={17}
        key={1}
        label="Break A"
      />
      <ProgressBar
        striped
        animated
        variant={props.progress === 2 ? "danger" : "success"}
        now={17}
        key={2}
        label="Break B"
      />
      <ProgressBar
        striped
        animated
        variant={props.progress && props.progress === 3 ? "danger" : null}
        now={17}
        key={3}
        label="Buildup A"
      />
      <ProgressBar
        striped
        animated
        variant={props.progress === 4 ? "danger" : "success"}
        now={17}
        key={4}
        label="Buildup B"
      />
      <ProgressBar
        striped
        animated
        variant={props.progress === 5 ? "danger" : null}
        now={17}
        key={5}
        label="Drop A"
      />
      <ProgressBar
        striped
        animated
        variant={props.progress === 6 ? "danger" : "success"}
        now={17}
        key={6}
        label="Drop B"
      />
    </ProgressBar>
  );
}

export default Progressbar;
