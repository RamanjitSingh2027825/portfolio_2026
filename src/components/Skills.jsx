import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container glass-card">
          <div className="skills-cloud">
            {skills.map((skill, index) => (
              <span className="skill-tag" key={index} style={{animationDelay: `${index * 0.05}s`}}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
