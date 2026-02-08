import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card glass-card" key={index}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-duration">{project.duration}</span>
              </div>
              {project.associatedWith && (
                <p className="associated-with">Associated with {project.associatedWith}</p>
              )}
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.skills.map((skill, idx) => (
                  <span className="tag" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
