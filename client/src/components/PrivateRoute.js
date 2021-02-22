import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        console.log(children);
        return loggedIn === true ? children : <Redirect to='/' />;
      }}
    />
  );
};

export default PrivateRoute;
