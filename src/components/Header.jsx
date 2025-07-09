import React, { useState } from 'react';
import { FaMapMarkedAlt, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <FaMapMarkedAlt className="logo-icon" />
            <h1>Costa del Maule</h1>
            <span className="logo-subtitle">Turismo & Aventura</span>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#inicio" className="nav-link">Inicio</a></li>
              <li><a href="#atractivos" className="nav-link">Atractivos</a></li>
              <li><a href="#playas" className="nav-link">Playas</a></li>
              <li><a href="#gastronomia" className="nav-link">Gastronomía</a></li>
              <li><a href="#contacto" className="nav-link">Contacto</a></li>
            </ul>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 