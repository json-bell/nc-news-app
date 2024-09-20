import { useContext, useEffect, useState } from "react";
import "../styles/Login.css";
import { includeSkipNavs } from "../utils";
import { NavContext } from "../contexts/NavContext";
import { fetchTopics } from "../client";
import { Card } from "../components/Card";

export function Topics() {
  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["end-nav"]);
  }, []);

  const [topics, setTopics] = useState([]);
  const [isTopicsLoading, setIsTopicsLoading] = useState(true);

  useEffect(() => {
    setIsTopicsLoading(true);
    fetchTopics().then(({ topics }) => {
      setTopics(topics);
      setIsTopicsLoading(false);
    });
  }, []);

  const [topicCounts, setTopicCounts] = useState({});
  useEffect(() => {}, [topics]);

  return (
    <>
      <h2>Topics</h2>
      {isTopicsLoading ? (
        <p>Loading topics...</p>
      ) : (
        topics.map((topic) => (
          <Card key={topic.slug} link={`/topics/${topic.slug}`}>
            <h3 className="heading">{topic.slug}</h3>
            <p>{topic.description}</p>
          </Card>
        ))
      )}
    </>
  );
}
