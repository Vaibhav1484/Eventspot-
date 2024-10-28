// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="navbar">
            <h1>EventSpot Lite</h1>
            <input 
                type="text" 
                placeholder="Search events..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
        </div>
    );
};

export default Navbar;
