import React from 'react'
import "./homepage.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainBody from '../Main/MainBody'

function HomePage() {
  return (
    <div className='homepage'>
      <Header />
      <MainBody />
      <Footer />
    </div>
  )
}

export default HomePage
