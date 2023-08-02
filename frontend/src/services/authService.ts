import { http } from "./http";
import { endpoints } from "../constants";
import { interpolate } from "../utils/string";
import { AxiosResponse } from "axios";

/**
 * Function to return axios instance for user login post method.
 *
 * @param {any} payload Payload for user login.
 *
 * @returns {Promise<AxiosResponse>}
 */
export const userLogin = (payload: any): Promise<AxiosResponse> => {
  const url = interpolate(endpoints.LOGIN);

  return http.post(url, payload);
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

  return http.post(url, payload);
};
