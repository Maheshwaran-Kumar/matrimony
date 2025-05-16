import React, { useState } from "react";
import { Phone } from "lucide-react";
import "./contact.css";

const faqs = [
  {
    question: "How do I find a suitable match on IndianMatrimony?",
    answer: (
      <p>
        To find a suitable match on IndianMatrimony, register and create your
        profile with accurate details. Use the available filters to search for
        matches based on your preferences. Express interest or send messages to
        profiles you like, and wait for a response to start a conversation and
        know more about your potential match.
      </p>
    ),
  },
  {
    question: "How do I contact a match I am interested in?",
    answer: (
      <p>
        To contact a match, click on the profile you are interested in and use
        the 'Send Interest' or 'Message' button to connect. If your membership
        allows, you can also view contact details directly to get in touch.
      </p>
    ),
  },
  {
    question: "Is my information safe on IndianMatrimony?",
    answer: (
      <p>
        Yes, IndianMatrimony.com is trustworthy due to its strict profile
        verification process and commitment to user safety. Our robust security
        measures and positive user reviews further enhance the reliability.
      </p>
    ),
  },
  {
    question: "Why is IndianMatrimony.com the best matrimonial website?",
    answer: (
      <p>
        IndianMatrimony.com is India’s best matrimonial site, with over 4 Lakh
        success stories. It has an extensive, verified user database and also
        offers personalized matchmaking services. Its user-friendly interface
        and advanced search algorithms makes finding a compatible partner easier
        and more efficient.
      </p>
    ),
  },
  {
    question: "Can I hide my profile from certain users?",
    answer: (
      <p>
        Yes, you can block or restrict users from viewing your profile by
        adjusting your privacy settings, giving you control over who can see
        your information.
      </p>
    ),
  },
];
const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <div className="contact-hero-text">
          <h1>The many ways to reach us</h1>
          <h2>Call, Chat, Mail or Visit our store</h2>
        </div>
        <div className="contact-hero-img">
          <img
            src="https://images.pexels.com/photos/8867631/pexels-photo-8867631.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="Customer Support"
          />
        </div>
        <div className="contact-hero-bgline"></div>
      </div>
      <div className="contact-desc">
        IndianMatrimony is eager to help you find your partner at the earliest.
        Our customer service team will be pleased to assist you anytime you have
        a query. You can contact our customer service team in one of the
        following ways.
      </div>
      <div className="contact-flex">
        {/* Helpline Numbers */}
        <div className="contact-helpline">
          <div className="contact-title">Helpline Numbers</div>
          <div className="contact-flag-row">
            <img
              src="https://flagcdn.com/in.svg"
              alt="India"
              className="flag"
            />
            <span className="country">INDIA</span>
            <span>0-8144-99-88-77</span>
          </div>
          <div className="contact-flag-row">
            <img src="https://flagcdn.com/ae.svg" alt="UAE" className="flag" />
            <span className="country">UAE</span>
            <span>+971 525060879</span>
          </div>
        </div>
        {/* Payment Queries */}
        <div className="contact-payment">
          <div className="contact-title">For Holoscope Matching</div>
          <div className="contact-payment-row">
            <span className="phone-icon">
              <Phone color="#219653" size={28} />
            </span>
            <span>Call +91 9280043860</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">
          <span style={{ fontSize: 24, marginRight: 8 }}>❓</span> Frequently
          Asked Questions
        </h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>
                  {idx + 1}. {faq.question}
                </span>
                <span className="faq-arrow">
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
