import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>This is it!</p>
        </header>
      </div>
    </Provider>
  );
};

export default App;
