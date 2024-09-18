import { useState } from "react";
import "../styles/Votes.css";
import { pulseMsg } from "../utils";

const defaultFunc = (inc_votes) =>
  console.log(
    "I'm suppose to change a vote by",
    inc_votes,
    "But I don't know what..."
  );

export function Votes({ votes, incrementVote = defaultFunc }) {
  const [voteCount, setVoteCount] = useState(votes);
  const [voteError, setVoteError] = useState(null);

  function handleClick(increment) {
    setVoteCount((count) => (count += increment));
    incrementVote(increment)
      .then(() => {
        console.log("success!");
      })
      .catch(() => {
        console.log("that didn't work...");
        setVoteCount((count) => (count -= increment));
        pulseMsg("That didn't work...", setVoteError);
      });
  }

  return (
    <div className="votes">
      <button
        className="vote-up vote-button"
        onClick={() => {
          handleClick(1);
        }}
      >
        &uarr;
      </button>
      <span className="vote-count">{voteCount}</span>
      <button
        className="vote-down vote-button"
        onClick={() => {
          handleClick(-1);
        }}
      >
        &darr;
      </button>
      {voteError ? (
        <em className="vote-error pulse-message">{voteError}</em>
      ) : null}
    </div>
  );
}
