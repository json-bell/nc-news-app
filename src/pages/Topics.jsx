import { useContext, useEffect, useState } from "react";
import "../styles/Login.css";
import { includeSkipNavs } from "../utils";
import { NavContext } from "../contexts/NavContext";
import { fetchArticles, fetchTopics } from "../client";
import { Card } from "../components/Card";

export function Topics() {
  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["content"]);
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

  const [articleCounts, setArticleCounts] = useState({});
  useEffect(() => {
    topics.forEach(({ slug }) => {
      fetchArticles({ topic: slug }).then(({ total_count }) =>
        setArticleCounts((currCounts) => ({
          ...currCounts,
          [slug]: total_count,
        }))
      );
    });
  }, [topics]);

  return (
    <>
      <h2 id="content">Topics</h2>
      {isTopicsLoading ? (
        <p>Loading topics...</p>
      ) : (
        topics.map((topic) => (
          <Card key={topic.slug} link={`/topics/${topic.slug}`}>
            <h3 className="heading">{topic.slug}</h3>
            <p>"{topic.description}"</p>
            {articleCounts[topic.slug] ? (
              <p className="topic-article-count">
                {articleCounts[topic.slug]} articles
              </p>
            ) : null}
          </Card>
        ))
      )}
    </>
  );
}
