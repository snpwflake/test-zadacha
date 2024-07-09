import axios from "axios";

export const API_URL = "https://jellybellywikiapi.onrender.com/api";

const $api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  return config;
});

export default $api;
