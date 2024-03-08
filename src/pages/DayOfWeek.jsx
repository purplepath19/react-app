import { useParams } from "react-router-dom";
import { useEffect } from "react";
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
  const onSave = ({newDescription, newTitle, newNotes, id}) => {
    // console.log("onSave", {newDescription, newTitle, newNotes, id})
    // console.log("later",{
    //   ...tasks[id],
    //   description: newDescription,
    //   title: newTitle,
    //   notes: newNotes,
    // })
    setTasks((prevTasks) => {
      prevTasks[id] = {
        ...prevTasks[id],
        description: newDescription,
        title: newTitle,
        notes: newNotes,
      };

      return [...prevTasks]
    })
  }

  useEffect(() => {
    if (!weekData[day]) {
      setTasks(null);
    }
    setTasks(weekData[day]);
  }, [day]);
// console.log("one more run", tasks)
  return (
    <>
      <input
        className="input-class"
        onChange={onChangeTitleHandler}
        type="text"
        placeholder="Add title..."
        value={title}
      />
      <input
        className="input-class"
        onChange={onChangeDescHandler}
        type="text"
        placeholder="Add description"
        value={description}
      />

      <input
        className="input-class"
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
          {tasks ? (
            tasks.map((task, i) => {
              task.id = i;
              task.onDelete = deleteItemHandler;
              task.onSave = onSave;

              return <ListItemCard key={i} {...task} />;
            })
          ) : (
            <div>
              <h1>No day of the week like that :/</h1>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

const ListItemCard = ({ description, title, date, notes, id, onDelete, onSave }) => {
  // console.log("props", title);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newNotes, setNewNotes] = useState(notes);

  const expandItemClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const submitHandler = () => {
    onSave({newDescription, newTitle, newNotes, id});
    setIsEdit(false);
  }

  const cancelHandler = () => {
    setNewTitle(title);
    setNewDescription(description);
    setNewNotes(notes);
    setIsEdit(false);
  }

  const onChangeTitle = (event) => {
    setNewTitle(event.target.value)
  }

  // Addition SF
  const onChangeDescription = (event) => {
    setNewDescription(event.target.value)
  }

  const onChangeNotes = (event) => {
    setNewNotes(event.target.value)
  }

  /**
   * @todo create onChangeHandlers for onChangeDescription and onChangeNotes
   * see above in onChangeTitle
   * 
   * Apply these handlers to new input elements that handle description and notes changes
   */

  useEffect(() => {
    // console.log('useEffect', title)
    setNewTitle(title);
    setNewDescription(description);
    setNewNotes(notes);
  }, [description, title, notes])
   
  return (
    <li className="list-container">
      {/* Component Content goes here below */}
      <div className="card">


      <label className="label" htmlFor="titleInput"> Title </label>
        {!isEdit ? 
          <h3>{title}</h3> : 
          <input className="input-class" type="text" value={newTitle} onChange={onChangeTitle} />  
        } 

        
      <label className="label" htmlFor="titleInput"> Description </label>
         {!isEdit ? 
          <h3>{description}</h3> : 
        
          <input className="input-class" type="text" value={newDescription} onChange={onChangeDescription} />  
        } 

        
      <label className ="label" htmlFor="titleInput"> Notes </label>
         {!isEdit ? 
          <h3>{notes}</h3> : 
          <input className="input-class" type="text" value={newNotes} onChange={onChangeNotes} />  
        } 

        {isOpen && (
          <>
          {
            /**
             * @todo use ternary operator like above in the title input for
             * description and notes below. remember to add the onchange funcs and values
             */
          }
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

        <div className="button-container">
          <button className="button-style" onClick={expandItemClickHandler}>
            {isOpen ? "less" : "more"}
          </button>
           {/**
              @todo create toggleEdit listener function and add this onclick code to it
          */}
          { !isEdit ? (
           
          <button className="button-style" onClick={() => (setIsEdit(!isEdit))}>
            Edit
          </button>
          ) : (
            <>
            <button className="button-style" onClick={submitHandler}>
            Save
          </button>
          <button className="button-style" onClick={cancelHandler}>
          Cancel
        </button>
        </>
          )
} 
          <button className="button-style" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};
