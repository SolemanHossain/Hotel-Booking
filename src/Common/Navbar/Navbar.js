import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img height='auto' width='171' src='images/hahn.png' alt='hahn' />
          </div>

          <div className='contact flex_space'>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='icon-phone-1'></i>
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+011-1234567</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class="icon-mail"></i>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>info@exampal.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>

              <Link to='/' onClick={closeMobileMenu}>
                <span class="icon icon-home"></span>
                <span class="customHeading_2Size">Home</span>
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                <span class="customHeading_2Size">About Us</span>
              </Link>
            </li>
            <li>
              <Link to='/gallery' onClick={closeMobileMenu}>
                <span class="customHeading_2Size">Gallery</span>
              </Link>
            </li>
            <li>
              <Link to='/destinations' onClick={closeMobileMenu}>
                <span class="customHeading_2Size">Rooms</span>
              </Link>
            </li>
            <li>
              <Link to='/blog' onClick={closeMobileMenu}>
                <span class="customHeading_2Size">Activity</span>
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                <span class="customHeading_2Size">Contact</span>
              </Link>
            </li>
          </ul>

          <div className='login-area flex'>
            <li>
              <Link to='/contact'>
                <button className='custom-round-buttons custom-button'><span class="customHeading_2Size">Request a quote</span></button>
              </Link>
            </li>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar
