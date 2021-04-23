import React, { Component } from "react";

class Box extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        onClick = {props.handleClick()}
        style={{
          width: "180px",
          height: "180px",
          backgroundColor: props.color,
          border: "1px solid black",
          display: "inline-block",
        }}
        id={props.id}
      >
        <span>{/* Add rgb value from props */}</span>
      </div>
    );
  }

};

export default Box;
