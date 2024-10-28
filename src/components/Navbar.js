import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>EventSpot Lite</h2>
      <input type="text" placeholder="Search events..." />
    </nav>
  );
};

export default Navbar;
