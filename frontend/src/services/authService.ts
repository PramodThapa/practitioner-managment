import { axiosConfig } from ".";
import { endpoints } from "../constants";
import { interpolate } from "../utils/string";
import axios, { AxiosResponse } from "axios";

/**
 * Function to return axios instance for user login post method.
 *
 * @param {any} payload Payload for user login.
 *
 * @returns {Promise<AxiosResponse>}
 */
export const userLogin = (payload: any): Promise<AxiosResponse> => {
  const url = interpolate(endpoints.LOGIN);

  console.log(url);

  return axios.post(url, payload, { ...axiosConfig });
};

/**
 * Function to return axios instance for user sign up post method.
 *
 * @param {any} payload
 *
 * @returns {Promise<AxiosResponse>}
 */
export const userSignUp = (payload: any): Promise<AxiosResponse> => {
  const url = interpolate(endpoints.SIGNUP);

  return axios.post(url, payload, {
    ...axiosConfig,
  });
};

/**
 * Function to refresh access token.
 *
 * @param {any} payload
 * @returns {Promise<AxiosResponse>}
 */
export const refreshAccessToken = (payload: any): Promise<AxiosResponse> => {
  const url = interpolate(endpoints.ACCESS_TOKEN, payload);

  return axios.post(url, payload, {
    ...axiosConfig,
  });
};
