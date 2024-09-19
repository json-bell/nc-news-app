import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Card } from "../Card";

export function CurrentUser() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <Card extraClasses={["current-user"]}>
        <h2 className="heading current-user-name">{loggedInUser.name}</h2>
        <div className="avatar-container">
          <img className="current-user-avatar" src={loggedInUser.avatar_url} />
        </div>
      </Card>
    </>
  );
}
