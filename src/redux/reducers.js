import { INCREASE_SCORE } from "./action-types";

const initialState = {
  playerX: 0,
  playerO: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      let currentScore = { ...state };
      if (action.payload === "X") {
        currentScore.playerX += 1;
      } else if(action.payload === "O")  {
        currentScore.playerO += 1;
      }

      return currentScore;
    default:
      return state;
  }
};

export default rootReducer;