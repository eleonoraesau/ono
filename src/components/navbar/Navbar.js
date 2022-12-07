import React, {useState} from 'react'
import {IoMdMenu} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'
import {FaLinkedin, FaInstagram, } from 'react-icons/fa'
import {ImGithub} from 'react-icons/im'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="home" className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className="logo">
         <h2>ONO</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={700}><li>HOME</li></Link>
        <Link to="3D" smooth={true} duration={700}><li>3D</li></Link>
        <Link to="photos" smooth={true} duration={700}><li>&lt;/&gt;</li></Link>
        <Link to="about" smooth={true} duration={700}><li>ABOUT</li></Link>
      </ul>
      <div className="hamburger" onClick={handleNav}>
        {!nav? (<IoMdMenu className="icon"/>) : (<AiOutlineClose className="icon"/>)}
      </div>
      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={700}><li>HOME</li></Link>
          <Link to="3D" smooth={true} duration={700}><li>3D</li></Link>
          <Link to="photos" smooth={true} duration={700}><li>&lt;/&gt;</li></Link>
          <Link to="about" smooth={true} duration={700}><li>ABOUT</li></Link>
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
