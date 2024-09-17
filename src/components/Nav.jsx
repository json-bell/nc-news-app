import { Link } from "react-router-dom";
import "../styles/Nav.css";
import "../styles/SkipNav.css";

export function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        {/* optimally I want a dynamic skip nav that can skip to articles */}
        <div>
          <a href="#main" className="skip-nav">
            Skip to content
          </a>
        </div>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
