import React, { useState } from 'react';
import './Group.css';

function Group( ) {
  const [open, setOpen]= useState(false);


  const handleClick = ()=> {
    setOpen(!open);

  }
 

  let data= JSON.parse(localStorage.getItem("groups", 'colors')); 
  console.log(data);
  
  return (
    
    <div className='sidebar' >
        <h1>Pocket Notes</h1>
        <div className='groupList'>
        
            <div className='groupList_item'>
              {data.length>0 && (
                data.map((item,i)=> (
                  <div className='item' onClick={handleClick} key={ i}> <h1 style={{background: item.color}}>
                  {item.groupName.substring(0, 2).toUpperCase()}
                </h1><span>{item.groupName}</span>
                </div>
                ))
              )}
            </div>

            {open && (
               <div className='main'>
               <div className='title'><h2>Title</h2>
      </div>
               <div className='container'></div>
               <div className='text-area'>
               <textarea className='note' placeholder='Enter your text here...'></textarea>
               <button>
                 <img src='./images/send.png' alt="send icon"/>
               </button>
               </div>
               
           </div>
            )}

        
          
        </div>
    </div>
  );
}

export default Group