import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav className="header">
        <div className="logo">
          <img src="./assets/guess-flag-logo.png" alt="logo" />
          <p className="logo-name">Flaggy</p>
        </div>
        <p className="nav-text">Let's play</p>
      </nav>
    </header>
  );
}
