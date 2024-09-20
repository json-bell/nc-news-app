import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../client";
import { Card } from "../Card";
import "../../styles/Forms.css";
import { pulseMsg } from "../../utils";

export function LoginForm() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({ username: "" });

  useEffect(() => {
    setIsUsersLoading(true);
    fetchUsers()
      .then(({ users }) => {
        setUsers(users);
        setIsUsersLoading(false);
      })
      .catch((err) => {
        console.log("Failed to connect to users");
        console.log(err);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (inputs.username.length === 0) {
      pulseMsg("Username required...", setError);
    } else {
      const attemptedLoggedUser = users.find(
        (user) => user.username === inputs.username
      );
      if (attemptedLoggedUser) {
        setLoggedInUser(attemptedLoggedUser);
        navigate(-1);
      } else {
        pulseMsg("User doesn't exist...", setError);
      }
    }
  }

  function handleUpdate(event) {
    setInputs({ username: event.target.value });
    setError("");
  }

  return (
    <>
      <Card>
        <h3 className="heading">Enter your username to login</h3>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username" className="label-username">
            Username:
          </label>
          <input
            id="username"
            placeholder="username... e.g. cooljmessy"
            className={"input-username " + (error ? "INVALIDINPUT" : "")}
            value={inputs.username}
            onChange={handleUpdate}
          ></input>
          {isUsersLoading ? (
            <button type="button" className="button-disabled login-button">
              Loading...
            </button>
          ) : (
            <button type="submit" className="form-button login-button">
              Login
            </button>
          )}
          {error ? (
            <em className="login-error pulse-message">{error}</em>
          ) : null}
        </form>
      </Card>
    </>
  );
}
