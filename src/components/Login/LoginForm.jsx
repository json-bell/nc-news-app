import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../client";

export function LoginForm() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <p>please log in:</p>
    </>
  );
}
