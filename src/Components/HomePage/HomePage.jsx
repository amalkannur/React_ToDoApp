import React, { useState } from 'react'
import "./homepage.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainBody from '../Main/MainBody'

function HomePage() {
  const val=12;
  const [itemadd, setItemadd] = useState(false); 
  const changeItemAdd = () => { 
    setItemadd(!itemadd); 
    console.log(itemadd)
    document.getElementById("homepage").style.display = "none";  
    document.getElementById("addtodopage").style.display = "block"; 
  }

  return (
    <div className='homepage' id='homepage'>
      <Header />
      <MainBody />
      <Footer itemadd={itemadd} changeItemAdd={changeItemAdd}  />
    </div>
  )
}

export default HomePage
