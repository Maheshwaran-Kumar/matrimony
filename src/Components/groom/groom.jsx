import React, { useState, useEffect } from "react";
import "./groom.css";
import groomData from "../../users/groom.json";

 
const GroomPage = () => {
  const [grooms, setGrooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const profilesPerPage = 8;
 
  useEffect(() => {
    setGrooms(groomData);
  }, []);
 
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = grooms.slice(indexOfFirstProfile, indexOfLastProfile);
  const totalPages = Math.ceil(grooms.length / profilesPerPage);

 
  const handleViewProfile = (groom) => {
    setSelectedProfile(groom);
  };
 
  const handleCloseModal = () => {
    setSelectedProfile(null);
  };
 
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
 
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
 
  return (
    <>
      {currentPage === 1 && (
        <div className="search-box">
          <div className="search-field">
            <label>Looking for</label>
            <select>
              <option>Woman</option>
              <option selected>Man</option>
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
      )}
 
      <div className="groom-page-container">
        <div className="groom-page">
          <div className="groom-grid">
            {currentProfiles.map((groom) => (
              <div key={groom.id} className="groom-card">
                <img src={groom.image} alt={groom.name} className="groom-img" />
                <h3>{groom.name}</h3>
                <p>
                  {groom.age} years | {groom.profession}
                </p>
                <p>{groom.city}</p>
                <button
                  className="connect-btn"
                  onClick={() => handleViewProfile(groom)}
                >
                  View Full Profile
                </button>
              </div>
            ))}
          </div>
 
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="page-button"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                {"<"} Previous
              </button>
              <span className="page-number">
                {currentPage} / {totalPages}
              </span>
              <button
                className="page-button"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Next {">"}
              </button>
            </div>
          )}
        </div>
      </div>
 
      {selectedProfile && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
 
            <div className="modal-header">
              <img
                src={selectedProfile.image}
                alt={selectedProfile.name}
                className="modal-img"
              />
              <h2 className="modal-name">{selectedProfile.name}</h2>
            </div>
 
            <div className="modal-body">
              <div className="left-side-info">
                <div className="info-pair">
                  <span className="info-label">Age:</span>
                  <span>{selectedProfile.age}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Gender:</span>
                  <span>{selectedProfile.gender}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Profession:</span>
                  <span>{selectedProfile.profession}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Education:</span>
                  <span>{selectedProfile.education}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">City:</span>
                  <span>{selectedProfile.city}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Hometown:</span>
                  <span>{selectedProfile.home_town}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Date of Birth:</span>
                  <span>{selectedProfile.dob}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Mother Tongue:</span>
                  <span>{selectedProfile.mother_tongue}</span>
                </div>
                {selectedProfile.siblings && (
                  <>
                    <div className="info-pair">
                      <span className="info-label">Siblings:</span>
                      <span></span>
                    </div>
                    <ul>
                      {selectedProfile.siblings.map((sibling, idx) => (
                        <li key={idx}>
                          {sibling.name} ({sibling.gender})
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
 
              <div className="right-side-info">
                <div className="info-pair">
                  <span className="info-label">Religion:</span>
                  <span>{selectedProfile.religion}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Marital Status:</span>
                  <span>{selectedProfile.marital_status}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Salary:</span>
                  <span>{selectedProfile.salary}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Height:</span>
                  <span>{selectedProfile.height}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Zodiac Sign:</span>
                  <span>{selectedProfile.zodiac_sign}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Father's Occupation:</span>
                  <span>{selectedProfile.father_occupation}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Mother's Occupation:</span>
                  <span>{selectedProfile.mother_occupation}</span>
                </div>
                <div className="info-pair">
                  <span className="info-label">Phone Number:</span>
                  <span>{selectedProfile.phone_number}</span>
                </div>
              </div>
            </div>
 
            <div className="modal-footer">
              <div className="info-pair">
                <span className="info-label">Bio:</span>
                <span>{selectedProfile.bio}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
 
export default GroomPage;