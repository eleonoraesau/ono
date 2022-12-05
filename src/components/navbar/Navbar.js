import React, {useState} from 'react'
import {IoMdMenu} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'
import {FaLinkedin, FaInstagram, } from 'react-icons/fa'
import {ImGithub} from 'react-icons/im'

import './NavbarStyles.css'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className="logo">
         <h2>ELEONORA ESAU</h2>
      </div>
      <ul className="nav-menu">
        <li>HOME</li>
        <li>&lt;/&gt;</li>
        <li>3D</li>
        <li>ABOUT</li>
      </ul>
      <div className="hamburger" onClick={handleNav}>
        {!nav? (<IoMdMenu className="icon"/>) : (<AiOutlineClose className="icon"/>)}
      </div>
      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
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
            <FaInstagram className="icon"/>
            <FaLinkedin className="icon"/>
            <ImGithub className="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
