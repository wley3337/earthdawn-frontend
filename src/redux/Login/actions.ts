import axios from "axios";
import { History } from "history";
import { takeEvery } from "redux-saga/effects";

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

interface LoginResponse {
  username: string;
  password: string;
}
interface ErrorResponse {
  message: string;
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

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ username, password });

    const res: { data: LoginResponse | ErrorResponse; status: number } =
      yield axios.post<LoginResponse>(
        EARTHDAWN_URL + "/v1/login",
        body,
        config
      );

    // success
    if (res.status === 200) {
      console.log("logged in");
      // debugger;
    } else {
      // status code
      console.error("error", { statusCode: res.status });
    }
    // Push user to root
    history.push("/");
  } catch (err) {
    console.error("Error logging in user", { err });
  }
}
