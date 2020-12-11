import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
class Series extends Component {
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
      <div>
        The length of series array: {this.state.series.length}
        <SeriesList list={this.state.series} />
      </div>
    );
  }
}

export default Series;
