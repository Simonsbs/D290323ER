import axios from "axios";

export const api = axios.create({
  baseURL: "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
