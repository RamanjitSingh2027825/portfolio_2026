import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  {exp.logo && (
                    <img src={exp.logo} alt={exp.company} className="company-logo" />
                  )}
                  <div>
                    <h3 className="role">{exp.role}</h3>
                    <h4 className="company">{exp.company}</h4>
                    <span className="duration">{exp.duration} | {exp.location}</span>
                  </div>
                </div>
                <p className="description">{exp.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
