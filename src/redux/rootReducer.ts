import { combineReducers } from "redux";

const testReducer = (state = "IHopeSo", action: {}) => {
  return state;
};

const rootReducer = combineReducers({ testReducer });

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
