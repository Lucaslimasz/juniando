import axios from "axios";

export const api = axios.create({
  baseURL: "https://juniando-backend-production.up.railway.app",
});
