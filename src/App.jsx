import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header"; 
import Sidebar from "./components/Sidebar";
import ToDoCards from "./components/Cards";




function App() {


  return (
    <>

      <Header /> 
      <TodoList />
      <Sidebar />
      {/* <ToDoCards />  */}

    </>


  );
}

export default App;
