import { portfolioData } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Let's Connect</h2>
          <p className="footer-text">
            Open to opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="social-links">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="social-link">Email</a>
            <a href={`tel:${personalInfo.phone}`} className="social-link">Phone</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="made-with">Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
