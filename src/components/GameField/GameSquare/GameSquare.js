import React, { Component } from "react";
import "../GameField.css"

class GameSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: props.y,
      x: props.x,
      clickHandler: props.clickHandler
    };
  }

  render() {
    const { x, y, clickHandler } = this.state;
    return (
      <div className={"playing_square"}
           onClick={clickHandler}
           data={`${y}-${x}`}>
      </div>
    )
  }
}

export default GameSquare
