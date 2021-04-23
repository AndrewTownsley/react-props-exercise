import React, { Component} from 'react';
import "./App.css";

let boxes = [];
let numBoxes = 24;

class App extends Component {
  constructor(props) {
    super(props);
    // set default state

    for(let i = 0; i < numBoxes; i++) {
      boxes.push({});
    }
    console.log(boxes);

    this.setState({
      App: 'boxes',
    });
    // bind methods to this
  }

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{/* render boxes */}</div>
      </main>
    );
  }
}

export default App;
