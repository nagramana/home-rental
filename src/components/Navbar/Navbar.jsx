import React, { useState } from "react";
import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        HomeRent
      </div>

      {/* NAV LINKS */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="/">Home</a></li>

        <li><a href="/">Properties</a></li>

        <li><a href="/">About</a></li>

        <li><a href="/">Contact</a></li>

        <button className="login-btn">
          Login
        </button>

      </ul>

      {/* MOBILE MENU */}
      <div
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
};

export default Navbar;