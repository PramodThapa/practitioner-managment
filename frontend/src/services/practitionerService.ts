import axios from "axios";

import { http } from "./http";
import { endpoints } from "../constants";
import { interpolate } from "../utils/string";
import { PractitionerData } from "../component/Practitioner";
import { CLOUDINARY_API } from "../../config";

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
 * @param  {PractitionerData} data Practitioner data.
 * @returns {Promise<any>}
 */
export const updatePractitioner = (data: PractitionerData): Promise<any> => {
  const { _id: id, ...payload } = data;
  const url = interpolate(endpoints.PRACTITIONERS, { id });

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

/**
 * Upload user image.
 *
 * @param {FormData} payload
 * @returns {Promise}
 */
export const uploadImage = (payload: FormData): Promise<any> => {
  return axios.post(CLOUDINARY_API, payload);
};
