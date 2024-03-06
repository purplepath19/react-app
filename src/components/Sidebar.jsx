import React, { useState } from "react";
// import TodoList from "./ToDoList";

const Sidebar = () => {
const [clickedDay, setClickedDay] = useState(null);

    // Will take one argument (day) and will check if it is the same as clicked day 
const handleDayClick = (day) => {
    // setClickedDay function (provided by the useState hook) to update the state variable with the value in my if else
setClickedDay(day=== clickedDay ? null : day);
};


  return (


    <div className="sidebar">
      <p className="days-item"> Monday</p>
      <p className="days-item"> Tuesday</p>
      <p className="days-item"> Wednesday</p>
      <p className="days-item"> Thursday</p>
      <p className="days-item"> Friday</p>
    </div>
  );
};

export default Sidebar;
