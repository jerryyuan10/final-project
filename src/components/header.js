import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

/**
 * Header for the page.
 */
function Header() {
  return (
    <header className="header">
      <span className="header__emoji" role="img" aria-label="emoji">
        🟨🔺🔷🟢
      </span>
      <br />
      <br />
      <nav className="header__nav">
        <Link to="/">Home</Link> | <Link to="/play">Play</Link> |{" "}
        <Link to="/about">What is SVOA Game?</Link>
      </nav>
    </header>
  );
}

export default Header;
