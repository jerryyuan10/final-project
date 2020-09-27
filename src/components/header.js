import React from "react";
import { Link } from "react-router-dom";

/**
 * Header for the page.
 */
function Header() {
  return (
    <header className="header">
      <span className="header__logo" role="img" aria-label="logo">
        ✨✨✨✨✨✨
      </span>
      <nav className="header__nav">
        <Link to="/">Home</Link> | <Link to="/play">Play</Link> |{" "}
        <Link to="/about">What is SVOA Game?</Link>
      </nav>
    </header>
  );
}

export default Header;
