import React, { useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
const MegaMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`mega-menu ${isMenuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>
      <ul className="menu-items">
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/services"><li>Services</li></Link>
      <Link to="/contact"> <li>Contact</li></Link>
      </ul>
    </div>
  );
}

export default MegaMenu;
