import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export const DayOfWeek = ({ weekData }) => {
  const { day } = useParams();
  const [tasks, setTasks] = useState(weekData[day]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  const deleteItemHandler = (id) => {
    setTasks(() => tasks.filter((_, index) => index !== id));
  };

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescHandler = (event) => {
    setDescription(event.target.value);
  };
  const onChangeNotesHandler = (event) => {
    setNotes(event.target.value);
  };
  const addTask = () => {
    const newTask = {
      date: Date.now(),
      title: title,
      description: description,
      notes: notes,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setNotes("");
  };

  return (
    <>
      <Header />
      <Sidebar />
      <input
        onChange={onChangeTitleHandler}
        type="text"
        placeholder="Add title..."
        value={title}
      />
      <input
        onChange={onChangeDescHandler}
        type="text"
        placeholder="Add description"
        value={description}
      />

      <input
        onChange={onChangeNotesHandler}
        type="text"
        placeholder="Add Note"
        value={notes}
      />

      <div className="buttons-container">
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="form-container">
        <ul>
          {tasks.map((task, i) => {
            task.id = i;
            task.onDelete = deleteItemHandler;

            return <ListItemCard key={i} {...task} />;
          })}
        </ul>
      </div>
    </>
  );
};

const ListItemCard = ({ description, title, date, notes, id, onDelete }) => {
  console.log(description, title, date, notes);
  const [isOpen, setIsOpen] = useState(false);
  const expandItemClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className="list-container">
      {/* Component Content goes here below */}
      <div className="card">
        <h3>{title}</h3>
        {isOpen && (
          <>
            <p>
              description:
              <br />
              {description}
            </p>
            <p>
              notes:
              <br />
              {notes}
            </p>
          </>
        )}
        <button onClick={expandItemClickHandler}>
          {isOpen ? "less" : "more"}
        </button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};
