class GameProgressTracker {
  constructor(size) {
    this.size = size;
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
    let playerProgressor = gameMove.player === 'X' ? -1 : 1;
    if (gameMove.x === gameMove.y) {
      this.progress[`diag-main`] += playerProgressor;
    } else if((gameMove.x + gameMove.y) === this.size - 1) {
      this.progress[`diag-anti`] += playerProgressor;
    }
    // Check if diagonal winners

    // Check if these are winners;
    this.progress[`x-${gameMove.x}`] += playerProgressor;
    this.progress[`y-${gameMove.y}`] += playerProgressor;

    return false
  }

}