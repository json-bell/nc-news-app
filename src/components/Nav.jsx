import { Link } from "react-router-dom";
import "../styles/Nav.css";

export function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
