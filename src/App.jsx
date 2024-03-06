import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ToDoCards from "./components/Cards";
import {
  Link,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DayOfWeek } from "./pages/DayOfWeek";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
