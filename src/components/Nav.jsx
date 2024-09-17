import { Link } from "react-router-dom";
import "../styles/Nav.css";
import "../styles/SkipNav.css";
import { SkipNav } from "./SkipNav";

export function Nav() {
  return (
    <nav>
      <SkipNav />
      <ul className="nav-list">
        {/* optimally I want a dynamic skip nav that for instance on Home
         page can skip to pagination or skip to articles */}
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div id="end-nav" />
    </nav>
  );
}
