import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Abu",
        age: 23,
      },
      {
        name: "combe",
        age: 23,
      },
      {
        name: "Kum",
        age: 24,
      },
      {
        name: "JUHU",
        age: 4,
      },
    ],
  }; //special property for component (only with extends Component - without REACT HOOKS)

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = "Abdulrahman";
    this.setState({
      persons: [
        {
          name: newName,
          age: 23,
        },
        {
          name: "combe",
          age: 23,
        },
        {
          name: "Kum",
          age: 24,
        },
        {
          name: "JUHU",
          age: 2,
        },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 23,
        },
        {
          name: "combe",
          age: 23,
        },
        {
          name: "Kum",
          age: 24,
        },
        {
          name: "JUHU",
          age: 2,
        },
      ],
    });
  };
  render() {
    const style = {
      backgroundColor: "blue",
      border: "1px solid green",
      padding: "8px",
    };

    return (
      <div className="App">
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <h1>Hi, I'm ABU</h1>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <button
          onClick={() => this.switchNameHandler("FUNKCIJA")}
          style={style}
        >
          {/* NOT A GOOD PRACTICE */}
          Switch name
        </button>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Promijenio")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
      /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am Abu')) */
    );
  }
}

export default App;
