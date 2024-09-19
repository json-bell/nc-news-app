import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function CurrentLogin() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  function handleLogout() {
    setLoggedInUser({ username: null, name: null, avatar_url: null });
  }

  return (
    <>
      {loggedInUser.username ? (
        <>
          <p>Currently logged in as: {loggedInUser.username}</p>
          {loggedInUser.username ? (
            <button className="form-button" onClick={handleLogout}>
              Logout
            </button>
          ) : null}
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </>
  );
}
