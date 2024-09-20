import "../styles/Error.css";
import { Card } from "./Card";

export function ErrorMsg({ error, children }) {
  // console.log(error, "<-- error in ErrorMsg");
  return (
    <Card>
      <div className="error-container">
        <em className="error-code">{error.code}</em>
        <em className="error-msg">{error.msg}</em>
      </div>
      {children}
    </Card>
  );
}
