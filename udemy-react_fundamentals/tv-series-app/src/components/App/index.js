import "./index.css";
import { Component } from "react";
import Intro from "../Intro";
import "whatwg-fetch"; //send request

/* const Intro = (props) => {
  return(
       <p className="App-Intro">
         Our first functional component</p>
    )
} */

class App extends Component {
  state = {
    series: [],
  };

  /* Automatically invoked after the component has been rendered  */
  componentDidMount() {
    /* Anything can be *
    const series = ["Vikings", "Game of Thrones"];

    setTimeout(() => {
      /* set state - tells react that this component and its children need to be re-rendered with the updated state*
      this.setState({ series });
      /* {series: series } -- modern js = {series} 
    }, 2000);*/

    /* Promises = .then */
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then((res) => {
        /* console.log(res); */
        return res.json();
      })
      .then((res) => this.setState({ series: res }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV SERIES APP</h1>
        </header>
        <Intro message="Here you can find all of your most loved series" />
        The length of series array: {this.state.series.length}
      </div>
    );
  }
}

export default App;
