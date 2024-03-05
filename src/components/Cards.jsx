import { useState } from "react";


// This is the functional component name that should be used in the export code 
const ToDoCards = () => {
  const [cards, setCards] = useState([

{day: "Monday", theme: " " , items: " "}, //Initial value of cards
{day: "Tuesday", theme: " " , items: " "}, //Initial value of cards
{day: "Wednesday", theme: " " , items: " "}, //Initial value of cards
{day: "Thursday", theme: " " , items: " "}, //Initial value of cards
{day: "Friday ", theme: " " , items: " "}, //Initial value of cards
{day: "Saturday ", theme: " " , items: " "}, //Initial value of cards
{day: "Sunday ", theme: " " , items: " "}, //Initial value of cards

  ]);


    //   Note: changes in user inputs need to be reflected on the state. onChange
    //      event handle will track changes to input

    //   Handle input will be onChange
    //      by default, useState() returns two variables 

function handleChange(e, day){
const updatedCards = cards.map((card) => {

    card.day === day ? { ...card, items: e.target.value} : card 
    setCards(updatedCards); 

}


)}


// JSX 

return (

  
<div> 
 {cards.map((card) => (

//Setting the key to the only unique property in the array 
    <div key={card.day}> 

{/* Component Content goes here below */}
<h1> {card.day} </h1>
<p> To do: {card.items} </p>

</div>


))}

{/* My Form  */}
<form className="weekday-form"> 
<label htmlFor={`add_text_${card.day}`}>
{card.day} To Do:{" "}
</label>

<input type="text" id="add_text" placeholder="Add text here..." value={card.items} onChange={e => handleChange(e.target.value)}/> 

</form>
    </div>

)


 };

export default ToDoCards;


