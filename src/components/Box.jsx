import React, { Component } from "react";

class Box extends Component{
  constructor(props) {
    super(props);

    this.handleBoxClick = this.props.methods.bind()
  }

  render() {
    const {key, id, color} = this.props.values
    return (
      <div
        id={id}
        key={id}
        style={{
          width: "180px",
          height: "180px",
          backgroundColor: color,
          border: "1px solid black",
          display: "inline-block",
        }}
        onClick = {(event) => this.handleBoxClick(this)}
        id={props.id}
      >
        <span>{color}</span>
      </div>
    );
  }

};

export default Box;
