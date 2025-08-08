export default function ProjectCard({ name, screenshot, github, tech, writeup }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 10,
      width: 320,
      background: "#fff",
      color: "#222",
      boxShadow: "0 2px 8px #0001",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      margin: "14px"
    }}>
      <img src={screenshot} alt={name} style={{ width: "100%", height: 160, objectFit: "cover" }} />
      <div style={{ padding: 16, flex: 1, display: "flex", flexDirection: "column" }}>
        <h2 style={{ fontSize: 22, margin: "0 0 8px 0" }}>{name}</h2>
        <div style={{ marginBottom: 8 }}>
          <strong>Tech Used:</strong>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {tech.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
        <div style={{ fontSize: 15, marginBottom: 8 }}>
          <strong>What it does:</strong> {writeup.what}<br />
          <strong>What I learned:</strong> {writeup.learned}<br />
          <strong>Role:</strong> {writeup.role}<br />
          <strong>Challenges:</strong> {writeup.challenges}
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer" style={{
          marginTop: "auto",
          color: "#fff",
          background: "#2d6cdf",
          padding: "8px 0",
          borderRadius: 5,
          textAlign: "center",
          textDecoration: "none",
          fontWeight: 600
        }}>
          View on GitHub
        </a>
      </div>
    </div>
  )
}