import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaUsers } from 'react-icons/fa';
import { trackSearch } from '../utils/analytics';
import './Hero.css';

const Hero = ({ onSearch, stats }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      trackSearch(searchTerm);
      onSearch(searchTerm);
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Descubre la Costa del Maule
            </h1>
            <p className="hero-subtitle">
              Explora las hermosas playas de Pelluhue, Curanipe y Chanco. 
              Vive la aventura en la Reserva Nacional Federico Albert y 
              disfruta de la gastronomía local en Cauquenes.
            </p>
            
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <div className="search-input-group">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Buscar atractivos, playas, restaurantes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  aria-label="Buscar atractivos turísticos"
                />
                <button type="submit" className="search-button">
                  Buscar
                </button>
              </div>
            </form>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <FaMapMarkerAlt className="stat-icon" />
              <div className="stat-content">
                <h3>{stats?.total || 0}</h3>
                <p>Atractivos</p>
              </div>
            </div>
            
            <div className="stat-item">
              <FaStar className="stat-icon" />
              <div className="stat-content">
                <h3>{stats?.averageRating || '4.5'}</h3>
                <p>Calificación</p>
              </div>
            </div>
            
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <div className="stat-content">
                <h3>500+</h3>
                <p>Visitantes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 