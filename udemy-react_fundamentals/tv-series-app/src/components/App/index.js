import "./index.css";
import { Component } from "react";
import Intro from "../Intro";
import Series from "../../containers/Series";
import "whatwg-fetch"; //send request

/* const Intro = (props) => {
  return(
       <p className="App-Intro">
         Our first functional component</p>
    )
} */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV SERIES APP</h1>
        </header>
        <Intro message="Here you can find all of your most loved series" />
        <Series />
      </div>
    );
  }
}

export default App;
