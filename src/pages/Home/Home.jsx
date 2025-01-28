import React from 'react';
import Navbar from '../../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import Homeimage from '../../assets/image.png';
import ParticlesComponent from '../Particle/particle.jsx'; // Import ParticlesComponent

export default function Home() {
  return (
    <>
      <div className="container">
      <Navbar />
        <ParticlesComponent id="tsparticles" /> {/* Add the particle component here */}
        
        <div className="home">
          <div className="home-main">
            <div className="portfolio">
              <span>DEVEL</span>
              <span className='devimg'>
              <img src={Homeimage} alt="" /></span>
              PER
            </div>
            <div className="navbar-icons">
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
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons-container">
            <div className="read-button">
              <button className="read-more">
               <a href="#">About Me</a> 
                <span className="readarrow">
                  <img src="/arrow.svg" alt="arrow" />
                </span>
              </button>
            </div>
            <div className="Project-div">
              <button className="project-button">
                Our Projects
              </button>
              <span className="projectarrow">
                <img src="/arrow.svg" alt="arrow" />
              </span>
            </div>
            <div>
              {/* Additional content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
