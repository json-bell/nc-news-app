import { Link } from "react-router-dom";
import { ErrorMsg } from "../components/ErrorMsg";
import { useContext, useEffect } from "react";
import { NavContext } from "../contexts/NavContext";
import { includeSkipNavs } from "../utils";

export function NotFound() {
  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["content"]);
  }, []);

  return (
    <ErrorMsg id="content" error={{ code: 404, msg: "Path not found" }}>
      <p>
        Go to the <Link to="/">Home Page</Link>
      </p>
    </ErrorMsg>
  );
}
