import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();
  const [whatsappMessage, setWhatsappMessage] = useState("Hi Raman! I found your portfolio and would like to connect.");

  const handleWhatsappClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${personalInfo.phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <h2 className="footer-title">Let's Connect</h2>
        <p className="footer-text">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="connect-grid">
          {/* Left Side - Quick Links */}
          <div className="connect-card glass-card">
            <h3 className="connect-card-title">Quick Links</h3>
            <div className="quick-links">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="quick-link-item">
                <div className="quick-link-icon linkedin">
                  <FaLinkedin />
                </div>
                <div className="quick-link-info">
                  <span className="quick-link-label">LinkedIn</span>
                  <span className="quick-link-value">Connect with me</span>
                </div>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="quick-link-item">
                <div className="quick-link-icon email">
                  <FaEnvelope />
                </div>
                <div className="quick-link-info">
                  <span className="quick-link-label">Email</span>
                  <span className="quick-link-value">{personalInfo.email}</span>
                </div>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="quick-link-item">
                <div className="quick-link-icon phone">
                  <FaPhoneAlt />
                </div>
                <div className="quick-link-info">
                  <span className="quick-link-label">Phone</span>
                  <span className="quick-link-value">+91 {personalInfo.phone}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - WhatsApp */}
          <div className="connect-card glass-card whatsapp-card">
            <h3 className="connect-card-title">
              <FaWhatsapp className="whatsapp-icon" /> Chat on WhatsApp
            </h3>
            <p className="whatsapp-subtitle">Send me a personalized message</p>
            <textarea
              className="whatsapp-input"
              value={whatsappMessage}
              onChange={(e) => setWhatsappMessage(e.target.value)}
              placeholder="Type your message..."
              rows={4}
            />
            <button className="whatsapp-send-btn" onClick={handleWhatsappClick}>
              <FaWhatsapp /> Send Message
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="made-with">Built with React & Vite <span role="img" aria-label="heart">❤️</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

