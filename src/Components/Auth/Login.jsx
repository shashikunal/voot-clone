import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
import "./Auth.css";
const Login = ({ history }) => {
  let [setUser, setStateUser] = useState({
    email: "",
    password: "",
    loading: false,
  });

  let { email, password, loading } = setUser;
  let handleChange = e => {
    let { name, value } = e.target;
    setStateUser({ ...setUser, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();

    try {
      setStateUser({ loading: true });
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      //emailverification
      if (userData.user.emailVerified === true) {
        let message = `${userData.user.email} has been successfully logged in`;
        toast.success(message);
        history.push("/");
      } else {
        let errorMessage = `${userData.user.email} not yet verified please verify and login`;
        toast.error(errorMessage);
      }
    } catch (err) {
      toast.error(err.message);
    }

    setStateUser({ loading: false });
  };

  return (
    <section id="authBlock">
      <article>
        <div>
          <h1>Welcome to Voot!</h1>
          <p>Please Login for a more personalized experience.</p>
          <div className="form-group">
            <Link to="/otp" className="phoneBtn">
              continue with phone number
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-group register_Block">
              <Link to="/register">Register</Link>
              <Link to="/password-reset">Reset password</Link>
            </div>
            <div className="form-group">
              <button>{loading === true ? "loading..." : "Login"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default withRouter(Login);
