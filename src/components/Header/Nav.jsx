import { Link } from "react-router-dom";
import "../../styles/Nav.css";
import "../../styles/SkipNav.css";
import { SkipNav } from "./SkipNav";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Nav() {
  const { loggedInUser } = useContext(UserContext);
  const loginNavString = loggedInUser.username ? "Change account" : "Log In";

  const navLinks = [
    { link: "/", name: "Home" },
    { link: "/login", name: loginNavString },
    { link: "/topics/", name: "Topics" },
  ];
  return (
    <nav>
      <SkipNav />
      <ul className="nav-list">
        {navLinks.map((linkInfo) => (
          <li className="nav-item" key={linkInfo.name}>
            <Link to={linkInfo.link}>{linkInfo.name}</Link>
          </li>
        ))}
      </ul>
      <div id="end-nav" />
    </nav>
  );
}
