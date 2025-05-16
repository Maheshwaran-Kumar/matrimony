import React, { useState, useEffect } from "react";
import "./groom.css";
import groomData from "../../users/groom.json";

const GroomPage = () => {
  const [grooms, setGrooms] = useState([]);
  const [filteredGrooms, setFilteredGrooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filters, setFilters] = useState({
    gender: "",
    minAge: "",
    maxAge: "",
    religion: "",
    profession: "",
  });

  const profilesPerPage = 8;

  useEffect(() => {
    setGrooms(groomData);
    setFilteredGrooms(groomData);
  }, []);

  const handleGroomFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    const filtered = grooms.filter((groom) => {
      const age = groom.age;

      return (
        (filters.gender === "" ||
          groom.gender.toLowerCase() === filters.gender.toLowerCase()) &&
        (filters.minAge === "" || age >= parseInt(filters.minAge)) &&
        (filters.maxAge === "" || age <= parseInt(filters.maxAge)) &&
        (filters.religion === "" ||
          groom.religion.toLowerCase() === filters.religion.toLowerCase()) &&
        (filters.profession === "" ||
          groom.profession.toLowerCase() === filters.profession.toLowerCase())
      );
    });

    setFilteredGrooms(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredGrooms.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );
  const totalPages = Math.ceil(filteredGrooms.length / profilesPerPage);

  const handleViewProfile = (groom) => {
    setSelectedProfile(groom);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  return (
    <>
      {currentPage === 1 && (
        <div className="search-box">
          <div className="search-field">
            <label>Looking for</label>
            <select
              name="gender"
              value={filters.gender}
              onChange={handleGroomFilterChange}
            >
              <option value="Male">Male</option>
            </select>
          </div>

          <div className="search-field">
            <label>Aged</label>
            <div className="age-range">
              <select
                name="minAge"
                value={filters.minAge}
                onChange={handleGroomFilterChange}
              >
                <option value="">Min</option>
                {[...Array(20)].map((element, i) => {
                  const age = 20 + i;
                  return <option key={age}>{age}</option>;
                })}
              </select>
              <span>to</span>
              <select
                name="maxAge"
                value={filters.maxAge}
                onChange={handleGroomFilterChange}
              >
                <option value="">Max</option>
                {[...Array(20)].map((_, i) => {
                  const age = 25 + i;
                  return <option key={age}>{age}</option>;
                })}
              </select>
            </div>
          </div>

          <div className="search-field">
            <label>Religion</label>
            <select
              name="religion"
              value={filters.religion}
              onChange={handleGroomFilterChange}
            >
              <option value="">Any</option>
              <option value="Christian">Christian</option>
              <option value="Hindu">Hindu</option>
              <option value="Jain">Jain</option>
              <option value="Muslim">Muslim</option>
              <option value="Sikh">Sikh</option>
            </select>
          </div>

          <div className="search-field">
            <label>Profession</label>
            <select
              name="profession"
              value={filters.profession}
              onChange={handleGroomFilterChange}
            >
              <option value="">Any</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Banker">Banker</option>
              <option value="Teacher">Teacher</option>
              <option value="Businessman">Businessman</option>
              <option value="Civil Servant">Civil Servant</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>

          <button className="begin-button" onClick={applyFilters}>
            Search
          </button>
        </div>
      )}

      <div className="groom-page-container">
        <div className="groom-page">
          <div className="groom-grid">
            {currentProfiles.length === 0 ? (
              <p>No matches found.</p>
            ) : (
              currentProfiles.map((groom) => (
                <div key={groom.id} className="groom-card">
                  <img
                    src={groom.image}
                    alt={groom.name}
                    className="groom-img"
                  />
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
              ))
            )}
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
              &times;
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
                  <span>Age:</span> {selectedProfile.age}
                </div>
                <div className="info-pair">
                  <span>Gender:</span> {selectedProfile.gender}
                </div>
                <div className="info-pair">
                  <span>Profession:</span> {selectedProfile.profession}
                </div>
                <div className="info-pair">
                  <span>Education:</span> {selectedProfile.education}
                </div>
                <div className="info-pair">
                  <span>City:</span> {selectedProfile.city}
                </div>
                <div className="info-pair">
                  <span>Hometown:</span> {selectedProfile.home_town}
                </div>
                <div className="info-pair">
                  <span>DOB:</span> {selectedProfile.dob}
                </div>
                <div className="info-pair">
                  <span>Mother Tongue:</span> {selectedProfile.mother_tongue}
                </div>
                {selectedProfile.siblings &&
                  selectedProfile.siblings.length > 0 && (
                    <>
                      <div className="info-pair">
                        <span>Siblings:</span>
                      </div>
                      <ul>
                        {selectedProfile.siblings.map((sib, i) => (
                          <li key={i}>
                            {sib.name} ({sib.gender})
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
              </div>

              <div className="right-side-info">
                <div className="info-pair">
                  <span>Religion:</span> {selectedProfile.religion}
                </div>
                <div className="info-pair">
                  <span>Marital Status:</span> {selectedProfile.marital_status}
                </div>
                <div className="info-pair">
                  <span>Salary:</span> {selectedProfile.salary}
                </div>
                <div className="info-pair">
                  <span>Height:</span> {selectedProfile.height}
                </div>
                <div className="info-pair">
                  <span>Zodiac Sign:</span> {selectedProfile.zodiac_sign}
                </div>
                <div className="info-pair">
                  <span>Father's Occupation:</span>{" "}
                  {selectedProfile.father_occupation}
                </div>
                <div className="info-pair">
                  <span>Mother's Occupation:</span>{" "}
                  {selectedProfile.mother_occupation}
                </div>
                <div className="info-pair">
                  <span>Phone:</span> {selectedProfile.phone_number}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="info-pair">
                <span>Bio:</span> {selectedProfile.bio}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GroomPage;
