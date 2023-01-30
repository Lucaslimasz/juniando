import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.jsonbin.io/v3/b",
});
