import { useContext, useEffect } from "react";
import { CurrentLogin } from "../components/Login/CurrentLogin";
import { LoginForm } from "../components/Login/LoginForm";
import "../styles/Login.css";
import { includeSkipNavs } from "../utils";
import { NavContext } from "../contexts/NavContext";

export function Login() {
  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["end-nav"]);
  }, []);

  return (
    <>
      <h2>Login</h2>
      <CurrentLogin />
      <LoginForm />
    </>
  );
}
