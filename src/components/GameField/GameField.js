import React, { Component } from 'react';
import { connect } from "react-redux";
import { increaseScore } from "../../redux/actions";
import GameMove from '../../models/GameMove';
import GameProgressTracker from '../../models/GameProgressTracker';
import "./GameField.css";

const GAME_BOARD_SIZE = 3; // Creates a game board of  3 x 3
const PLAYER = { O: "circle", X: "cross" };

const mapDispatchToProps = dispatch => {
  return {
    increaseScore: score => dispatch(increaseScore(score))
  };
};

class GameField extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerOScore: 0,
      playerXScore: 0,
      currentPlayer: PLAYER.O,
      currentGame: new GameProgressTracker(GAME_BOARD_SIZE),
      isFinished: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isFinished;
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
    if (!e.target.getAttribute('data') || e.target.getAttribute('data').length === 0 || this.state.isFinished) {
      return;
    }
    const { currentPlayer, currentGame } = this.state;

    let playerMove = document.createElement("span");
    playerMove.classList.add(currentPlayer);
    e.target.appendChild(playerMove);

    const coordinates = e.target.getAttribute('data').split('-');
    const result = currentGame.addMoveAndCheckWinner(new GameMove(coordinates[0], coordinates[1], currentPlayer));
    e.target.setAttribute('data', "");

    const nextPlayer = currentPlayer === PLAYER.O ? PLAYER.X : PLAYER.O;
    this.setState({ currentPlayer: nextPlayer });

    this.analyzeResult(result)
  }

  analyzeResult(result) {
    if (result) {
      this.setState({ isFinished: true });
      switch (result) {
        case "STALEMATE":
          setTimeout(() => alert("STALEMATE"), 1); // Gives browser time to apply css before alert
          break;
        case "X":
          setTimeout(() => alert("Player X wins"), 1);
          this.props.increaseScore("X");
          break;
        case "O":
          setTimeout(() => alert("Player O wins"), 1);
          this.props.increaseScore("O");
          break;
        default:
          break;
      }
    }
  }

  createNewGame() {
    this.setState({ currentGame: new GameProgressTracker(GAME_BOARD_SIZE) });
  }

  render() {
    console.log("re-render");
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

export { GameField }

export default connect(null, mapDispatchToProps)(GameField);