import React, { Component } from 'react';
import "./Scoreboard.css"

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { playerX: props.playerX || 0, playerO: props.playerO || 0 }
  }

  render() {
    return (
      <fieldset>
        <legend> Current Score</legend>
        <div className={"wrapper__scoreboard"}>
          <span>Player X: {this.state.playerX}</span>
          <span>Player O: {this.state.playerO}</span>
        </div>
      </fieldset>
    )
  }
}
export default ScoreBoard;