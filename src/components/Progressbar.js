import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import "./Progressbar.scss";

function Progressbar(props) {
  return (
    <ProgressBar>
      <ProgressBar
        striped
        animated
        variant={props.progress === "BreakA" ? "danger" : null}
        now={17}
        key={1}
        label="Break A"
      />
      <ProgressBar
        striped
        animated
        variant={props.progress === "BreakB" ? "danger" : "success"}
        now={17}
        key={2}
        label="Break B"
      />
      <ProgressBar
        striped
        animated
        variant={
          props.progress && props.progress === "BuildupA" ? "danger" : null
        }
        now={17}
        key={3}
        label="Buildup A"
      />
      <ProgressBar
        striped
        animated
        variant={props.progress === "BuildupB" ? "danger" : "success"}
        now={17}
        key={4}
        label="Buildup B"
      />
      <ProgressBar
        striped
        animated
        variant={props.progress === "DropA" ? "danger" : null}
        now={17}
        key={5}
        label="Drop A"
      />
      <ProgressBar
        striped
        animated
        variant={props.progress === "DropB" ? "danger" : "success"}
        now={17}
        key={6}
        label="Drop B"
      />
    </ProgressBar>
  );
}

export default Progressbar;
