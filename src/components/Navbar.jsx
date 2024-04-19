import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="links" to="/">
          <img className="logo-img" alt="logo" src="./image/logo.png" />
          <span className="main-text">Pic Gloria</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
