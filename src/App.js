import React, { Component} from 'react';
import "./App.css";
import Box from './components/Box';

const boxes = [];
const numBoxes = 24;

for(let i = 0; i < numBoxes; i++) {
  boxes.push({
    id: i,
    color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
});
}

class App extends Component {
  constructor(props) {
    super(props);
    // set default state

    this.state({
      boxes,
    });
    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);
  }

  handleBoxClick(event) {
    const newBoxes = this.state.boxes.map((box) => {
      if(box.id === event.target.id) {
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
      }
      return box;
    });
  
// Set new state after changing box color...
    this.setState({
      boxes: newBoxes,
    })
  }

  getRandomColor() {
    const rgb = Math.floor(Math.random() * 256);
    return rgb;
  }

  render() {
    const renderBoxes = this.state.boxes.map((box) => {
      <Box values={
      {key: box.id},
      {id: box.id},
      {color: box.color}}
      methods={{handleBoxClick: this.handleBoxClick}}/>
    })

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
        <div className="App">
        <Box 
        
        />
        </div>
      </main>
    );
  }
}

export default App;
