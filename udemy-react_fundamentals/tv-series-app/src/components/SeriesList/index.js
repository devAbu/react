import React from "react";
import "./index.css";

const SeriesListItem = ({ series }) => {
  return <li key={series.show.id}>{series.show.name}</li>;
};

const SeriesList = (props) => {
  /* const seriesItems = props.list.map((series) => {
    return <li>{series.show.name}</li>;
  });

  return (
    <div>
      <ul>{seriesItems}</ul>
    </div>
  ); */

  /* Keys help react identify which items have changed or added or removed...ID */
  return (
    <div>
      <ul className="series-list">
        {props.list.map((series) => {
          /* return <li key={series.show.id}>{series.show.name}</li>; */
          return <SeriesListItem series={series} />;
        })}
        ;
      </ul>
    </div>
  );
};

export default SeriesList;
