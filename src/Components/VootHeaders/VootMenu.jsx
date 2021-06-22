import React, { Fragment, useState } from "react";
import DropDownMenu from "./DropDownMenu";

const VootMenu = props => {
  let [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <nav id="vootMenuBlock">
        <ul className="leftMenu">
          <li>
            <a href="/" className="active">
              My Voot
            </a>
          </li>
          <li>
            <a href="/">Premium</a>
          </li>
          <li>
            <a href="/">Shows</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">Channels</a>
          </li>
          <li>
            <a href="/">news</a>
          </li>
        </ul>

        <ul className="authMenu">
          <li>
            <a href="/">
              <i className="fal fa-search"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <i className="far fa-user-circle"></i>
            </a>
          </li>
        </ul>
        <DropDownMenu toggle={toggle} users={props.users} />
      </nav>
    </Fragment>
  );
};

export default VootMenu;
