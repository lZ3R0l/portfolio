import { useState } from "react";
import ProjectCard from "../components/project-card";
import Popup from "../components/popup";

export default function Portfolio({ projects }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [popupProject, setPopupProject] = useState(null);

  const filtered = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <button onClick={() => setShow((s) => !s)} style={{ marginBottom: 20 }}>
        {show ? "Hide Projects" : "Show Projects"}
      </button>
      {show && (
        <>
          <input
            type="text"
            placeholder="Search by name or tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: 20, padding: 8, width: 250, display: "block" }}
          />
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: 1150,
              margin: "0 auto"
            }}
          >
            {filtered.map((project, idx) => (
              <div key={idx} onClick={() => setPopupProject(project)} style={{ cursor: "pointer" }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </>
      )}
      {popupProject && (
        <Popup project={popupProject} onClose={() => setPopupProject(null)} />
      )}
    </div>
  );
}