import { useState } from "react";

// Requires a key

const TodoList = ({}) => {
  const [tasks, setTasks] = useState([
    { date: "Monday", text: "", completed: false }, //Setting the initial value of tasks with changeable text for user to add
    { date: "Tuesday", text: "", completed: false }, //Setting the initial value of tasks with changeable text for user to add
    { date: "Wednesday", text: "", completed: false }, //Setting the initial value of tasks with changeable text for user to add
    { date: "Thursday", text: "", completed: false }, //Setting the initial value of tasks with changeable text for user to add
    { date: "Friday", text: "", completed: false }, //Setting the initial value of tasks with changeable text for user to add
  ]);

  const [value, setValue] = useState("");

  // Creates a new array of filtered tasks. Includes all the tasks except the ones we want to delete
  const deleteTask = (taskToDelete) => {
    const filteredTasks = tasks.filter(
      (task) => task.text !== taskToDelete.text
    );
    setTasks(filteredTasks);
  };

  const addTask = () => {
    const newTask = {
      text: value,
    };
    setTasks([...tasks, newTask]);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-container">
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.date} className="list-container">
              {/* Component Content goes here below */}
              <div className="card">
                <h1> {task.date} </h1>
                {/* <p>  {task.text} </p> */}
                <input
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Add a new task"
                  value={value}
                />

                {/* Text that will render after the click event */}
                <div className="task-cards"> {task.text} </div>

                {/* Add & Delete button */}
                <div className="buttons-container">
                  <button className="add-button" onClick={addTask}>
                    {" "}
                    Add{" "}
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(task)}
                  >
                    {" "}
                    ✔{" "}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
