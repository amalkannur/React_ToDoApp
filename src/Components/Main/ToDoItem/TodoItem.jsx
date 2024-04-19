import React from 'react'
import "./TodoItem.scss"

function TodoItem(props) {
  return (
    <div className='TodoItem'>
       <div className="d-flex align-items-center justify-content-center"> 
         <div className='w-50'> 
            <h5> {props.title}</h5>
            <p> {props.text} </p>
         </div>
         <div className="w-50"> 
           <div className="d-flex"> 
             icons
           </div>
         </div>
       </div>
    </div>
  )
}

export default TodoItem
