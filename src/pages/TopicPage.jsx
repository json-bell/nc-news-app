import { Link, useParams } from "react-router-dom";
import { ArticlesContainer } from "../components/ArticleList/ArticlesContainer";
import { fetchTopic } from "../client";
import { useContext, useEffect, useState } from "react";
import { ErrorMsg } from "../components/ErrorMsg";
import { NavContext } from "../contexts/NavContext";
import { includeSkipNavs } from "../utils";

export function TopicPage() {
  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["article", "comments"]);
  }, []);

  const params = useParams();
  const topic = params.slug;

  const [topicDescription, setTopicDescription] = useState("");
  const [isTopicLoading, setIsTopicLoading] = useState(true);
  const [isTopicInvalid, setIsTopicInvalid] = useState(false);
  const [topicError, setTopicError] = useState({});

  useEffect(() => {
    setIsTopicLoading(true);
    fetchTopic(topic).then(({ topic }) => {
      if (topic) {
        setTopicDescription(topic.description);
        setIsTopicLoading(false);
      } else {
        setIsTopicInvalid(true);
        setTopicError({ code: 404, msg: "Topic not found" });
      }
    });
  }, []);

  return (
    <>
      <h2>{topic}</h2>
      {isTopicInvalid ? (
        <>
          <ErrorMsg error={topicError} />
          {
            <p>
              Create it <Link>here</Link>
            </p>
          }
        </>
      ) : isTopicLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{topicDescription}</p>
          <ArticlesContainer topic={topic} />
        </>
      )}
    </>
  );
}
