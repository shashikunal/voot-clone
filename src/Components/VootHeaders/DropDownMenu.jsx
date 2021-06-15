import React, { useEffect, useRef } from "react";

const DropDownMenu = props => {
  let toggleRef = useRef();
  console.log(props);
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
          <a href="/">LogIn</a>
        </li>
        <li>
          <a href="/">help and legal</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
