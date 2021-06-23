import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";

const Otp = ({ history }) => {
  let [user, setUser] = useState({
    phone: "",
    loading: false,
  });
  let { phone, loading } = user;
  let handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setUser({ loading: true });
      const captchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      let confirmResult = await firebase
        .auth()
        .signInWithPhoneNumber(phone, captchaVerifier);
      let verificationCode = window.prompt("Please enter otp...");
      let result = await confirmResult.confirm(verificationCode);
      toast.success("successfully logged in");
      console.log(result.user);
      history.push("/");
      
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
          <p>OTP for a more personalized experience.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">
                Enter valid phone number prefix with 91
              </label>
            </div>
            <div id="recaptcha-container"></div>
            <div className="form-group register_Block">
              <Link to="/login">go back to login</Link>
            </div>
            <div className="form-group">
              <button>{loading === true ? "loading..." : "Send Otp"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default withRouter(Otp);
