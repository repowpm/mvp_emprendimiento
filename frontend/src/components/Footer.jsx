import React from 'react';
import { FaMapMarkedAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaMapMarkedAlt className="footer-logo-icon" />
              <h3>Costa del Maule</h3>
              <p>Turismo & Aventura</p>
            </div>
            <p className="footer-description">
              Descubre los tesoros escondidos de la costa del Maule. 
              Desde las hermosas playas de Pelluhue hasta la Reserva Nacional Federico Albert, 
              te invitamos a explorar la belleza natural de nuestra región.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Atractivos</h4>
            <ul className="footer-links">
              <li><a href="#playas">Playas</a></li>
              <li><a href="#naturaleza">Naturaleza</a></li>
              <li><a href="#gastronomia">Gastronomía</a></li>
              <li><a href="#historia">Historia</a></li>
              <li><a href="#aventura">Aventura</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Ubicaciones</h4>
            <ul className="footer-links">
              <li><a href="#pelluhue">Pelluhue</a></li>
              <li><a href="#curanipe">Curanipe</a></li>
              <li><a href="#chanco">Chanco</a></li>
              <li><a href="#cauquenes">Cauquenes</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>info@costadelmaule.cl</span>
              </div>
              <div className="contact-item">
                <FaMapMarkedAlt />
                <span>Cauquenes, Región del Maule</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Costa del Maule. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#privacidad">Política de Privacidad</a>
              <a href="#terminos">Términos de Uso</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 