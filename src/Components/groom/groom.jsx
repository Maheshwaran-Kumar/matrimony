import React, { useState, useEffect } from 'react';
import './groom.css';
import groomData from '../../users/groom.json'; 

const GroomPage = () => {
  const [grooms, setGrooms] = useState([]);
  const [filteredGrooms, setFilteredGrooms] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    setGrooms(groomData);
    setFilteredGrooms(groomData);
  }, []);

  const handleCityFilter = (city) => {
    setSelectedCity(city);
    if (city === '') {
      setFilteredGrooms(grooms);
    } else {
      setFilteredGrooms(grooms.filter(groom => groom.city === city));
    }
  };


  

  const uniqueCities = [...new Set(grooms.map(groom => groom.city))];

  return (
    <div className="groom-page">
      <aside className="filter-sidebar">
        <h3>Filter by City</h3>
        <div>
          <label>
            <input
              type="radio"
              name="city"
              value=""
              checked={selectedCity === ''}
              onChange={() => handleCityFilter('')}
            />
            All Cities
          </label>
          {uniqueCities.map((city, index) => (
            <label key={index}>
              <input
                type="radio"
                name="city"
                value={city}
                checked={selectedCity === city}
                onChange={() => handleCityFilter(city)}
              />
              {city}
            </label>
          ))}
        </div>
      </aside>

      <div className="groom-grid">
        {filteredGrooms.map(groom => (
          <div key={groom.id} className="groom-card">
            <img src={groom.image} alt={groom.name} className="groom-img" />
            <h3>{groom.name}</h3>
            <p>{groom.age} years | {groom.profession}</p>
            <p>{groom.city}</p>
            <button className="connect-btn">View Full Profile </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroomPage;
