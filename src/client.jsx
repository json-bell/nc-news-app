import axios from "axios";

const defaultCatch = (err) => {
  console.log(err.response.data);
};

const apiClient = axios.create({
  baseURL: "https://nc-news-e223.onrender.com/api/",
});

export const fetchArticles = (params) => {
  return apiClient
    .get("articles", { params })
    .then(({ data }) => data)
    .catch(defaultCatch);
};

export const fetchArticleById = (article_id) => {
  return apiClient.get(`/articles/${article_id}`).then(({ data }) => data);
};

export const fetchCommentsByArticle = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data)
    .catch((err) => console.log("comments err", err));
};
// When article isn't found this is throwing an extra error - is a catch here not enough? Adding one in comments removes the error...

export const patchArticleVotes = (article_id, inc_votes) => {
  const payload = { inc_votes };
  return apiClient.patch(`articles/${article_id}`, payload);
};

export const patchCommentVotes = (comment_id, inc_votes) => {
  const payload = { inc_votes };
  return apiClient.patch(`comments/${comment_id}`, payload);
};

export const postComment = ({ article_id, body, username }) => {
  const payload = { username, body };
  console.log(payload);
  return apiClient.post(`articles/${article_id}/comments`, payload);
};
