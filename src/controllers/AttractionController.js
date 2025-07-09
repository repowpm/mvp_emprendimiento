import { AttractionModel, attractionsData, categories, locations } from '../models/AttractionModel';
import Swal from 'sweetalert2';

export class AttractionController {
  constructor() {
    this.attractions = attractionsData.map(data => new AttractionModel(data));
    this.filteredAttractions = [...this.attractions];
    this.currentFilters = {
      category: 'Todos',
      location: 'Todos',
      searchTerm: ''
    };
  }

  // Obtener todos los atractivos
  getAllAttractions() {
    return this.attractions;
  }

  // Obtener atractivos filtrados
  getFilteredAttractions() {
    return this.filteredAttractions;
  }

  // Aplicar filtros
  applyFilters(filters = {}) {
    this.currentFilters = { ...this.currentFilters, ...filters };
    
    this.filteredAttractions = this.attractions.filter(attraction => {
      const categoryMatch = this.currentFilters.category === 'Todos' || 
                           attraction.category === this.currentFilters.category;
      
      const locationMatch = this.currentFilters.location === 'Todos' || 
                           attraction.location.includes(this.currentFilters.location);
      
      const searchMatch = !this.currentFilters.searchTerm || 
                         attraction.name.toLowerCase().includes(this.currentFilters.searchTerm.toLowerCase()) ||
                         attraction.description.toLowerCase().includes(this.currentFilters.searchTerm.toLowerCase());
      
      return categoryMatch && locationMatch && searchMatch;
    });

    return this.filteredAttractions;
  }

  // Obtener atractivo por ID
  getAttractionById(id) {
    return this.attractions.find(attraction => attraction.id === id);
  }

  // Obtener atractivos por categoría
  getAttractionsByCategory(category) {
    if (category === 'Todos') {
      return this.attractions;
    }
    return this.attractions.filter(attraction => attraction.category === category);
  }

  // Obtener atractivos por ubicación
  getAttractionsByLocation(location) {
    if (location === 'Todos') {
      return this.attractions;
    }
    return this.attractions.filter(attraction => attraction.location.includes(location));
  }

  // Obtener atractivos destacados (rating > 4.5)
  getFeaturedAttractions() {
    return this.attractions.filter(attraction => attraction.rating >= 4.5);
  }

  // Obtener categorías disponibles
  getCategories() {
    return categories;
  }

  // Obtener ubicaciones disponibles
  getLocations() {
    return locations;
  }

  // Mostrar detalles de un atractivo
  showAttractionDetails(attractionId) {
    const attraction = this.getAttractionById(attractionId);
    
    if (!attraction) {
      this.showError('Atractivo no encontrado');
      return;
    }

    Swal.fire({
      title: attraction.name,
      html: `
        <div style="text-align: left;">
          <img src="${attraction.imageUrl}" alt="${attraction.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
          <p><strong>Descripción:</strong> ${attraction.description}</p>
          <p><strong>Ubicación:</strong> ${attraction.location}</p>
          <p><strong>Categoría:</strong> ${attraction.category}</p>
          <p><strong>Precio:</strong> ${attraction.price}</p>
          <p><strong>Duración:</strong> ${attraction.duration}</p>
          <p><strong>Dificultad:</strong> ${attraction.difficulty}</p>
          <p><strong>Mejor época:</strong> ${attraction.bestTime}</p>
          <p><strong>Características:</strong> ${attraction.features.join(', ')}</p>
          <p><strong>Contacto:</strong> ${attraction.contact.phone} | ${attraction.contact.email}</p>
        </div>
      `,
      width: '600px',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#2c5aa0',
      showCloseButton: true
    });
  }

  // Mostrar información de contacto
  showContactInfo(attractionId) {
    const attraction = this.getAttractionById(attractionId);
    
    if (!attraction) {
      this.showError('Atractivo no encontrado');
      return;
    }

    Swal.fire({
      title: `Contacto - ${attraction.name}`,
      html: `
        <div style="text-align: center;">
          <p><strong>Teléfono:</strong></p>
          <p>${attraction.contact.phone}</p>
          <br>
          <p><strong>Email:</strong></p>
          <p>${attraction.contact.email}</p>
        </div>
      `,
      icon: 'info',
      confirmButtonText: 'Copiar teléfono',
      confirmButtonColor: '#2c5aa0',
      showCancelButton: true,
      cancelButtonText: 'Cerrar',
      cancelButtonColor: '#6c757d'
    }).then((result) => {
      if (result.isConfirmed) {
        navigator.clipboard.writeText(attraction.contact.phone);
        this.showSuccess('Teléfono copiado al portapapeles');
      }
    });
  }

  // Mostrar mapa de ubicación
  showLocationMap(attractionId) {
    const attraction = this.getAttractionById(attractionId);
    
    if (!attraction) {
      this.showError('Atractivo no encontrado');
      return;
    }

    const { lat, lng } = attraction.coordinates;
    const mapUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    
    Swal.fire({
      title: `Ubicación - ${attraction.name}`,
      html: `
        <div style="text-align: center;">
          <p>Coordenadas: ${lat}, ${lng}</p>
          <p>Ubicación: ${attraction.location}</p>
          <br>
          <a href="${mapUrl}" target="_blank" class="btn btn-primary">
            Abrir en Google Maps
          </a>
        </div>
      `,
      icon: 'info',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#2c5aa0'
    });
  }

  // Mostrar notificación de éxito
  showSuccess(message) {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: message,
      timer: 2000,
      showConfirmButton: false
    });
  }

  // Mostrar notificación de error
  showError(message) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      confirmButtonColor: '#e74c3c'
    });
  }

  // Mostrar notificación de información
  showInfo(message) {
    Swal.fire({
      icon: 'info',
      title: 'Información',
      text: message,
      confirmButtonColor: '#2c5aa0'
    });
  }

  // Buscar atractivos
  searchAttractions(searchTerm) {
    this.currentFilters.searchTerm = searchTerm;
    return this.applyFilters();
  }

  // Obtener estadísticas
  getStats() {
    const total = this.attractions.length;
    const averageRating = this.attractions.reduce((sum, attraction) => sum + attraction.rating, 0) / total;
    const categoriesCount = {};
    
    this.attractions.forEach(attraction => {
      categoriesCount[attraction.category] = (categoriesCount[attraction.category] || 0) + 1;
    });

    return {
      total,
      averageRating: averageRating.toFixed(1),
      categoriesCount
    };
  }
} 