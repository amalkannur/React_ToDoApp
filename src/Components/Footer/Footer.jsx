import React from 'react'
import  { useState } from 'react';
import "./Footer.scss"

function Footer(props) {


  const [todoState, setTodoState] = useState(false);
  const changeTodoState= ()=>{ 
     setTodoState(!todoState)
     console.log(todoState)
  }

  return (
    <div className='Footer'>
      <div className="addmorebtn" onClick={changeTodoState} >  +   </div>
       Footer
    </div>
  )
}

export default Footer
