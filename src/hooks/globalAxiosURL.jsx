import axios from "axios";

const URL = axios.create({
  baseURL: "http://localhost:3002/api",
});

const globalAxiosURL = () => {
  return URL;
};

export default globalAxiosURL;
