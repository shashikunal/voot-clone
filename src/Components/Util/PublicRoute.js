import React from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "../../firebase";

const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return firebase.auth().currentUser ? (
          <Redirect to="/account" {...props} />
        ) : (
          children
        );
      }}
    />
  );
};

export default PublicRoute;
