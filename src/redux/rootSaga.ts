import { all } from "redux-saga/effects";
import { watchSubmitLogin } from "./actions";

export default function* rootSaga() {
  yield all([watchSubmitLogin()]);
}
