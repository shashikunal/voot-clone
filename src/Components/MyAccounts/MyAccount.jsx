import React from "react";
import "./MyAccount.css";
import { Link, Route, Switch } from "react-router-dom";
import UploadPhoto from "./UploadPhoto";
const MyAccount = props => {
  let { displayName, photoURL, email } = props.users;
  return (
    <section id="MyAccountBlock">
      <article>
        <aside>
          <header>
            <figure>
              <Link to="/update-photo">
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
          </main>
          <footer></footer>
        </aside>
        <main>
          <Switch>
            <Route path="update-photo">
              <UploadPhoto />
            </Route>
          </Switch>
        </main>
      </article>
    </section>
  );
};

export default MyAccount;
