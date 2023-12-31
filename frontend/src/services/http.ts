import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

import { APP_CONFIG } from "../../config";

import { CONTENT_TYPE_JSON } from "../constants";

import {
  refreshAccessToken,
  getUserFromLocalStorage,
  addUserLoginToLocalStorage,
  getAccessTokenFromLocalStorage,
  getRefreshTokenFromLocalStorage,
} from ".";

import { logOut } from "../utils";

/**
 * Axios config.
 */
export const axiosConfig: AxiosRequestConfig = {
  baseURL: APP_CONFIG.appUrl,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
    Accept: CONTENT_TYPE_JSON,
  },
};

/**
 * Axios instance for http.
 */
const http = axios.create({
  ...axiosConfig,
});

/**
 * Request interceptor.
 */
http.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    const accessToken = getAccessTokenFromLocalStorage();

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
    return response?.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      const { id } = getUserFromLocalStorage();
      const refreshToken = getRefreshTokenFromLocalStorage() || "";

      try {
        const response = await refreshAccessToken({
          id,
          refreshToken,
        });

        const { data } = response?.data;
        addUserLoginToLocalStorage(data?.token, data?.user);

        return http(originalRequest);
      } catch (error) {
        logOut();

        return;
      }
    }

    return Promise.reject(error);
  }
);

export { http };
