import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
const DropDownMenu = props => {
  let toggleRef = useRef();
  console.log(props);

  useEffect(() => {
    if (props.toggle === true) {
      toggleRef.current.style.display = "block";
    } else {
      toggleRef.current.style.display = "none";
      document.body.onclick = function () {
        toggleRef.current.style.display = "none";
      };
    }
  }, [props.toggle]);

  let logout = () => {
    firebase
      .auth()
      .signOut()
      .then(_ => {
        toast.success("successfully logged out");
        props.history.push("/login");
      })
      .catch(err => {
        toast.err(err.message);
      });
  };

  let AnonymousUsers = () => {
    return (
      <Fragment>
        <li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
        </li>
      </Fragment>
    );
  };
  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <li>
            <a href="#" onClick={logout}>
              logout
            </a>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
        </li>
      </Fragment>
    );
  };

  return (
    <div className="dropdown" ref={toggleRef}>
      <div className="arrow-up"></div>
      <ul>
        {firebase.auth().currentUser ? (
          <AuthenticatedUser />
        ) : (
          <AnonymousUsers />
        )}
        <li>
          <a href="/">help and legal</a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(DropDownMenu);
