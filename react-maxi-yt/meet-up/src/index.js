import React from "react";
import ReactDOM from "react-dom/client";
/* import ReactDOM from "react-dom"; */
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/* ReactDOM.render(<App />, document.getElementById("root")); */
