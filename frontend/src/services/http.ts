import axios, { InternalAxiosRequestConfig } from "axios";
import { appConfig } from "../../config";
import { CONTENT_TYPE_JSON } from "../constants/constants";
/**
 * Axios instance for pipeline http.
 */
const http = axios.create({
  baseURL: appConfig.apiBaseUrl,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
    Accept: CONTENT_TYPE_JSON,
  },
});

http.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    const accessToken = "test";

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = "test-2";
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;

      return http(originalRequest);
    }

    return Promise.reject(error);
  }
);

export { http };
