import "../styles/Card.css";

export function Card({ children, extraClasses }) {
  const classString = extraClasses ? extraClasses.join(" ") : "";
  return <div className={"card " + classString}>{children}</div>;
}
