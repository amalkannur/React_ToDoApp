import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useState } from 'react';
import "./Footer.scss"

function Footer(props) {
  
  

  return (
    <div className='Footer'>
      <div className="addmorebtn"  onClick={props.changeItemAdd}>  +   </div>
    
     <div className="d-flex justify-content-around align-items-center h-100"> 
       <div>  All</div>
       <div> Completed </div>
     </div>
      
    </div>
  )
}

export default Footer
