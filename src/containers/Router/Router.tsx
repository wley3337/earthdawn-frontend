import React from "react";
import { Route } from "react-router-dom";
import Login from "../Login/Login";

export const Router: React.FC = () => {
  return <Route exact path="/login" component={Login} />;
};
