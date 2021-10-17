import React from "react";
import { Route } from "react-router-dom";
import { getXCSRFToken } from "../../util/cookie";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Talents from "../Talents/Talents";

export const Router: React.FC = () => {
  const hasXCSRFToken = !!getXCSRFToken();
  return (
    <>
      {hasXCSRFToken ? (
        // this should be to check if the token xcsrf token is still valid ( hasn't expired ) before routing
        <Route exact path="/" component={Landing} />
      ) : (
        <Route exact path="/" component={Login} />
      )}
      <Route exact path="/login" component={Login} />
      <Route exact path="/talents" component={Talents} />
    </>
  );
};
