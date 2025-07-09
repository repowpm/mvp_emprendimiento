// Modelo de datos para atractivos turísticos
export class AttractionModel {
  constructor(data = {}) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.description = data.description || '';
    this.location = data.location || '';
    this.category = data.category || '';
    this.rating = data.rating || 0;
    this.reviewCount = data.reviewCount || 0;
    this.imageUrl = data.imageUrl || '';
    this.price = data.price || '';
    this.duration = data.duration || '';
    this.difficulty = data.difficulty || '';
    this.coordinates = data.coordinates || { lat: 0, lng: 0 };
    this.features = data.features || [];
    this.bestTime = data.bestTime || '';
    this.contact = data.contact || {};
  }

  // Métodos para validación
  isValid() {
    return this.name && this.description && this.location;
  }

  // Método para obtener información resumida
  getSummary() {
    return {
      id: this.id,
      name: this.name,
      location: this.location,
      category: this.category,
      rating: this.rating,
      imageUrl: this.imageUrl
    };
  }
}

// Datos de ejemplo para la costa del Maule
export const attractionsData = [
  {
    id: '1',
    name: 'Playa de Pelluhue',
    description: 'Hermosa playa de arenas doradas y aguas cristalinas, perfecta para el surf y la pesca deportiva. Ideal para familias y amantes del mar.',
    location: 'Pelluhue, Cauquenes',
    category: 'Playa',
    rating: 4.5,
    reviewCount: 128,
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    price: 'Gratuito',
    duration: 'Todo el día',
    difficulty: 'Fácil',
    coordinates: { lat: -35.8167, lng: -72.5833 },
    features: ['Surf', 'Pesca', 'Paseos en bote', 'Restaurantes'],
    bestTime: 'Diciembre a Marzo',
    contact: {
      phone: '+56 9 1234 5678',
      email: 'turismo@pelluhue.cl'
    }
  },
  {
    id: '2',
    name: 'Playa de Curanipe',
    description: 'Playa virgen con aguas azules y paisajes espectaculares. Conocida por su tranquilidad y belleza natural.',
    location: 'Curanipe, Cauquenes',
    category: 'Playa',
    rating: 4.7,
    reviewCount: 95,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    price: 'Gratuito',
    duration: 'Todo el día',
    difficulty: 'Fácil',
    coordinates: { lat: -35.8500, lng: -72.6333 },
    features: ['Natación', 'Fotografía', 'Paseos', 'Gastronomía local'],
    bestTime: 'Enero a Marzo',
    contact: {
      phone: '+56 9 8765 4321',
      email: 'info@curanipe.cl'
    }
  },
  {
    id: '3',
    name: 'Playa de Chanco',
    description: 'Extensa playa de arenas blancas con dunas y bosques de pinos. Perfecta para caminatas y observación de aves.',
    location: 'Chanco, Cauquenes',
    category: 'Playa',
    rating: 4.3,
    reviewCount: 76,
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    price: 'Gratuito',
    duration: 'Todo el día',
    difficulty: 'Fácil',
    coordinates: { lat: -35.7333, lng: -72.5333 },
    features: ['Caminatas', 'Observación de aves', 'Fotografía', 'Camping'],
    bestTime: 'Primavera y Verano',
    contact: {
      phone: '+56 9 5555 1234',
      email: 'turismo@chanco.cl'
    }
  },
  {
    id: '4',
    name: 'Centro Histórico de Cauquenes',
    description: 'Pueblo con arquitectura colonial y tradiciones arraigadas. Visita la Plaza de Armas y sus iglesias históricas.',
    location: 'Cauquenes',
    category: 'Histórico',
    rating: 4.1,
    reviewCount: 45,
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    price: 'Gratuito',
    duration: '2-3 horas',
    difficulty: 'Fácil',
    coordinates: { lat: -35.9667, lng: -72.3500 },
    features: ['Arquitectura', 'Historia', 'Gastronomía', 'Artesanías'],
    bestTime: 'Todo el año',
    contact: {
      phone: '+56 9 1111 2222',
      email: 'cultura@cauquenes.cl'
    }
  },
  {
    id: '5',
    name: 'Reserva Nacional Federico Albert',
    description: 'Reserva natural con senderos, cascadas y biodiversidad única. Ideal para ecoturismo y aventura.',
    location: 'Chanco, Cauquenes',
    category: 'Naturaleza',
    rating: 4.6,
    reviewCount: 62,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    price: '$3.000 CLP',
    duration: '4-6 horas',
    difficulty: 'Moderado',
    coordinates: { lat: -35.7500, lng: -72.5500 },
    features: ['Senderismo', 'Cascadas', 'Flora nativa', 'Fotografía'],
    bestTime: 'Primavera y Otoño',
    contact: {
      phone: '+56 9 3333 4444',
      email: 'conaf.chanco@conaf.cl'
    }
  },
  {
    id: '6',
    name: 'Caleta de Pelluhue',
    description: 'Pintoresca caleta de pescadores donde puedes comprar pescado fresco y mariscos directamente de los pescadores.',
    location: 'Pelluhue, Cauquenes',
    category: 'Gastronomía',
    rating: 4.4,
    reviewCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    price: 'Variable',
    duration: '1-2 horas',
    difficulty: 'Fácil',
    coordinates: { lat: -35.8200, lng: -72.5800 },
    features: ['Pescado fresco', 'Mariscos', 'Fotografía', 'Cultura local'],
    bestTime: 'Todo el año',
    contact: {
      phone: '+56 9 7777 8888',
      email: 'caleta@pelluhue.cl'
    }
  }
];

// Categorías disponibles
export const categories = [
  'Todos',
  'Playa',
  'Histórico',
  'Naturaleza',
  'Gastronomía',
  'Aventura',
  'Cultura'
];

// Ubicaciones disponibles
export const locations = [
  'Todos',
  'Pelluhue',
  'Curanipe',
  'Chanco',
  'Cauquenes'
]; 