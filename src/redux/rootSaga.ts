import { all } from "redux-saga/effects";
import { watchSubmitLogin, watchGetAllTalents, watchLogout } from "./actions";

export default function* rootSaga() {
  yield all([watchSubmitLogin(), watchLogout(), watchGetAllTalents()]);
}
