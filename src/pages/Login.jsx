import { CurrentLogin } from "../components/Login/CurrentLogin";
import { LoginForm } from "../components/Login/LoginForm";
import "../styles/Login.css";

export function Login() {
  return (
    <>
      <h2>Login</h2>
      <CurrentLogin />
      <LoginForm />
    </>
  );
}
