import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "redux/store";

const PrivateRoute = ({ ...routerProps }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Route {...routerProps} />;
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;
