import { Link } from "react-router-dom";
import "../../styles/Nav.css";
import "../../styles/SkipNav.css";
import { SkipNav } from "./SkipNav";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Nav() {
  const { loggedInUser } = useContext(UserContext);
  const loginNavString = loggedInUser.username ? "Change account" : "Log In";

  return (
    <nav>
      <SkipNav />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">{loginNavString}</Link>
        </li>
      </ul>
      <div id="end-nav" />
    </nav>
  );
}
