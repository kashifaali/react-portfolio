import React from "react";
import Navbar from "../../components/Navbar.jsx";
import InfiniteSlider from "../../components/InfiniteSlider.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Homeimage from "../../assets/kashif.png";
import ParticlesComponent from "../Particle/particle.jsx";
import Project from "../Projects/Project.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Home.css";


export default function Home() {
  return (
    <>
<div className="bg-[#0B0826] w-full h-screen">
      <Navbar />
      {/* <ParticlesComponent id="tsparticles" className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" /> */}
      
      <div className="w-full z-10 ">
        <div className="w-full h-[270px] flex justify-center items-center">
          <div className="text-white font-bold font-[cursive] lg:text-[180px] md:text-[120px] sm:text-[95px] text-center font-cursive">
            <span className="hidden sm:inline  ">DEVEL</span>
            <span className="inline-block lg:w-[150px] md:w-[110px] sm:w-[80px] w-[240px]">
              <img src={Homeimage} alt="Developer Logo" className="lg:w-[170px] md:w-[110px] sm:w-[80px]" />
            </span>
            <span className="hidden sm:inline">PER</span>
          </div>
        </div>
        
        <div className="fixed top-64 right-5 transform -translate-y-1/2 flex flex-col gap-7 text-white text-2xl">
          <a href="https://github.com/kashifaali" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-transform hover:scale-110">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-transform hover:scale-110">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-transform hover:scale-110">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/thekashifali/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-transform hover:scale-110">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        
        <div className="w-[99%] box-content h-[100px] bg-red-500 absolute top-[410px] sm:top-[380px] left-0 z-10 rotate-3">
          <InfiniteSlider />
        </div>
        
        <div className="w-full flex justify-center relative items-center mx-auto h-[200px] box-content">

          <div className="w-3/5 h-[200px] relative">
            <button className="flex items-center mt-28 justify-between bg-gradient-to-l
             from-[#1595b6] to-[rgba(31,38,103,0.9)] absolute lg:bottom-7 lg:left-72 md:bottom-4 md:left-56 sm:bottom-3 sm:left-30 bottom-2 left-20 h-11 rounded-md px-4 py-2 font-semibold text-white 
             text-lg hover:scale-105 transition">
              Our Projects
              <span className="ml-2 transform rotate-[-45deg] w-5 filter invert transition-transform hover:translate-y-2">
                <img src="/arrow.svg" alt="arrow" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

<Project/>

<Footer/>
    </>
    
  );
}
