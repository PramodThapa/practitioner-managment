import { http } from "./http";
import { endpoints } from "../constants";
import { interpolate } from "../utils/string";

/**
 *
 * @param payload
 * @returns
 */
export const login = (payload: any) => {
  const url = interpolate(endpoints.LOGIN);

  return http.post(url, payload);
};
