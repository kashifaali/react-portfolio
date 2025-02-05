import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css'; // Import your CSS for styling
import logo from '../assets/logo.png';


export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        
        <div className="navbar-logo"><a href="#"><span className='L'><img src={logo} alt="" /></span>
        <span className='logo-name'>ASHIF</span></a>
        </div>
       

        {/* Social Media Icons Section */}
        {/* <div className="navbar-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div> */}
      </nav>
    </>
  );
}
