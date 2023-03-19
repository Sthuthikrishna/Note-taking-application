import { useState } from 'react';
import './Notes.css';
import React from 'react';

function Notes() {

  const [text, setText] = useState("");
  const [allText, setAllText]= useState([]);


  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting the text");
    const date = new Date();
   {new Date(text.date).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
   })
   let newNote= { notes: text}
    let allNotes= [...allText, newNote]
    setAllText(allNotes);
    setText('');
    let notesLoc= JSON.parse(localStorage.getItem("allText"))

    let tempNotes= [...notesLoc, newNote]
    localStorage.setItem('allText', JSON.stringify(tempNotes));
  
  }

  return (
    <div className='main'>
        <div className='title'></div>
        <div className='container'></div>
        <div className='text-area'>
        <textarea className='note' placeholder='Enter your text here...'  value={text}
        onChange={handleChange}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}></textarea>
        <button onClick={handleSubmit} >
          <img src='./images/send.png' alt="send icon"/>
        </button>
        </div>
        
    </div>
  )
}
}
export default Notes