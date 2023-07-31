import * as yup from "yup";

import { FORM_VALIDATION_MESSAGE } from "../constants";

export const loginValidationSchema = yup.object({
  username: yup.string().required(FORM_VALIDATION_MESSAGE.REQUIRED("Username")),
  password: yup.string().required(FORM_VALIDATION_MESSAGE.REQUIRED("Password")),
});
