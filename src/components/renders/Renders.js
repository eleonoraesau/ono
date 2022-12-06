import React from 'react'
import './RendersStyles.css'
import naulty1 from '/Users/eleonoraesau/Desktop/ono-website/src/assets/naulty1.JPEG'
import naulty2 from '/Users/eleonoraesau/Desktop/ono-website/src/assets/naulty2.JPEG'
import naultyfull from '/Users/eleonoraesau/Desktop/ono-website/src/assets/naulty.JPEG'

function Renders() {
  return (
    <div className='renders'>
      <div className="img-col">
        <img src={naulty1} alt="naulty render" className='pic1'/>
        <img src={naulty2} alt="naulty render" className='pic1'/>
      </div>
      <img src={naultyfull} alt="naulty render" className='pic2'/>
    </div>
  )
}

export default Renders
