import React from 'react';
import './Story.css';
import nithinImg from '../../assets/nithin.jpg';
import abihav from '../../assets/abihav.jpg';
import shanjoy from '../../assets/shanjoy.jpg';

const stories = [
  {
    name: 'Nitin & Karuna',
    img: nithinImg,
    text: 'We met on Indian.com recently and our families spoke one another. Soon later, our partially arranged marriage has turned into a love marriage.'
  },
  {
    name: 'Abhinav & Sakshi',
    img: abihav,
    text: 'Sakshi and I met through Indian.com, her profile was managed by her elder sister while mine was handled by my Father. Both of our guardians exchanged contact details...'
  },
  {
    name: 'Shanjoy & Mitali',
    img: shanjoy,
    text: 'I was looking for my life partner on Indian.com and within a few days of opening my profile, I found my appropriate better half.'
  }
];

const Story = () => {
  return (
    <section className="success-section">
      
      <h1>Why you should choose Indian Matrimony </h1>
      <div className="stats-container">
        <div className="stat-item">
          <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-1.svg" alt="Verified" />
          <div>
            <h3>100%</h3>
            <p>Mobile-verified profiles</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-3.svg" alt="Handshake" />
          <div>
            <h3>7 Crore+</h3>
            <p>Customers served</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-2.svg" alt="Shield" />
          <div>
            <h3>25 Years</h3>
            <p>of successful matchmaking</p>
          </div>
        </div>
      </div>

      <h2 className="section-title">7 Million Success Stories & Counting</h2>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <img src={story.img} alt={story.name} className="story-image" />
            <div className="story-content">
              <h3>{story.name}</h3>
              <p>{story.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Story;
