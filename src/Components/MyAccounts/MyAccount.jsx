import React from "react";
import "./MyAccount.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import firebase from "../../firebase";
import UploadPhoto from "./UploadPhoto";
import { toast } from "react-toastify";
const MyAccount = props => {
  let { path, url } = useRouteMatch();
  let { displayName, photoURL, email } = props.users;

  let onRemoveUser = async () => {
    let user = firebase.auth().currentUser;
    await user.delete();
    toast.success("successfully account deleted");
  };

  return (
    <section id="MyAccountBlock">
      <article>
        <aside>
          <header>
            <figure>
              <Link to={`${url}/update-photo`}>
                <span>
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </span>
                <img src={photoURL} alt={displayName} />
              </Link>
            </figure>
            <h3>{displayName}</h3>
          </header>
          <main>
            <h4>{email}</h4>
            <li>
              <Link to="/update-password">update Password</Link>
            </li>
          </main>
          <footer>
            <li>
              <button className="btn" onClick={onRemoveUser}>
                Remove User
              </button>
            </li>
          </footer>
        </aside>
        <main>
          <Switch>
            <Route
              path={`${path}/:id`}
              render={() => <UploadPhoto users={props.users} />}
            />
          </Switch>
        </main>
      </article>
    </section>
  );
};

export default MyAccount;
