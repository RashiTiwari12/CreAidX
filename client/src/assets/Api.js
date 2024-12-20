import axios from "axios";
// import { ACCESS_TOKEN } from "./Constant";

// const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";
const apiUrl = "";
const ACCESS_TOKEN = "access";
const REFRESH_TOKEN = "refresh";

const api = axios.create({
  baseURL: "https://creaidx.onrender.com", // Your deployed backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
