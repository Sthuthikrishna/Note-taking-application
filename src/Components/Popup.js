import React, {useState, useRef} from 'react';

import "./Popup.css";


function Popup(props) {
    const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

    const [popup, setPopup] = useState(false);

    const [groups, setGroups]= useState([]);

    const [formValue, setFormValue]= useState('');
    const [bg, setBg]= useState();
    

    const handleChange = (e)=>{
        setFormValue(e.target.value)
    }

    const togglePopup = () => {
        setPopup(!popup)
    }
    const setBgColor = (color)=> {
        document.documentElement.style.setProperty('background', color)
       }
     
       const colorRef= useRef(null);

   const setcolor = (event) => {
    const currentColor = event.target.style.getPropertyValue('background');
    setBg(currentColor)
    if(colorRef.current){
        colorRef.current.style.border = "none";
      }
      colorRef.current = event.target;
      colorRef.current.style.border = "1px solid #000";

      localStorage.setItem("colors", JSON.stringify(currentColor));
   }


    const handleAddGroupSubmit= (e) => {
        e.preventDefault();
        let newGroup= { groupName: formValue}
        let allGroup= [...groups, newGroup]
        setGroups(allGroup);
        setFormValue('');
        let groupsloc= JSON.parse(localStorage.getItem("groups"))

       let tempGroups= [...groupsloc, newGroup]
        localStorage.setItem('groups', JSON.stringify(tempGroups));
        togglePopup()
        

        
    }
   

  return (
    <>
     <button className='add' onClick={togglePopup}  ><i class="fa fa-plus"></i>Create Notes</button>

     {popup && (
         <div className='popup'>
         <div className='overlay'></div>
             <div className='content'>
                 <h2>Create New Notes</h2>
                 <form >
                 <div className='info'>
                     <span className='name'>Group Name</span>
                     <input type="text" className='grpname' placeholder='Enter your group name....' value={formValue} onChange={handleChange}/>
                     <div className='color'>
                         <span>Choose colour</span>
                         <ul className='color-list'>
                            {
                                colors.map((color,index) => (
                                    <li key={index} className = 'clr' style={{background: color}} onClick= {setcolor} />
                                ))
                            }
                         </ul>
                     </div>
                 </div>
                 <button type='submit' className='create' onClick={handleAddGroupSubmit} >Create</button>
                 </form>
             </div>
      </div>

     )}

    
    </>
  )
}

export default Popup