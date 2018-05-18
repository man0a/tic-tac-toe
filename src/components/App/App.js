import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import GameField from '../GameField/GameField';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <ScoreBoard />
        <GameField />
      </div>
    );
  }
}

export default App;
