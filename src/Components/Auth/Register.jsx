import React from "react";
import "./Auth.css";
const Register = () => {
  return (
    <section id="authBlock">
      <article>
        <h1>Welcome to Voot!</h1>
        <p>Please Sign Up or Login for a more personalized experience.</p>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="confirm password"
            />
          </div>
          <div className="form-group">
            <button>Register</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Register;
