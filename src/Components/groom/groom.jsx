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
    <div className="groom-page-container">

      <div className="search-box">
        <div className="search-field">
          <label>Looking for</label>
          <select>
            <option>Woman</option>
            <option>Man</option>
          </select>
        </div>

        <div className="search-field">
          <label>Aged</label>
          <div className="age-range">
            <select>
              <option>22</option>
              <option>23</option>
              <option>24</option>
            </select>
            <span>to</span>
            <select>
              <option>27</option>
              <option>28</option>
              <option>29</option>
            </select>
          </div>
        </div>

        <div className="search-field">
          <label>Religion</label>
          <select>
            <option>Select</option>
            <option>Hindu</option>
            <option>Muslim</option>
          </select>
        </div>

        <div className="search-field">
          <label>Mother Tongue</label>
          <select>
            <option>Select</option>
            <option>Tamil</option>
            <option>Hindi</option>
          </select>
        </div>

        <button className="begin-button">Search</button>
      </div>

      <div className="groom-page">
        <div className="groom-grid">
          {filteredGrooms.map(groom => (
            <div key={groom.id} className="groom-card">
              <img src={groom.image} alt={groom.name} className="groom-img" />
              <h3>{groom.name}</h3>
              <p>{groom.age} years | {groom.profession}</p>
              <p>{groom.city}</p>
              <button className="connect-btn">View Full Profile</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroomPage;
