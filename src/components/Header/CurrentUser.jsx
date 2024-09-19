import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Card } from "../Card";
import { Link } from "react-router-dom";

const smileyURL = `https://images.saatchiart.com/saatchi/810826/art/7386151/6455355-HSC00001-7.jpg`;

export function CurrentUser() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <Card extraClasses={["current-user"]}>
        <h2 className="current-user-name">{loggedInUser.name || "Guest"}</h2>
        <div className="avatar-container">
          <img
            className="current-user-avatar"
            src={loggedInUser.avatar_url || smileyURL}
          />
        </div>
        {loggedInUser.username ? (
          <p className="current-user-username">{loggedInUser.username}</p>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </Card>
    </>
  );
}
