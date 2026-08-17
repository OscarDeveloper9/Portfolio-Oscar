import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import ProjectsPanel from "./components/ProjectsPanel.jsx";
import Footer from "./components/Footer.jsx";
import { projects, skills, profile } from "./data/projects.js";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="page-inner">
        <Hero profile={profile} />
        <Skills skills={skills} />
        <ProjectsPanel projects={projects} />
        <Footer profile={profile} />
      </div>
    </div>
  );
}
