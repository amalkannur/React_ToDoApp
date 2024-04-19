import React from 'react'
import "./MainBody.scss"
import TodoItem from './ToDoItem/TodoItem'

const list1 = [
    {
      heading: 'Header -1 ',
      discription: 'Robin Is here',
    },
    {
      heading: 'Header -2 ',
      discription: 'Akhil Is here',
    },
    {
      heading: 'Header -3 ',
      discription: 'Joy Is here',
    },
    {
      heading: 'Header -4 ',
      discription: 'Krish Is here',
    },
    {
      heading: 'Header -5 ',
      discription: 'Roy Is here',
    },
    {
      heading: 'Header -6 ',
      discription: 'Dev Is here',
    },
    {
      heading: 'Header -7 ',
      discription: 'Abi Is here',
    },
  ];



function MainBody() {
  return (
    <div className='mainbody'>
        <div className="row"> 
            {list1.map((data) => (
                 <div className="col-md-4"> 
                <TodoItem title={data.heading} text={data.discription}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MainBody
