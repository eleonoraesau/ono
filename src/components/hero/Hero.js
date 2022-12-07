import React from 'react'
import './HeroStyles.css'
import Video from '/Users/eleonoraesau/Desktop/ono-website/src/assets/MARBLE_EDGES.mp4'

function Hero() {
  return (
    <div name="home" className='hero'>
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4"/>
      </video>
      <div className="overlay">
        <div className="content">
          <h1>ELEONORA ESAU</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
