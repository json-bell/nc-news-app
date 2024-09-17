import "../styles/Error.css";

export function ErrorMsg({ error }) {
  console.log(error, "<-- error in ErrorMsg");
  return (
    <div className="error-container">
      <em className="error-code">{error.code}</em>
      <em className="error-msg">{error.msg}</em>
    </div>
  );
}
