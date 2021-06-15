import React from "react";
import "./headers.css";
import VootMenu from "./VootMenu";
const Navbar = () => {
  return (
    <div>
      <section id="vootHeaders">
        <article>
          <div className="vootLogo">
            <a href="/">
              <img src="Voot-Logo.svg" alt="logo" />
            </a>
          </div>
          <div className="vootMenu">
            <VootMenu />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Navbar;
