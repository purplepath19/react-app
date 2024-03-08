import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ToDoCards from "./components/Cards";
import NotFound from "./components/NotFound"
import weekData from "./assets/weekData.json";
import { Routes, Route } from "react-router-dom";
import { DayOfWeek } from "./pages/DayOfWeek";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
    <Routes>
      {/* <Route path="/"/> */}
      <Route path="/about" element={<About />}/>
      <Route path="/weekday/:day" element={<DayOfWeek weekData={weekData} />}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes></>
  );
}

export default App;
