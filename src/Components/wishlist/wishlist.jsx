import React, { useState, useEffect } from "react";
import "./wishlist.css";
import axios from "axios";

const Wishlist = () => {
  const [wishList, setWishList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const profilesPerPage = 8;
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get("http://localhost:3001/wishlist");
        setWishList(res.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchWishlist();
  }, []);
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = wishList.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );
  const totalPages = Math.ceil(wishList.length / profilesPerPage);
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
  const handleViewProfile = (groom) => {
    setSelectedProfile(groom);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };
  return (
    <>
      <div className="groom-page-container">
        <div className="groom-page">
          <div className="groom-grid">
            {currentProfiles.length === 0 ? (
              <p>No matches found.</p>
            ) : (
              currentProfiles.map((wishList) => (
                <div key={wishList.id} className="groom-card">
                  <img
                    src={wishList.image}
                    alt={wishList.name}
                    className="groom-img"
                  />
                  <h3>{wishList.name}</h3>
                  <p>
                    {wishList.age} years | {wishList.profession}
                  </p>
                  <p>{wishList.city}</p>
                  <button
                    className="connect-btn"
                    onClick={() => handleViewProfile(wishList)}
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
                  <span>Age:</span> {wishList.age}
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
export default Wishlist;
