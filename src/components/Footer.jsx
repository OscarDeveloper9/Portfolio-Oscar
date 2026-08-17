export default function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <p>
        ¿Hablamos? <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {" · "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <p className="footer-note">Hecho con React + Vite.</p>
    </footer>
  );
}
