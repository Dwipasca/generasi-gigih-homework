import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "components/layouts/layout";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = useSelector((state) => state.user.isAuthenticated);
  return (
    <div>
      <Route
        {...rest}
        render={() =>
          isLogin === true ? (
            <Layout component={Component} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
