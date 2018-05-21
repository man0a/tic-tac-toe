import React, { Component } from 'react';
import { connect } from "react-redux";
import "./Scoreboard.css";

const mapStateToProps = state => {
  return { playerX: state.playerX, playerO: state.playerO };
};

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { playerX: props.playerX || 0, playerO: props.playerO || 0 }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ playerX: nextProps.playerX, playerO: nextProps.playerO });
  }

  render() {
    return (
      <fieldset>
        <legend>Score</legend>
        <div className={"wrapper__scoreboard"}>
          <span>Player X: {this.state.playerX}</span>
          <span>Player O: {this.state.playerO}</span>
        </div>
      </fieldset>
    )
  }
}

export { ScoreBoard };

export default connect(mapStateToProps)(ScoreBoard);