import axios from "axios";

const api = axios.create({
  baseURL: "http://200.136.206.35:3333"
});

export default api;
