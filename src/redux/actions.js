import { INCREASE_SCORE } from "./action-types";

export const increaseScore = score => ({ type: INCREASE_SCORE, payload: score });