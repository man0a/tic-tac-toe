const STALEMATE = "STALEMATE";

class GameProgressTracker {
  constructor(size) {
    this.size = size;
    this.moveCounter = 0;
    this.progress = {};
    this.initializePlayingField();
  }

  initializePlayingField = () => {
    for(let i = 0; i<this.size; i++ ) {
      this.progress[`x-${i}`] = 0;
      this.progress[`y-${i}`] = 0;
    }

    this.progress[`diag-main`] = 0;
    this.progress[`diag-anti`] = 0;
  };

  addMoveAndCheckWinner = (gameMove) => {
    this.moveCounter += 1;
    let playerProgress = gameMove.player === 'cross' ? -1 : 1;

    if (gameMove.x === gameMove.y) {
      this.progress[`diag-main`] += playerProgress;
    }

    if(parseInt(gameMove.x) + parseInt(gameMove.y) === this.size - 1) {
      this.progress[`diag-anti`] += playerProgress;
    }

    this.progress[`x-${gameMove.x}`] += playerProgress;
    this.progress[`y-${gameMove.y}`] += playerProgress;

    if (this.moveCounter >= Math.floor(this.size-1/2)) { // Start checking for winners after |_n/2_| moves
      const result = this.checkRowColWinners() || this.checkDiagonalWinner();
      if (result) {
        return result
      }

      if (this.isStalemate()) {
        return STALEMATE;
      }
    }

    return false
  };

  checkRowColWinners() {
    for(let i = 0; i<this.size; i++) {
      if (this.progress[`x-${i}`] === this.size || this.progress[`y-${i}`] === this.size) {
        return "O";
      } else if (this.progress[`x-${i}`] === this.size * - 1 || this.progress[`y-${i}`] === this.size * - 1) {
        return "X";
      }
    }
    return false;
  }

  checkDiagonalWinner() {
    if (this.progress[`diag-main`] === this.size || this.progress[`diag-anti`] === this.size) {
      return "O";
    } else if (this.progress[`diag-main`] === this.size * - 1 || this.progress[`diag-anti`] === this.size * - 1) {
      return "X";
    }
    return false
  }

  isStalemate() {
    return this.size * this.size === this.moveCounter;
  }

}

export default GameProgressTracker