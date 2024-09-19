import { CurrentUser } from "./CurrentUser";
import { Nav } from "./Nav";
import "../../styles/Header.css";

export function Header() {
  return (
    <header>
      <h1>Newser Friendly</h1>
      <Nav />
      <CurrentUser />
    </header>
  );
}
