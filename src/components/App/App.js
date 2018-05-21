import React, { Component } from 'react';
import './App.css';
import GameField from '../GameField/GameField';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScoreBoard />
        <GameField />
      </div>
    );
  }
}

export default App;
