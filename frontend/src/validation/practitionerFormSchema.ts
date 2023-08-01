import * as yup from "yup";

import { isEmpty } from "lodash";

import { FORM_VALIDATION_MESSAGE } from "../constants";

/**
 * Form validation schema for add/edit practitioner.
 */
export const practitionerFormSchema = yup.object().shape({
  dob: yup.object().required(FORM_VALIDATION_MESSAGE.REQUIRED("DOB")),
  name: yup.string().required(FORM_VALIDATION_MESSAGE.REQUIRED("name")),
  gender: yup.string().required(FORM_VALIDATION_MESSAGE.REQUIRED("gender")),

  startDate: yup
    .mixed()
    .required(FORM_VALIDATION_MESSAGE.REQUIRED("start date")),

  endDate: yup.mixed().required(FORM_VALIDATION_MESSAGE.REQUIRED("end date")),

  workingDays: yup
    .array()
    .test(
      "workingDays",
      FORM_VALIDATION_MESSAGE.REQUIRED("working days"),
      (value) => !isEmpty(value)
    )
    .nullable(),

  contact: yup
    .string()
    .matches(
      /^\+?\d{1,4}[-\s.]?\(?\d{1,}\)?[-\s.]?\d{1,}[-\s.]?\d{1,}$/,
      FORM_VALIDATION_MESSAGE.TYPE_VALID("contact")
    )
    .required(FORM_VALIDATION_MESSAGE.REQUIRED("contact")),
});
