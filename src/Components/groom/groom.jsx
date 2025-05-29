import React, { useState, useEffect } from "react";
import "./groom.css";
import axios from "axios";

const GroomPage = () => {
  const [grooms, setGrooms] = useState([]);
  const [filteredGrooms, setFilteredGrooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState(null);
<<<<<<< HEAD

=======
  const [loading, setLoading] = useState(true);
>>>>>>> facd513706dce09721891ae561a9cd8cd4f65355
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  const [filters, setFilters] = useState({
    gender: "",
    minAge: "",
    maxAge: "",
    religion: "",
    profession: "",
  });

  const profilesPerPage = 8;

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get("http://127.0.0.1:5000/groom")
      .then((res) => {
        setGrooms(res.data);
        setFilteredGrooms(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
=======
      .get("http://localhost:3002/groom")
      .then((res) => {
        setTimeout(() => {
          setGrooms(res.data);
          setFilteredGrooms(res.data);
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setLoading(false);
>>>>>>> facd513706dce09721891ae561a9cd8cd4f65355
      });
  }, []);

  const handleGroomFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

<<<<<<< HEAD
  // const applyFilters = () => {
  //   const filtered = grooms.filter((groom) => {
  //     const age = groom.age;

  //     return (
  //       (filters.gender === "" ||
  //         groom.gender.toLowerCase() === filters.gender.toLowerCase()) &&
  //       (filters.minAge === "" || age >= parseInt(filters.minAge)) &&
  //       (filters.maxAge === "" || age <= parseInt(filters.maxAge)) &&
  //       (filters.religion === "" ||
  //         groom.religion.toLowerCase() === filters.religion.toLowerCase()) &&
  //       (filters.profession === "" ||
  //         groom.profession.toLowerCase() === filters.profession.toLowerCase())
  //     );
  //   });

  //   setFilteredGrooms(filtered);
  //   setCurrentPage(1);
  // };

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (filters.minAge) params.append("minAge", filters.minAge);
    if (filters.maxAge) params.append("maxAge", filters.maxAge);
    if (filters.religion) params.append("religion", filters.religion);
    if (filters.profession) params.append("profession", filters.profession);

    const url =
      params.toString().length > 0
        ? `http://127.0.0.1:5000/groom?${params.toString()}`
        : `http://127.0.0.1:5000/groom`;

    axios
      .get(url)
      .then((res) => {
        setFilteredGrooms(res.data);
        setCurrentPage(1);
      })
      .catch((err) => {
        console.error("Error fetching filtered data:", err);
      })
      .finally(() => {});
=======
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
>>>>>>> facd513706dce09721891ae561a9cd8cd4f65355
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

  const handleToggleWishlist = async (profile) => {
    if (!profile || !profile.id) {
      alert("Invalid profile selected!");
      return;
    }
    const isAlreadyInWishlist = wishlist.some(
      (item) => item && item.id === profile.id
    );

    try {
      if (isAlreadyInWishlist) {
        await axios.delete(`http://localhost:3001/wishlist/${profile.id}`);

        const updatedWishlist = wishlist.filter(
          (item) => item && item.id !== profile.id
        );
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        alert("Removed from wishlist!");
      } else {
        await axios.post("http://localhost:3001/wishlist", profile);
        const updatedWishlist = [...wishlist, profile];
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        alert("Added to wishlist!");
      }
    } catch (error) {
      console.error("Failed to update wishlist:", error);
      alert("Error updating wishlist.");
    }
  };

<<<<<<< HEAD
=======
  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <img
          src="https://www.delphinecouture.com/wp-content/uploads/2017/04/loading-wedding-animation.gif"
          alt="Loading..."
          height="100px"
          width="100px"
        />
        <p>Loading ...</p>
      </div>
    );
  }

>>>>>>> facd513706dce09721891ae561a9cd8cd4f65355
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
                  <div className="buttons">
                    <button
                      className="connect-btn"
                      onClick={() => handleViewProfile(groom)}
                    >
                      View Profile
                    </button>
                    <button
                      className="wishlist-btn"
                      onClick={() => handleToggleWishlist(groom)}
                    >
                      {wishlist.some((item) => item && item.id === groom.id) ? (
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/210/210545.png"
                          alt=""
                        />
                      ) : (
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2077/2077422.png"
                          alt=""
                        />
                      )}
                    </button>
                  </div>
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
