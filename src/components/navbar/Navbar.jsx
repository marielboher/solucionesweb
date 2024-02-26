import React, { useState } from "react";
import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { HiBars3 } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="container-nav">
      <div className="logo">
        <h1>SW</h1>
      </div>
      <div className="menu-button-container">
        <button className="menu-button" onClick={toggleMenu}>
          {isOpen ? (
            <VscChromeClose className="menu-close" />
          ) : (
            <HiBars3 className="menu-open" />
          )}
        </button>
      </div>
      <ul className={`nav-ul ${isOpen ? "open" : ""}`}>
        <li>
          <Link to={`#home`} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to={`#about`} onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to={`#services`} onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to={`#contact`} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
