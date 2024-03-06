import React from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/cal.png";

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={myImage} className="calendar-icon" alt="image-icon" />
      </Link>
      <h1 className="heading"> Daily Zen Tasks</h1>
      {/* <h5 className="header2"> To do list App </h5> */}
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
