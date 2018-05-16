import React, { Component } from 'react';
import "./GameField.css";

const GAME_BOARD_SIZE = 3; // Creates a game board of  3 x 3
const PLAYERS = { O: "O", X: "X" };

class GameField extends Component {
  constructor(props){
    super(props);
    this.state = { playerO: 0, playerX: 0, currentPlayer: "O" };
  }

  drawGrid() {
    let grid = [];
    for(let x = 0; x< GAME_BOARD_SIZE; x++) {
      for(let y = 0; y< GAME_BOARD_SIZE; y++) {
        grid.push(<div onClick={this.drawMove.bind(this)} data-x={`${y}-${x}`} className={""} key={`${x}-${y}`}>a</div>);
      }
    }
    return grid;
  }

  drawMove(e) {
    console.log("test", e)
    debugger

  }

  render() {
    return (
      <div className={"game_field__wrapper"}>
        { this.drawGrid() }
      </div>
    )
  }
}

export default GameField;