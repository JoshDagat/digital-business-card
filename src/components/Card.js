import React from 'react'
import Info from './Info.js'
import About from './About.js'
import Interests from './Interests.js'
import Footer from './Footer.js'

export default function Card() {
    return (
        <div className='card'>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}