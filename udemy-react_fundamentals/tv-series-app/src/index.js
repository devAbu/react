import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

/* const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
}; */

/* const greeting = React.createElement("h1", {}, "Hello from React"); */
/* const greeting = <h1>Hello World...date: {getCurrentDate()}</h1>; */

/* ReactDOM.render(greeting, document.getElementById("root")); */

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
