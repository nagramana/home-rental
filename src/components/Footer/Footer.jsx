import React from "react";
import "./Footer.css";

const Footer = () => {

  return (
    <footer className="footer">

      <h2>
        HomeRent
      </h2>

      <p>
        Find your dream home easily without brokers.
      </p>

      <div className="footer-links">

        <a href="/">Home</a>
        <a href="/">Properties</a>
        <a href="/">About</a>
        <a href="/">Contact</a>

      </div>

      <span>
        © 2026 HomeRent. All Rights Reserved.
      </span>

    </footer>
  );
};

export default Footer;
