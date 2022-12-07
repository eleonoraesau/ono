import React from 'react'
import './RendersStyles.css'

import naulty1 from '/Users/eleonoraesau/Desktop/ono-website/src/assets/renderberlnder3.png'
import naultyfull from '/Users/eleonoraesau/Desktop/ono-website/src/assets/uringcloseup.png'
import pug1 from '/Users/eleonoraesau/Desktop/ono-website/src/assets/pug_close.png'

function Renders() {
  return (
    <div name="3D" className='renders'>
        <div className="container">
          <div className="naulty">
            <img src={naulty1} alt="naulty render" className='span-2'/>
          </div>
          <div className="img-container">
            <img src={pug1} alt="" className='pugs'/>
            <img src={naultyfull} alt="naulty render" className='ring'/>
          </div>
      </div>
    </div>
  )
}

export default Renders;
