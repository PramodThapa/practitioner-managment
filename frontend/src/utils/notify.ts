import axios, { AxiosError } from "axios";

import { toast } from "react-toastify";

/**
 * Function to handle error.
 *
 * @param {Error | AxiosError | any} error Error
 */
export const handleError = (error: Error | AxiosError | any) => {
  if (axios.isAxiosError(error)) toast.error(error?.response?.data?.message);
};

/**
 * Function to handle success.
 *
 * @param {string} message Success message.
 */
export const handleSuccess = (message: string) => {
  toast.success(message);
};
