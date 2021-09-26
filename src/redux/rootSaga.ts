import { all } from 'redux-saga/effects';
import { watchSubmitLogin, watchGetAllTalents } from './actions';

export default function* rootSaga() {
  yield all([watchSubmitLogin(), watchGetAllTalents()]);
}
