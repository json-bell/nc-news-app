import { useParams } from "react-router-dom";
import { ArticlesContainer } from "../components/ArticleList/ArticlesContainer";
import { fetchTopic } from "../client";
import { useEffect, useState } from "react";

export function TopicPage() {
  const params = useParams();
  const topic = params.slug;

  const [topicDescription, setTopicDescription] = useState("");
  const [isTopicLoading, setIsTopicLoading] = useState(true);

  useEffect(() => {
    setIsTopicLoading(true);
    fetchTopic(topic).then(({ topic }) => {
      console.log(topic);
      setTopicDescription(topic.description);
      setIsTopicLoading(false);
    });
  }, []);

  return (
    <>
      <h2>{topic}</h2>
      <p>{isTopicLoading ? "Loading..." : topicDescription}</p>
      <ArticlesContainer topic={topic} />
    </>
  );
}
