import  { useState } from "react";
// import { Link } from "react-router-dom"; 

function Navbar() {
    const [bool, setBool] = useState(false);

    const listener = () => {
        setBool((prevValue) => {
            return prevValue ? false : true 
        })
    }
  return (
    <nav>
      <ul>{}
        <li className={bool ? "list-class" : "list-do"}> Home</li>
        <li className="list-class"> About </li>
        <li className="list-class"> Etc </li>
      </ul>
      <button onClick={listener}> Button </button>
    </nav>
  );
}

export default Navbar;


