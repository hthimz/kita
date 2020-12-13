import { all } from "redux-saga/effects";
import {GroupBuySaga} from "./Ducks/GroupBuy/GroupBuyDuck";

export default function* rootSaga() {
  // Get auth from application storage and set it into store

  yield all([
    GroupBuySaga()
  ]);
}
