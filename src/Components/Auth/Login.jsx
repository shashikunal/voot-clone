import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
const Login = () => {
  return (
    <section id="authBlock">
      <article>
        <div>
          <h1>Welcome to Voot!</h1>
          <p>Please Login for a more personalized experience.</p>
          <form>
            <div className="form-group">
              <input type="text" name="email" id="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-group register_Block">
              <Link to="/register">Register</Link>
              <Link to="/password-reset">Reset password</Link>
            </div>
            <div className="form-group">
              <button>Login</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
