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
import PrivateRoute from "./Components/Util/PrivateRoute";
import PublicRoute from "./Components/Util/PublicRoute";
import UpdatePassword from "./Components/MyAccounts/UpdatePassword";
import CreateMovie from "./Components/VootMovies/CreateMovie";
import Movie from "./Components/VootMovies/Movie";
import VideoPlayer from "./Components/VootMovies/VideoPlayer";

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
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute path="/register" exact>
            <Register />
          </PublicRoute>
          <PublicRoute path="/password-reset" exact>
            <PasswordReset />
          </PublicRoute>
          <PublicRoute path="/otp" exact>
            <Otp />
          </PublicRoute>

          {!firebase.auth().currentUser ? (
            <PublicRoute path="/shows/:movie_name/:id" exact>
              <Movie />
            </PublicRoute>
          ) : (
            <PrivateRoute path="/shows/:movie_name/:id">
              <Movie />
            </PrivateRoute>
          )}

          {!firebase.auth().currentUser ? (
            <PublicRoute path="/movie/:movie_name/:id" exact>
              <VideoPlayer />
            </PublicRoute>
          ) : (
            <PrivateRoute path="/movie/:movie_name/:id">
              <VideoPlayer />
            </PrivateRoute>
          )}

          <PrivateRoute path="/account">
            <MyAccount users={users} />
          </PrivateRoute>
          <PrivateRoute path="/update-password" exact>
            <UpdatePassword users={users} />
          </PrivateRoute>
          <PrivateRoute path="/movies/upload-movies">
            <CreateMovie users={users} />
          </PrivateRoute>

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
