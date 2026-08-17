const statusLabel = {
  live: "En vivo",
  soon: "Demo próximamente",
};

function ProjectCard({ project }) {
  const primaryUrl = project.status === "live" ? project.demoUrl : project.githubUrl;

  return (
    <a
      href={primaryUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card accent-${project.accent}`}
    >
      <div className="project-card-top">
        <span className={`status-dot status-${project.status}`} />
        <span className="project-status">{statusLabel[project.status]}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-description">{project.description}</p>

      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="project-actions">
        <span className="project-cta">
          {project.status === "live" ? "Ver demo →" : "Ver código →"}
        </span>
        {project.status === "live" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-code-link"
            onClick={(e) => e.stopPropagation()}
          >
            Código
          </a>
        )}
      </div>
    </a>
  );
}

export default function ProjectsPanel({ projects }) {
  return (
    <section className="projects-panel" aria-label="Proyectos">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
