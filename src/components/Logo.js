import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Logo.scss";

function Logo() {
  return (
    <div class="logo">
      <div class="sonic">SONIC</div>
      <div class="dj">
        DJ<i class="fas fa-forward"></i>
      </div>
      <i class="fas fa-forward"></i>
    </div>
  );
}

export default Logo;
