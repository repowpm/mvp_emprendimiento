import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AttractionsList from './components/AttractionsList';
import Filters from './components/Filters';
import Footer from './components/Footer';
import { AttractionController } from './controllers/AttractionController';
import './App.css';

function App() {
  const [controller] = useState(new AttractionController());
  const [filteredAttractions, setFilteredAttractions] = useState([]);
  const [filters, setFilters] = useState({
    category: 'Todos',
    location: 'Todos',
    searchTerm: ''
  });

  useEffect(() => {
    const allAttractions = controller.getAllAttractions();
    setFilteredAttractions(allAttractions);
  }, [controller]);

  const handleFilterChange = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    
    const filtered = controller.applyFilters(updatedFilters);
    setFilteredAttractions(filtered);
  };

  const handleSearch = (searchTerm) => {
    const filtered = controller.searchAttractions(searchTerm);
    setFilteredAttractions(filtered);
    setFilters(prev => ({ ...prev, searchTerm }));
  };

  const handleAttractionClick = (attractionId) => {
    controller.showAttractionDetails(attractionId);
  };

  const handleContactClick = (attractionId) => {
    controller.showContactInfo(attractionId);
  };

  const handleLocationClick = (attractionId) => {
    controller.showLocationMap(attractionId);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <Hero 
            onSearch={handleSearch}
            stats={controller.getStats()}
          />
          
          <section className="filters-section">
            <div className="container">
              <Filters 
                categories={controller.getCategories()}
                locations={controller.getLocations()}
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </section>
          
          <section className="attractions-section">
            <div className="container">
              <AttractionsList 
                attractions={filteredAttractions}
                onAttractionClick={handleAttractionClick}
                onContactClick={handleContactClick}
                onLocationClick={handleLocationClick}
              />
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App; 