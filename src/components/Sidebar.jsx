import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to="/weekday/monday">Monday</Link>
      </li>
      <li>
        <Link to="/weekday/tuesday">Tuesday</Link>
      </li>
      <li>
        <Link to="/weekday/wednesday">Wednesday</Link>
      </li>
      <li>
        <Link to="/weekday/thursday">Thursday</Link>
      </li>
      <li>
        <Link to="/weekday/friday">Friday</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
