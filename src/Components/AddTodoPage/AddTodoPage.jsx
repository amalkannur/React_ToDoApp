import React from 'react'
import"./addtodo.scss"
import taskImage from "../../Assets/Images/taskimage.png" 
import Header from '../Header/Header'
import MainBody from '../Main/MainBody'

function AddTodoPage() {
  return (
    <div className='addtodopage'>
      <div className="header2">  
         Add New Task
      </div>

     <div className="container"> 
      <div className="row"> 
        <div className="col-12 col-md-6 "> 
          <div className="input-div"> 
            <input className='input-item mt-3' type="text" id="Title"  placeholder='Title'/>    
            <textarea className='input-item input-item2 mt-3' type="text" id="Detail"  placeholder='Details'/>  
            <a className='addtaskbtn' href=""> Add Task</a>          
            <a className='viewtaskbtn' href=""> View Tasks</a>       
          </div>
        </div>
        <div className="col-12 col-md-6 "> 
          <img className='taskimage' src={taskImage} alt="" />
        </div>
        </div>
     </div>




     
      

    </div>
  )
}

export default AddTodoPage
