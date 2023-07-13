import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});
// console.log(process.env.REACT_APP_API);
api.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers.common["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export default api;
