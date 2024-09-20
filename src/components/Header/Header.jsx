import { CurrentUser } from "./CurrentUser";
import { Nav } from "./Nav";
import "../../styles/Header.css";

export function Header() {
  return (
    <header>
      <h1 className="app-title">Newser Friendly</h1>
      <Nav />
      <CurrentUser />
    </header>
  );
}
