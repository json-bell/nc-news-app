import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://nc-news-e223.onrender.com/api/",
});
