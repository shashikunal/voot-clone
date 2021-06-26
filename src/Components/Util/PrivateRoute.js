import React from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "../../firebase";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return firebase.auth().currentUser ? (
          children
        ) : (
          <Redirect to="/login" {...props} />
        );
      }}
    />
  );
};

export default PrivateRoute;
