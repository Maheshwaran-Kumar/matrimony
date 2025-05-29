import React, { useState } from "react";
import "./story.css";
import nithinImg from "../../assets/nithin.jpg";
import abihav from "../../assets/abihav.jpg";
import shanjoy from "../../assets/shanjoy.jpg";
import couple1 from "../../assets/couple4.jpeg";
import couple2 from "../../assets/couple5.jpeg";
import couple3 from "../../assets/couple6.webp";
import couple4 from "../../assets/couple 7.jpeg";

const stories = [
  {
    name: "Nitin & Karuna",
    img: nithinImg,
    text: "We met on Indian.com recently and our families spoke one another. Soon later, our partially arranged marriage has turned into a love marriage.",
  },
  {
    name: "Abhinav & Sakshi",
    img: abihav,
    text: "Sakshi and I met through Indian.com, her profile was managed by her elder sister while mine was handled by my Father. Both of our guardians exchanged contact details...",
  },
  {
    name: "Shanjoy & Mitali",
    img: shanjoy,
    text: "I was looking for my life partner on Indian.com and within a few days of opening my profile, I found my appropriate better half.",
  },
  {
    name: "Rahul & Priya",
    img: couple1,
    text: "Thanks to Indian.com, we found each other and our families are now happily united.",
  },
  {
    name: "Amit & Neha",
    img: couple2,
    text: "We connected through Indian.com and instantly clicked. Our journey has been beautiful ever since.",
  },
  {
    name: "Vikram & Anjali",
    img: couple3,
    text: "Indian.com helped us find each other and we are grateful for the wonderful platform.",
  },
  {
    name: "Suresh & Kavya",
    img: couple4,
    text: "We met through Indian.com and after a few conversations, we knew we were meant to be together.",
  },
];

const VISIBLE_CARDS = 3;

const Story = () => {
  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + 1, stories.length - VISIBLE_CARDS));
  };

  return (
    <section className="success-section">
      <h1>Why you should choose Indian Matrimony </h1>
      <div className="stats-container">
        <div className="stat-item">
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-1.svg"
            alt="Verified"
          />
          <div>
            <h3>100%</h3>
            <p>Mobile-verified profiles</p>
          </div>
        </div>
        <div className="stat-item">
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-3.svg"
            alt="Handshake"
          />
          <div>
            <h3>7 Crore+</h3>
            <p>Customers served</p>
          </div>
        </div>
        <div className="stat-item">
          <img
            src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-2.svg"
            alt="Shield"
          />
          <div>
            <h3>25 Years</h3>
            <p>of successful matchmaking</p>
          </div>
        </div>
      </div>

      <h2 className="section-title">7 Million Success Stories & Counting</h2>
      <div className="stories-carousel">
        <button
          className="carousel-btn"
          onClick={handlePrev}
          disabled={startIdx === 0}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <div className="stories-container">
          {stories
            .slice(startIdx, startIdx + VISIBLE_CARDS)
            .map((story, index) => (
              <div key={index} className="story-card">
                <img src={story.img} alt={story.name} className="story-image" />
                <div className="story-content">
                  <h3>{story.name}</h3>
                  <p>{story.text}</p>
                </div>
              </div>
            ))}
        </div>
        <button
          className="carousel-btn"
          onClick={handleNext}
          disabled={startIdx >= stories.length - VISIBLE_CARDS}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Story;
