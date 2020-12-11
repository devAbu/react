import React from "react";
import loader from "../../assets/loader.gif";

const Loader = (props) => {
  return (
    <div>
      <img src={loader} alt="loader gif" style={{ width: 150 }} />
    </div>
  );
};

export default Loader;
