import axios from "axios";

export const api = axios.create({
  baseURL: "https://hateuapi-production.up.railway.app/",
});
