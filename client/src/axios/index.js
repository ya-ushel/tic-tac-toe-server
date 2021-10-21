import axios from "axios";

const instance = axios.create({
  baseURL: "https://tic-tac-toe-1337.herokuapp.com/",
  timeout: 1000,
  headers: { "Access-Control-Allow-Origin": "*" },
});

instance.interceptors.request.use((config) => {
  config.headers.post["header1"] = "value";
  return config;
});

export default instance;
