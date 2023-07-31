import axios, { InternalAxiosRequestConfig } from "axios";

import { appConfig } from "../../config";

import { CONTENT_TYPE_JSON } from "../constants";

/**
 * Axios instance for pipeline http.
 */
const http = axios.create({
  baseURL: appConfig.appUrl,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
    Accept: CONTENT_TYPE_JSON,
  },
});

/**
 * Request interceptor
 */
http.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    const accessToken = "";

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**
 * Response interceptor.
 */
http.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = "";
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;

      return http(originalRequest);
    }

    return Promise.reject(error);
  }
);

export { http };
