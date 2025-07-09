// Analytics y métricas de rendimiento
export const trackEvent = (eventName, properties = {}) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  
  // Log para desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('Event tracked:', eventName, properties);
  }
};

export const trackPageView = (pageName) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

export const trackAttractionView = (attractionName) => {
  trackEvent('attraction_view', {
    attraction_name: attractionName,
    page_location: window.location.href
  });
};

export const trackSearch = (searchTerm) => {
  trackEvent('search', {
    search_term: searchTerm,
    page_location: window.location.href
  });
};

export const trackFilter = (filterType, filterValue) => {
  trackEvent('filter_used', {
    filter_type: filterType,
    filter_value: filterValue,
    page_location: window.location.href
  });
};

// Métricas de rendimiento
export const measurePageLoad = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0];
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    
    trackEvent('page_load_time', {
      load_time_ms: Math.round(loadTime),
      page_url: window.location.href
    });
  }
};

// Lazy loading para imágenes
export const lazyLoadImage = (imgElement, src) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    imageObserver.observe(imgElement);
  } else {
    // Fallback para navegadores que no soportan IntersectionObserver
    imgElement.src = src;
  }
}; 