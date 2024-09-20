import { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";

export function SkipNav() {
  const { skipNavInfo } = useContext(NavContext);

  return (
    <>
      <ul className="skip-nav-menu">
        {skipNavInfo.map(({ id, contentName }) => (
          <li key={id}>
            <a href={`#${id}`}>Skip to {contentName}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
