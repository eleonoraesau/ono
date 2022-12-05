import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {IoMdMenu} from 'react-icons/io'

import './NavbarStyles.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
         <h2>ONO</h2>
      </div>
      <ul className="nav-menu">
        <li>HOME</li>
        <li>&lt;/&gt;</li>
        <li>3D</li>
        <li>ABOUT</li>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon"/>
        <BsPerson className="icon"/>
      </div>
      <div className="hamburger">
        <IoMdMenu className="icon"/>
      </div>
      <div className="mobile-menu">
        <ul className="mobile-nav">
          <li>HOME</li>
          <li>&lt;/&gt;</li>
          <li>3D</li>
          <li>ABOUT</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">

          </div>
          <div className="social-icons">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
