import axios from "axios";
import { takeEvery, call } from "redux-saga/effects";

import { History } from "history";
import { EARTHDAWN_URL } from "../../util/baseUrls";

const SUBMIT_LOGIN = "SUBMIT_LOGIN";

interface LoginForm {
  username: string;
  password: string;
}

export interface SubmitLoginArgs {
  loginForm: LoginForm;
  history: History;
}

export interface SubmitLoginFormAction {
  type: typeof SUBMIT_LOGIN;
  payload: SubmitLoginArgs;
}

export const submitLogin = ({
  loginForm,
  history,
}: SubmitLoginArgs): SubmitLoginFormAction => ({
  type: SUBMIT_LOGIN,
  payload: { loginForm, history },
});

export function* watchSubmitLogin() {
  yield takeEvery(SUBMIT_LOGIN, handleSubmitLogin);
}

export function* handleSubmitLogin(action: SubmitLoginFormAction) {
  const { loginForm, history } = action.payload;
  const { username, password } = loginForm;

  const headers = {
    "Content-Tpye": "application/json",
  };

  const body = { username, password };

  try {
    const res = axios.post(EARTHDAWN_URL + "/v1/login", body, headers);
    const data = res.data;
    debugger;
  } catch (err) {
    console.error("Error logging in user", { err });
  }
}
