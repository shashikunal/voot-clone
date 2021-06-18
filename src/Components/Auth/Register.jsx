import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
const Register = () => {
  let [setUser, setStateUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    loading: false,
  });

  let { username, email, password, confirm_password, loading } = setUser;

  let handleChange = e => {
    let { name, value } = e.target;
    setStateUser({ ...setUser, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();

    try {
      console.log(setUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="authBlock">
      <article>
        <div>
          <h1>Welcome to Voot!</h1>
          <p>Please Register for a more personalized experience.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={handleChange}
              />
              <label htmlFor="username">username</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
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
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirm_password"
                id="confirmpassword"
                value={confirm_password}
                onChange={handleChange}
              />
              <label htmlFor="confirmpassword">confirm password</label>
            </div>
            <div className="form-group register_Block">
              <span style={{ fontSize: "13px" }}>Already have an account</span>
              <Link to="/login"> Login</Link>
            </div>
            <div className="form-group">
              <button>{loading === true ? "loading" : "Register"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Register;
