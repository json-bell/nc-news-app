import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function CurrentLogin() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <>
      <p>Currently logged in: {loggedInUser.username}</p>
    </>
  );
}
