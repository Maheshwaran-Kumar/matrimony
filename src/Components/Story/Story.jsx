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
