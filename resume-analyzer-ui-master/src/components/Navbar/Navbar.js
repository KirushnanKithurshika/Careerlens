// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png"; 
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={Logo} alt="CareerLens" className="logo-img" />
        </div>

        <div className="tagline">AI powered Resume Analyzer</div>

    
        <div className="user-icon">
          <FaUserCircle />
        </div>
      </header>
      <div className="navbar-divider"></div>
    </>
  );
};

export default Navbar;
