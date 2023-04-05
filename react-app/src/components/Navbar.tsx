// import { useState } from "react";
import "../styles/App.css";

function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-left">
            <a href="/">Ashneet Chawla</a>
          </div>
          <div className="navbar-right">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
