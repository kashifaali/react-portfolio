import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import InfiniteSlider from "../../components/InfiniteSlider.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import Homeimage from "../../assets/kashif.png";
import ParticlesComponent from "../Particle/particle.jsx"; 

export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <ParticlesComponent id="tsparticles" /> 

        <div className="home">
          <div className="home-main">
            <div className="portfolio">
              <span className="devel">DEVEL</span>
              <span className="devimg">
                <img src={Homeimage} alt="Developer Logo" />
              </span>
              <span className="per">PER</span>
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
          <div className="infinite">
            <InfiniteSlider />
          </div>

        
          <div className="buttons-container">
            <div className="read-button">
              <Link to="/about">
                <button className="read-more">
                  About Me
                  <span className="readarrow">
                    <img src="/arrow.svg" alt="arrow" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="Project-div">
              <button className="project-button">
                Our Projects
                <span className="projectarrow">
                  <img src="/arrow.svg" alt="arrow" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
