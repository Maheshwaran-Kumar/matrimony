import React from "react";
import "./about.css";
import aboutImg from "../../assets/logo.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Indian Matrimony</h2>

        <span>
          {/* <img
            src="https://cdn-icons-png.flaticon.com/128/6654/6654165.png"
            width="30px"
            height="30px"
            alt=""
          /> */}
          Indian Matrimony is one of the leading and most trusted matrimony
          brands, helping lakhs of people find their perfect life partner. With
          a strong presence and credibility built over the years, we aim to make
          the process of finding a life partner a joyful and meaningful
          experience.
        </span>
        <p>
          We offer a secure and user-friendly platform with thousands of
          verified profiles across communities and regions. Our advanced
          matching algorithms, personalized recommendations, and committed
          customer support help you take confident steps toward your life’s most
          important decision.
        </p>
        <p>
          Whether you're looking for a match based on community, profession, or
          location, Indian Matrimony is your trusted partner in the journey of
          togetherness.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImg} alt="About Indian Matrimony" />
      </div>
    </section>
  );
};

export default About;
