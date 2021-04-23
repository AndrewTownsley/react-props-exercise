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
    
  }

  handleBoxClick(event) {
    const newBoxes = this.state.boxes.map((box) => {
      if(box.id === event.target.id) {
        box.color = ``;
      }
      return box;
    }
  

    this.setState({
      boxes: newBoxes,
    })
  }

  getRandomColor() {
    let rgb = Math.floor(Math.random() * 256);
    return rgb;
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
        <div className="App">
        <Box 
        
        />
        </div>
      </main>
    );
  }
}

export default App;
