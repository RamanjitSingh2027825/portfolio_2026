import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-role">{personalInfo.role}</h2>
          <p className="hero-description">
            Building intelligent solutions with code. Passionate about AI, full-stack development, and creating seamless digital experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container glass-card">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name} 
              className="hero-image" 
            />
            <div className="hero-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
