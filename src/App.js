import "./App.css";
import React, { Component } from 'react';
import Box from './components/Box';



class App extends Component {
  constructor() {
    super();
    // set default state
    const boxes = [];
    const numBoxes = 24;

    for(let i = 0; i < numBoxes; i++) {
  boxes.push({
    id: i,
    color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
});
}

    this.state = {
      boxes,
    };
    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }

  getRandomColor() {
    const rgb = Math.floor(Math.random() * 256);
    return rgb;
  }

  handleBoxClick(event) {
    const { boxes } = this.state
    const newBoxes = boxes.map((box) => {
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

  render() {
    const renderBoxes = this.state.boxes.map((box) => {
      return (
      <Box values={
      {key: box.id},
      {id: box.id},
      {color: box.color}}
      methods={{handleBoxClick: this.handleBoxClick}}/>
    );
    });
    
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
