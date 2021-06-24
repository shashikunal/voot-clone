import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Components/VootHeaders/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PasswordReset from "./Components/Auth/PasswordReset";
import Otp from "./Components/Auth/Otp";
import PageNotFound from "./Pages/404";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "./firebase";
import MyAccount from "./Components/MyAccounts/MyAccount";

const App = () => {
  let [users, setUsers] = useState("shashi sir dadda");

  //signed in or not
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUsers(user); //authenticated users
      } else {
        setUsers(""); //anonymous users
      }
    });
  }, [users]);

  return (
    <Fragment>
      <Router>
        <Navbar users={users} />
        <ToastContainer />
        {/* Routing starts here */}

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/password-reset" exact>
            <PasswordReset />
          </Route>
          <Route path="/otp" exact>
            <Otp />
          </Route>
          <Route path="/account" exact>
            <MyAccount users={users} />
          </Route>
          {/* page not found always Should be at the last */}
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        {/* Routing ends here */}
      </Router>
    </Fragment>
  );
};

export default App;
