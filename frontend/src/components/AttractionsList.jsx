import React, { useEffect, useRef } from 'react';
import { FaStar, FaMapMarkerAlt, FaPhone, FaEye, FaHeart } from 'react-icons/fa';
import { trackAttractionView, lazyLoadImage } from '../utils/analytics';
import './AttractionsList.css';

const AttractionsList = ({ 
  attractions, 
  onAttractionClick, 
  onContactClick, 
  onLocationClick 
}) => {
  const imageRefs = useRef({});

  useEffect(() => {
    // Medir tiempo de carga de la página
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Página cargada en ${loadTime.toFixed(2)}ms`);
      });
    }
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star half" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star empty" />);
    }
    
    return stars;
  };

  const handleAttractionClick = (attractionId, attractionName) => {
    trackAttractionView(attractionName);
    onAttractionClick(attractionId);
  };

  if (attractions.length === 0) {
    return (
      <div className="no-results">
        <h3>No se encontraron atractivos</h3>
        <p>Intenta ajustar los filtros o buscar con otros términos.</p>
      </div>
    );
  }

  return (
    <div className="attractions-list">
      <div className="attractions-header">
        <h2>Atractivos Turísticos</h2>
        <p>Descubre los mejores lugares de la costa del Maule</p>
      </div>
      
      <div className="attractions-grid">
        {attractions.map((attraction) => (
          <div key={attraction.id} className="attraction-card">
            <div className="attraction-image">
              <img 
                ref={el => imageRefs.current[attraction.id] = el}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                data-src={attraction.imageUrl}
                alt={attraction.name}
                className="lazy"
                loading="lazy"
                onLoad={() => {
                  if (imageRefs.current[attraction.id]) {
                    lazyLoadImage(imageRefs.current[attraction.id], attraction.imageUrl);
                  }
                }}
              />
              <div className="attraction-overlay">
                <button 
                  className="overlay-btn"
                  onClick={() => handleAttractionClick(attraction.id, attraction.name)}
                  aria-label={`Ver detalles de ${attraction.name}`}
                >
                  <FaEye />
                </button>
                <button 
                  className="overlay-btn favorite"
                  aria-label={`Agregar ${attraction.name} a favoritos`}
                >
                  <FaHeart />
                </button>
              </div>
              <div className="attraction-category">
                {attraction.category}
              </div>
            </div>
            
            <div className="attraction-content">
              <h3 className="attraction-title">{attraction.name}</h3>
              
              <div className="attraction-location">
                <FaMapMarkerAlt />
                <span>{attraction.location}</span>
              </div>
              
              <div className="attraction-rating">
                <div className="stars" role="img" aria-label={`Calificación: ${attraction.rating} de 5 estrellas`}>
                  {renderStars(attraction.rating)}
                </div>
                <span className="rating-text">
                  {attraction.rating} ({attraction.reviewCount} reseñas)
                </span>
              </div>
              
              <p className="attraction-description">
                {attraction.description.substring(0, 120)}...
              </p>
              
              <div className="attraction-details">
                <span className="detail-item">
                  <strong>Precio:</strong> {attraction.price}
                </span>
                <span className="detail-item">
                  <strong>Duración:</strong> {attraction.duration}
                </span>
              </div>
              
              <div className="attraction-features">
                {attraction.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="feature-tag">
                    {feature}
                  </span>
                ))}
                {attraction.features.length > 3 && (
                  <span className="feature-tag more">
                    +{attraction.features.length - 3} más
                  </span>
                )}
              </div>
              
              <div className="attraction-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => handleAttractionClick(attraction.id, attraction.name)}
                >
                  Ver Detalles
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => onContactClick(attraction.id)}
                  aria-label={`Contactar sobre ${attraction.name}`}
                >
                  <FaPhone />
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => onLocationClick(attraction.id)}
                  aria-label={`Ver ubicación de ${attraction.name}`}
                >
                  <FaMapMarkerAlt />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttractionsList; 