import React from "react";
import Logo from "../assets/img/MH.png";

const NavBar = () => {
  return (
    <>
      <div className="topnav">
        <ul>
          <li>
            <a href="#logo">
              <img src={Logo} alt="Logo" className="logo" />
            </a>
          </li>
          <li>
            <a href="#home" style={{ color: "#fec544" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#number" style={{ color: "#fec544" }}>
              +98 919 7686 092
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
