import "./background.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Background = () => {
  const [gender, setGender] = useState("Man");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (gender === "Man") {
      navigate("/groom");
    } else {
      navigate("/bride");
    }
  };

  return (
    <div className="background">
      <div className="overlay">
        <h1 className="headline">Two souls. One journey. A lifetime of love</h1>
        <p className="subhead">Find the one who completes your story</p>

        <div className="search-box">
          <div className="search-field">
            <label> Looking for </label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
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
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
              </select>
            </div>
          </div>

          <div className="search-field">
            <label> Religion</label>
            <select>
              <option>Select</option>
              <option>Hindu</option>
              <option>Muslim</option>
            </select>
          </div>

          <div className="search-field">
            <label> Mother Tongue</label>
            <select>
              <option>Select</option>
              <option>Tamil</option>
              <option>Hindi</option>
            </select>
          </div>

          <button className="begin-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Background;
