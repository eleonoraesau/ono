import React from 'react'
import './PhotosStyles.css'

import AYFW from '/Users/eleonoraesau/Desktop/ono-website/src/assets/Web3/random/AYFW.JPEG'
import AYFW1 from '/Users/eleonoraesau/Desktop/ono-website/src/assets/Web3/random/AYFW1.JPEG'
import CINEMA from '/Users/eleonoraesau/Desktop/ono-website/src/assets/Web3/random/CINEMA.JPEG'



function Photos() {
  return (
    <div name="photos" className='photos'>
      <div className="container">
        <div className="pic-container">
          <div className="span-3">
            <img src={ AYFW} alt=""/>
            <img src={ AYFW1} alt="" className='col-2'/>
            <img src={ CINEMA }  alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos
