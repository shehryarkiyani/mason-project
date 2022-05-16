import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <img src='./images/footer-img.svg' className='footer-img'/>
      <div className='container'>
    <div className='upper-footer'>
      <div className='row'>
        <div className='col-lg-2'>
          <div className='footer-logo-container'>
            <img src='./images/footer-logo.svg'/>
            <div className='footer-icons-container'>
              <img src='./images/linked-in.svg'/>
              <img src='./images/twitter.svg'/>
              <img src='./images/facebook.svg'/>
              <img src='./images/insta.svg'/>
              <img src='./images/youtube.svg'/>
            </div>
          </div>
        </div>
        <div className='col-lg-1'></div>
        <div className=' col-lg-5' id="FooterLinks">
          <div className='row'>
            <div className='col-6'>
              <div className='footer-links-container'>
              <Link className='footer-link-top' to="/">Company</Link>
              <Link className='footer-link' to="/">How it works</Link>
              <Link className='footer-link' to="/">Benefits</Link>
              <Link className='footer-link'to="/">Plans</Link>
              <Link className='footer-link'to="/news">News</Link>
              </div>
            </div>
            <div className='col-6'>
            <div className='footer-links-container'>
            <Link className='footer-link-top'to="/">Resources</Link>
              <Link className='footer-link'to="/privacy">Terms & Conditions</Link>
              <Link className='footer-link'to="/faqs">FAQs</Link>
              <Link className='footer-link'to="/contact">Contact Us</Link>
              <Link className='footer-link'to="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='footer-right-para'>Subscribe to our Newsletter</div>
          <div className='hero-input-container' >
                <input placeholder='Enter your Email' id="footer-input"/>
               <div className='hero-input-btn'>
               <button class="home-contact-btn" type="submit">Get Early Access &nbsp; <img src='./images/arrow.svg'/></button>
               </div>
              </div>
              <div className='hero-btn-container' >
                <div className='myplaystore-btn'>
                  <div style={{marginRight:"5px"}}><img src='./images/playstore.svg'/></div>
                  <div className='sub-f-txt'>
                    <p className='get-text'>Get it on</p>
                    <p className='play-text'>Playstore</p>
                  </div>
                
                </div>
                <div className='myplaystore-btn'>
                  <div style={{marginRight:"5px"}}><img src='./images/apple.svg'/></div>
                  <div className='sub-f-txt'>
                    <p className='get-text'>Available on the</p>
                    <p className='play-text'>Appstore</p>
                  </div>
                
                </div>
               
              </div>
        </div>
      </div>
    </div>
    <div className='lower-footer'>
    Copyright @ RaundTable 2022. All Rights Reserved.
    </div>
      </div>
    </div>
  )
}

export default Footer