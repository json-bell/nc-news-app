import { Link } from "react-router-dom";
import "../styles/Card.css";

export function Card({ children, extraClasses, link }) {
  const classString = extraClasses ? extraClasses.join(" ") : "";
  return (
    <div className={"card " + classString}>
      {link ? (
        <Link to={link} className="overlayed-link" aria-label={link}></Link>
      ) : null}
      <div className={"card-content " + (link ? "includes-link" : 0)}>
        {children}
      </div>
    </div>
  );
}
