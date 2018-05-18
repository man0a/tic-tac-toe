import GameField from "./GameField"
import uuid from "uuid";
import GameProgressTracker from "../../models/GameProgressTracker";

it('renders without crashing', () => {
  shallow(<GameField />);
//  Check initial state
//   this.state = {
//     currentGameID: uuid(),
//     currentPlayer: PLAYER.O,
//     currentGame: new GameProgressTracker(GAME_BOARD_SIZE),
//     isFinished: false
//   };
});

it('Board is cleared when new game button pressed', () => {
  // assert class is not found and also key is different
});

it('Move is drawn on board when grid is clicked', () => {
  // assert class is not found and also key is different
});

it('Only one move is drawn per square', () => {

});

it('No further moves can be made when game is won before stalemate', () => {

});
