/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import GroupBuyReducer from "../Ducks/GroupBuy/GroupBuyDuck";
/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    GroupBuyReducer,
    ...asyncReducers,
  });
}
