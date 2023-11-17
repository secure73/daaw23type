import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "x-www-form-urlencoded";
axios.interceptors.request.use(async (request) => {
  // document.body.classList.add('loading-indicator');
  let token = localStorage.getItem("loginToken");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

axios.interceptors.response.use(
  function (response) {
    // document.body.classList.remove('loading-indicator');
    return response;
  },
  function (error) {
    // document.body.classList.remove('loading-indicator');
    toast.error(error.response?.data?.error);
    throw error;
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  post: axios.post,
  get: axios.get,
};
