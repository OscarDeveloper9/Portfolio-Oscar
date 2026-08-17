export default function Skills({ skills }) {
  return (
    <section className="skills" aria-label="Stack técnico">
      <h2 className="section-title">Stack</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-badge">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
