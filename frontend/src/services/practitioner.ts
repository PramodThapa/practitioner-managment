import { http } from "./http";
import { endpoints } from "../constants";
import { interpolate } from "../utils/string";
import { AxiosResponse } from "axios";

/**
 * Function to get practitioner.
 *
 * @returns {Promise<any>}
 */
export const getPractitioners = (): Promise<any> => {
  const url = interpolate(endpoints.PRACTITIONERS, { id: "" });

  return http.get(url);
};

/**
 * Function to delete practitioner.
 *
 * @param {string} id ID of practitioner to delete.
 *
 * @returns {Promise<any>}
 */
export const deletePractitioner = (id: string): Promise<any> => {
  const url = interpolate(endpoints.PRACTITIONERS, { id });

  return http.delete(url);
};

/**
 * Function to update practitioner.
 *
 * @param {string} practitionerID ID of practitioner to update.
 * @param {any} payload Payload to update.
 * @returns {Promise<AxiosResponse>}
 */
export const updatePractitioner = (
  practitionerID: string,
  payload: any
): Promise<AxiosResponse> => {
  const url = interpolate(endpoints.PRACTITIONERS, { practitionerID });

  return http.put(url, payload);
};

/**
 * Function to create practitioner.
 *
 * @param {any} payload Payload to update.
 * @returns {Promise<any>}
 */
export const createPractitioner = (payload: any): Promise<any> => {
  const url = interpolate(endpoints.PRACTITIONERS, { id: "" });

  return http.post(url, payload);
};
