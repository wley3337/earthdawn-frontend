import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { Router } from "../Router/Router";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Router} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
