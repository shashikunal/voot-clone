import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";


const PasswordReset = ({ history }) => {
  let [user, setUser] = useState({
    email: "",
    loading: false,
  });
  let { email, loading } = user;
  let handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setUser({ loading: true });
      await firebase.auth().sendPasswordResetEmail(email);
      let message = `please check your registered ${email} address and update password`;
      toast.success(message);
      history.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
    setUser({ loading: false });
  };
  return (
    <section id="authBlock">
      <article>
        <div>
          <h1>Welcome to Voot!</h1>
          <p>password reset for a more personalized experience.</p>
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

            <div className="form-group register_Block">
              <Link to="/login">go back to login</Link>
            </div>
            <div className="form-group">
              <button>
                {loading === true ? "loading..." : "Reset Password"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default withRouter(PasswordReset);
