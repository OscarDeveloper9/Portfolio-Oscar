export default function Hero({ profile }) {
  return (
    <header className="hero">
      <div className="hero-eyebrow">Portfolio</div>
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-tagline">{profile.tagline}</p>
      <p className="hero-bio">{profile.bio}</p>

      <div className="hero-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-link primary">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link">
          LinkedIn
        </a>
        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="hero-link">
          Sitio web
        </a>
      </div>
    </header>
  );
}
