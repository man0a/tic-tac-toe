import React, { Component } from 'react';
import GameMove from '../../models/GameMove';
import GameProgressTracker from '../../models/GameProgressTracker';
import "./GameField.css";

const GAME_BOARD_SIZE = 3; // Creates a game board of  3 x 3
const PLAYER = { O: "circle", X: "cross" };

class GameField extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerOScore: 0,
      playerXScore: 0,
      currentPlayer: PLAYER.O
    };
  }

  drawGrid() {
    let grid = [];
    for(let x = 0; x < GAME_BOARD_SIZE; x++) {
      for(let y = 0; y < GAME_BOARD_SIZE; y++) {
        grid.push(<div className={"playing_square"} onClick={this.drawMove.bind(this)} data={`${y}-${x}`} key={`${y}-${x}`} />);
      }
    }
    return grid;
  }

  drawMove(e) {
    if (!e.target.getAttribute('data') || e.target.getAttribute('data').length === 0) {
      return;
    }
    const { currentPlayer } = this.state;

    let playerMove = document.createElement("span");
    playerMove.classList.add(currentPlayer);
    e.target.appendChild(playerMove);

    let coordinates = e.target.getAttribute('data').split('-');
    const move = new GameMove(coordinates[0], coordinates[1], currentPlayer);
    e.target.setAttribute('data', "");
    const nextPlayer = currentPlayer === PLAYER.O ? PLAYER.X : PLAYER.O;
    this.setState({ currentPlayer: nextPlayer });
  }

  createNewGame() {
    this.setState('currentGame', new GameProgressTracker(GAME_BOARD_SIZE));
  }

  render() {
    return (
      <div className={"wrapper"}>
        <button className={"btn btn__new_game"} onClick={this.createNewGame.bind(this)}> Start New Game </button>
        <div className={"wrapper wrapper__game_field"}>
          { this.drawGrid() }
        </div>
      </div>
    )
  }
}

export default GameField;