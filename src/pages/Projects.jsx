import { projects } from "../data";

function Projects() {
  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4>Technologies</h4>
            <span>{project.technologies}</span>

            <div className="project-buttons">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                GitHub Code
              </a>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="demo-btn"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;