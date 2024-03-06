import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="sidebar-container">
      <li className="sidebar-item">
        <Link to="/weekday/monday">Monday</Link>
      </li>
      
      <li className="sidebar-item">
        <Link to="/weekday/tuesday">Tuesday</Link>
      </li>
   
      <li className="sidebar-item">
        <Link to="/weekday/wednesday">Wednesday</Link>
      </li>
      
      <li className="sidebar-item">
        <Link to="/weekday/thursday">Thursday</Link>
      </li>
 
      <li className="sidebar-item">
        <Link to="/weekday/friday">Friday</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
