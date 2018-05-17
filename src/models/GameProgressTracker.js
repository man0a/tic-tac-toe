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
    //Part of main Diagonal
    this.moveCounter += 1;
    let playerProgress = gameMove.player === 'X' ? -1 : 1;
    if (gameMove.x === gameMove.y) {
      this.progress[`diag-main`] += playerProgress;
    } else if((gameMove.x + gameMove.y) === this.size - 1) {
      this.progress[`diag-anti`] += playerProgress;
    }
    // Check if diagonal winners

    // Check if these are winners;
    this.progress[`x-${gameMove.x}`] += playerProgress;
    this.progress[`y-${gameMove.y}`] += playerProgress;

    if (this.isStalemate()) {
      return STALEMATE;
    }

    return false
  }

  isStalemate() {
    return this.size === this.moveCounter;
  }

}