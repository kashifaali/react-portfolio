import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav id='navbar' class="flex items-center justify-center sm:justify-around  lg:gap-96  px-5 py-4  text-white relative w-full">
  {/* Logo Section */}
  <div class="relative flex items-center w-80 mt-[30px] sm:w-64 sm:mt-[20px] md:w-72 md:mt-[25px] lg:w-80 lg:mt-[30px]">
    <a href="#" class="flex items-center">
      <span>
        <img src={logo} alt="Logo" className="w-[125px] sm:w-[100px] md:w-[110px] lg:w-[125px]" />
      </span>
      <span className="text-[42px] mr-10 font-bold absolute right-[92px] font-[cursive] sm:text-[28px] sm:right-[82px] md:text-[34px] md:right-[87px] lg:text-[42px] lg:right-[92px]">
        ASHIF
      </span>
    </a>
  </div>

  <div id="btn" className="group inline-block">
  <Link to="/about">
  <button className="flex items-center gap-2 justify-between bg-gradient-to-l from-[#1595b6] to-[rgba(31,38,103,0.9)] rounded-md px-4 py-2 font-semibold text-white text-lg hover:scale-105 transition">
    About Me
    <span className="ml-2 transform rotate-[224deg] w-5 filter invert transition-transform group-hover:rotate-90">
      <img src="/arrow.svg" alt="arrow" />
    </span>
  </button>
  </Link>

</div>

</nav>

  );
}
