import axios from "axios";
import { takeEvery } from "redux-saga/effects";
import { History } from "history";

import { LOGOUT, LogoutAction } from "./types";
import { EARTHDAWN_URL } from "../../util/baseUrls";

interface ErrorResponse {
  message: string;
}

interface LogoutResponse {
  message: "log out successful";
}
export const logout = (history: History): LogoutAction => ({
  type: LOGOUT,
  payload: { history },
});
export function* watchLogout() {
  yield takeEvery(LOGOUT, handleLogout);
}
function* handleLogout(action: LogoutAction) {
  const history = action.payload.history;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const res: { data: LogoutResponse | ErrorResponse; status: number } =
      yield axios.get<LogoutResponse>(EARTHDAWN_URL + "/v1/logout", config);

    // success
    if (res.status === 200) {
      console.log("logged out");
    } else {
      // status code
      console.error("error", { statusCode: res.status });
    }
    // Push user to root
    history.push("/");
  } catch (err) {
    console.error("Error logging out", { err });
  }
}
