import { portfolioData } from '../data/portfolioData';
import './About.css';

const About = () => {
  const { personalInfo } = portfolioData;

  // Split description by newlines to create paragraphs
  const contentParagraphs = personalInfo.about.split('\n\n');

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content glass-card">
          {contentParagraphs.map((paragraph, index) => (
            <p key={index} className="about-text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
