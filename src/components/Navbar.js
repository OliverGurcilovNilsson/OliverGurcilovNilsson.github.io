import React, { useState } from 'react';
import './Navbar.css'; // Create this CSS file for styling the navbar

function Navbar({ onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <h1 className="navbar-brand">My Portfolio</h1>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li><button onClick={() => onNavigate('home')}>Home</button></li>
                <li><button onClick={() => onNavigate('education')}>Education</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;