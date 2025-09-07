export default function Popup({ project, onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff",
        color: "#222",
        borderRadius: 10,
        padding: 32,
        maxWidth: 400,
        width: "90%",
        position: "relative"
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 10, right: 10, fontSize: 18, background: "none", border: "none", cursor: "pointer"
        }}>✕</button>
        <img src={project.screenshot} alt={project.name} style={{ width: "100%", borderRadius: 8, marginBottom: 16 }} />
        <h2>{project.name}</h2>
        <p><strong>Tech Used:</strong> {project.tech.join(", ")}</p>
        <p><strong>What it does:</strong> {project.writeup.what}</p>
        <p><strong>What I learned:</strong> {project.writeup.learned}</p>
        <p><strong>Role:</strong> {project.writeup.role}</p>
        <p><strong>Challenges:</strong> {project.writeup.challenges}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
}