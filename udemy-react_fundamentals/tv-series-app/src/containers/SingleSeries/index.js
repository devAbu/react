import React, { Component } from "react";
import Loader from "../../components/Loader";

class SingleSeries extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then((res) => {
        return res.json();
      })
      .then((res) => this.setState({ show: res }));
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <p>{show.name}</p>
            <p>{show.premiered}</p>
            <p>{show.rating.average}</p>
            <p>{show._embedded.episodes.length}</p>
            <img src={show.image.medium} alt="JUHU" />
          </div>
        )}
      </div>
    );
  }
}
export default SingleSeries;
