import React from "react";
import { NavLink } from "react-router-dom";
import myImage from "../assets/cal.png";

function Header() {

  
  return (


    <div className="header-container">
      <img src={myImage} className="calendar-icon" alt="image-icon" />
      <h1>   </h1>

      <p className="navbar-tag"> Home </p>
      <p className="navbar-tag"> About </p>

      <div> 
        {/* <NavLink to="/"> Home </NavLink>
        <NavLink to="/">  </NavLink> */}
    
      </div>
      
    </div>


  );
}

export default Header;
