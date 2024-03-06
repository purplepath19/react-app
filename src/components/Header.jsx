import React from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/cal.png";

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={myImage} className="calendar-icon" alt="image-icon" />
      </Link>
      <h1>Todo-ist</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
