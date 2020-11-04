import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:4001",
});

export default Axios;
