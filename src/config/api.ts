import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3333"
    : "https://juniando-backend.vercel.app";

export const api = axios.create({
  baseURL: url,
});
