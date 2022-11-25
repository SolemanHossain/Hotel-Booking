import React from "react"
//import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Footer.css"
import { Link } from "react-router-dom"
import { Row } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <span class="Text customHeadingSize custom_hover-underline-animation">Follow Us</span>
            <div className='icon custom-Icons'>
              <span class="padding"><a href="#"><i className='icon-twitter customIcontheme'></i></a></span>
              <span class="padding"><a href="#"><i className='icon-facebook customIcontheme'></i></a></span>
              <span class="padding"><a href="#"><i className='icon-instagram customIcontheme'></i></a></span>
              <span class="padding"><a href="#"><i className='icon-youtube customIcontheme'></i></a></span>
            </div>
          </div>

          <div className='box'>
            <span class="Text customHeadingSize custom_hover-underline-animation">Quick Links</span>
              <ul class="icon list-unstyled">
                <li>
                  <Link to='/'><span class="Text custom_quick_links_hover">Home</span></Link>
                </li>
                <li>
                  <Link to='/gallery'><span class="Text custom_quick_links_hover">Gallery</span></Link>
                </li>
                <li>
                  <Link to='/blog'><span class="Text custom_quick_links_hover">Blog</span></Link>
                </li>
                <li>
                  <Link to='/destinations'><span class="Text custom_quick_links_hover">Destinations</span></Link>
                </li>
              </ul>
          </div>

          <div className='box'>
            <span class="text customHeadingSize custom_hover-underline-animation">Contact Us</span>
            <div class="icon box block-23 mb-3 flex_space">
              <ul>
                <li><a href="#"><span class="icon icon-location"></span><span class="text custom_quick_links_hover">Marcusallee 38, 28359 Bremen</span></a></li>
                <li><a href="#"><span class="icon icon-call"></span><span class="text custom_quick_links_hover">+2-392-3929210</span></a></li>
                <li><a href="#"><span class="icon icon-direction"></span><span class="text custom_quick_links_hover">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
          <div className='box'>
            <Row>
              <Col className = "flex_space">
              <span class="text customHeadingSize custom_hover-underline-animation">Ratings:</span>
                <div class="star-background star-wrapper">
                  <a href="#" class="fas fa-star c-s1"></a>
                  <a href="#" class="fas fa-star c-s2"></a>
                  <a href="#" class="fas fa-star c-s3"></a>
                  <a href="#" class="fas fa-star c-s4"></a>
                  <a href="#" class="fas fa-star c-s5"></a>
                </div>
              </Col>
            </Row>
            <div>
            <Row>
            <div class="icon box block-23 mb-3 flex_space">
              <ul>
                <li><a href="#"><span class="text custom_quick_links_hover">Terms & Conditions</span></a></li>
                <li><a href="#"><span class="text custom_quick_links_hover">Privacy</span></a></li>
                <li><a href="#"><span class="text custom_quick_links_hover">Cookies Info</span></a></li>
              </ul>
            </div>
              </Row>
            </div>
              
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
