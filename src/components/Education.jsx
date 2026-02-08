import { portfolioData } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  const { education, certifications, honors } = portfolioData;

  return (
    <section className="section education-section" id="education">
      <div className="container">
        
        <div className="education-grid">
          {/* Education Column */}
          <div className="education-column">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <div className="education-card glass-card" key={index}>
                  <div className="edu-header">
                    {edu.logo && <img src={edu.logo} alt={edu.school} className="edu-logo" />}
                    <div>
                      <h3 className="school-name">{edu.school}</h3>
                      <p className="degree">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="edu-details">
                    <span className="edu-date">{edu.duration}</span>
                    <span className="edu-grade">Grade: {edu.grade}</span>
                  </div>
                  {edu.activities && <p className="edu-activities">{edu.activities}</p>}
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{marginTop: 'var(--spacing-lg)'}}>Honors & Awards</h2>
            <div className="honors-list">
               {honors.map((honor, index) => (
                 <div className="honor-card glass-card" key={index}>
                   <div className="honor-header">
                      {honor.logo && <img src={honor.logo} alt={honor.issuer} className="honor-logo" />}
                      <div>
                        <h3 className="honor-title">{honor.title}</h3>
                        <p className="honor-issuer">{honor.issuer} | {honor.date}</p>
                      </div>
                   </div>
                   {honor.description && <p className="honor-desc">{honor.description}</p>}
                   {honor.score && <p className="honor-score">Score: {honor.score}</p>}
                 </div>
               ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="certifications-column">
            <h2 className="section-title">Certifications</h2>
            <div className="certs-list">
              {certifications.map((cert, index) => (
                <div className="cert-item glass-card" key={index}>
                  {cert.logo && <img src={cert.logo} alt={cert.issuer} className="cert-logo" />}
                  <div className="cert-content">
                    <h3 className="cert-name">{cert.name}</h3>
                    <div className="cert-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
