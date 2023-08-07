import * as yup from "yup";

import { FORM_VALIDATION_MESSAGE } from "../constants";

/**
 * Form validation schema for sign up.
 */
export const signUpValidationSchema = yup.object({
  username: yup.string().required(FORM_VALIDATION_MESSAGE.REQUIRED("Username")),
  password: yup
    .string()
    .min(6, FORM_VALIDATION_MESSAGE.MIN_LENGTH("Password", 6))
    .required(FORM_VALIDATION_MESSAGE.REQUIRED("Password")),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], FORM_VALIDATION_MESSAGE.MATCH("Password"))
    .required(FORM_VALIDATION_MESSAGE.REQUIRED("Password")),
});
