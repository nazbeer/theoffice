import React from 'react';
import './Footer.css';
import facebook from './icons/facebook.svg';
import twitter from './icons/twitter.svg';
import youtube from './icons/youtube.svg';
import instagram from './icons/instagram.svg';
const Footer = () => {
  return (
    <footer className='mt-4 mb-4 footer-container'>
      <div className='col-md-12  justify-content-between align-items-center mb-4 customdisplay'>
        <div className='col-md-3 d-grid'>
          <span className='fs-custom mb-4'>Chat with us</span>
          <span className='fs-text mb-4'>123.456.789</span>
          <span className='fs-text mb-4'>info@workspaces.com</span>
        </div>
        <div className='col-md-3 d-grid'>
          <span className='fs-custom mb-4'>Find Us</span>
          <span className='fs-text mb-4'>123.456.789</span>
          <span className='fs-text mb-4'>info@workspaces.com</span>
        </div>
        <div className='col-md-3 d-grid'>
          <span className='fs-custom mb-4'>Follow Us</span>
          <div className='d-inline-flex gap-2 desktophider'>
      <img src={instagram} alt="instagram"/>
      <img src={facebook} alt="Facebook"/>
      <img src={twitter} alt="twitter"/>
      <img src={youtube} alt="twitter"/>
      

    </div>
        </div>
        <div className='col-md-3   mobilehider'>
          <span className='fs-custom mb-4'>&nbsp;</span>
          <span className='fs-text mb-4'>&nbsp;</span>
          <span className='fs-text mb-4'>&nbsp;</span>
        </div>

      </div>
    <div className='col-md-12 w-80 custominline'>
      <div className='col-md-4 mobilehider'>
      <p className='mb-0'>&copy; {new Date().getFullYear()} Office Square. All rights reserved.</p>
      </div>
      <div className='col-md-4 mobilehider'>
    <div className='d-inline-flex gap-2'>
      <img src={instagram} alt="instagram"/>
      <img src={facebook} alt="Facebook"/>
      <img src={twitter} alt="twitter"/>
      <img src={youtube} alt="twitter"/>
      

    </div>
      </div>
      <div className='col-md-4'>
      <div className='custominline gap-2'>
      
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p className=''>Website by <span className='font-weight-800'>ARENA</span></p>
        </div>
      </div>
      <div className='col-md-4 desktophider'>
      <p className='mb-0'>&copy; {new Date().getFullYear()} Office Square. All rights reserved.</p>
      </div>
    </div>
      
    </footer>
  );
}

export default Footer;
