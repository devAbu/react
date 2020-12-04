import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} year old!
        <span>{props.children}</span>
        {/* When using class-based component, it's {this.name} */}
        {/* {Math.floor(Math.random() * 30)} */}
      </p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
