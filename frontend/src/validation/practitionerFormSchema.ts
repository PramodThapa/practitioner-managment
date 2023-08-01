import * as yup from "yup";

import { isEmpty } from "lodash";

import { FORM_VALIDATION_MESSAGE } from "../constants";

export const practitionerFormSchema = yup.object().shape({
  name: yup.string().required(FORM_VALIDATION_MESSAGE.REQUIRED("name")),
  gender: yup.string().required(FORM_VALIDATION_MESSAGE.REQUIRED("gender")),
  dob: yup.object().required(FORM_VALIDATION_MESSAGE.REQUIRED("DOB")),
  workingDays: yup
    .array()
    .test(
      "workingDays",
      FORM_VALIDATION_MESSAGE.REQUIRED("working days"),
      (value) => !isEmpty(value)
    )
    .nullable(),

  contact: yup.number().required(FORM_VALIDATION_MESSAGE.REQUIRED("contact")),
});
