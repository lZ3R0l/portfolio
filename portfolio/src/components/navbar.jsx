import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 20, marginBottom: 30 }}>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
    </nav>
  );
}