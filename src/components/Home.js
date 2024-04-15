import React from 'react'
import Header from "./Header"
import Services from "./Services"
import Contact from "./Contact"
import About from './About'
import Whatsapp from './Whatsapp'
import Footer from './Footer'
import Hero_Slider from './Hero_Slider'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero_Slider/>
        <About/>
        <Services/>
        <Whatsapp/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default Home