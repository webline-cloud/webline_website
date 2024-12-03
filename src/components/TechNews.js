import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "./Home.css"

const TechNews = () => {
  return (
    <div>
        <Header/>
        <div className='h-[200vh] example'>
            <iframe className='w-full h-full example' src="https://write.navneet-kumar.in/" frameborder="0"></iframe>
        </div>
        <Footer />
    </div>
  )
}

export default TechNews
