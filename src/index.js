import React from "react";
import ReactDOM from "react-dom";

import "./styles/Calculator.css";

import Calculator from "./components/Calculator.jsx";

function tick() {
  ReactDOM.render(<Calculator />, document.getElementById("root"));
}

setInterval(tick, 1000);
