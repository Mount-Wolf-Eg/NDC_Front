import axios from "axios";

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "multipart/form-data;",
    lang: sessionStorage.getItem("lang") || "ar",
  },
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
