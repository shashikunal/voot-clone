import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const DropDownMenu = props => {
  let toggleRef = useRef();

  useEffect(() => {
    if (props.toggle === true) {
      toggleRef.current.style.display = "block";
    } else {
      toggleRef.current.style.display = "none";
    }
  }, [props.toggle]);
  return (
    <div className="dropdown" ref={toggleRef}>
      <div className="arrow-up"></div>
      <ul>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <a href="/">help and legal</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
