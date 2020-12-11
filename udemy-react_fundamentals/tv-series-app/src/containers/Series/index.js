import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";
class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false,
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
    /* fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then((res) => {
        /* console.log(res); *
        return res.json();
      })
      .then((res) => this.setState({ series: res })); */
  }

  onSeriesInputChange = (e) => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    /* "http://api.tvmaze.com/search/shows?q=" + e.target.value */
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((res) => {
        /* console.log(res); */
        return res.json();
      })
      .then((res) => this.setState({ series: res, isFetching: false }));
  };
  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        {/* The length of series array: {this.state.series.length} */}
        <Intro message="Here you can find all of your most loved series" />
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>Please enter series name into the input</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No series found with this name</p>
        )}
        {isFetching && <Loader />}
        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
