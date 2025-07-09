import React from 'react';
import { FaFilter, FaMapMarkerAlt, FaTag } from 'react-icons/fa';
import { trackFilter } from '../utils/analytics';
import './Filters.css';

const Filters = ({ categories, locations, filters, onFilterChange }) => {
  const handleCategoryChange = (category) => {
    trackFilter('categoria', category);
    onFilterChange({ category });
  };

  const handleLocationChange = (location) => {
    trackFilter('ubicacion', location);
    onFilterChange({ location });
  };

  return (
    <div className="filters">
      <div className="filters-header">
        <FaFilter className="filters-icon" />
        <h3>Filtrar Atractivos</h3>
      </div>
      
      <div className="filters-content">
        <div className="filter-group">
          <div className="filter-label">
            <FaTag className="filter-icon" />
            <span>Categoría</span>
          </div>
          <div className="filter-options">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-option ${filters.category === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
                aria-label={`Filtrar por categoría: ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="filter-group">
          <div className="filter-label">
            <FaMapMarkerAlt className="filter-icon" />
            <span>Ubicación</span>
          </div>
          <div className="filter-options">
            {locations.map((location) => (
              <button
                key={location}
                className={`filter-option ${filters.location === location ? 'active' : ''}`}
                onClick={() => handleLocationChange(location)}
                aria-label={`Filtrar por ubicación: ${location}`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="filters-summary">
        <span>
          Mostrando: <strong>{filters.category}</strong> en <strong>{filters.location}</strong>
        </span>
      </div>
    </div>
  );
};

export default Filters; 