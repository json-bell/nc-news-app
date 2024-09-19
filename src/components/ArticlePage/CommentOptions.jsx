import "../../styles/Options.css";

export function CommentOptions() {
  return (
    <ul className="options-list">
      <li>
        <button className="option-button">Edit</button>
      </li>
      <li>
        <button className="option-button">Delete</button>
      </li>
    </ul>
  );
}
