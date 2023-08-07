import { forwardRef, useImperativeHandle } from "react";

import styled from "styled-components";

import {
  Select,
  Checkbox,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  Autocomplete,
  FormControlLabel,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Dayjs } from "dayjs";

import { useFormik } from "formik";

import { Gender, Days } from "../../types";

import { ImageUpload, ErrorMessage } from "../common";
import { practitionerFormSchema } from "../../validation";

const FormWrapper = styled.div`
  .mt-4 {
    margin-top: var(--spacing-4x);
  }

  .fullWidth {
    width: 100%;
  }
`;

export interface PractitionerFormValues {
  name: string;
  gender: string;
  imageURL: string;
  contact: string;
  dob: Dayjs | null;
  endDate: Dayjs | null;
  workingDays: string[];
  startDate: Dayjs | null;
  isICUSpecialist: boolean;
}

export const autoCompleteOptions = Object.values(Days) as string[];

interface PractitionerFormProps {
  ref?: React.MutableRefObject<any>;
  initialValues: PractitionerFormValues;
  handleFormSubmit: (value: PractitionerFormValues) => void;
}

export const PractitionerForm = forwardRef<any, PractitionerFormProps>(
  ({ initialValues, handleFormSubmit }, ref) => {
    const {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      setFieldValue,
    } = useFormik({
      initialValues: initialValues,
      validationSchema: practitionerFormSchema,
      onSubmit: (value) => handleFormSubmit(value),
    });

    useImperativeHandle(ref, () => ({ handleSubmit }));

    return (
      <FormWrapper>
        <ImageUpload
          onChange={(imageURL: string) => setFieldValue("imageURL", imageURL)}
        />

        <TextField
          fullWidth
          required
          id="name"
          name="name"
          label="Name"
          className="mt-4"
          onBlur={handleBlur}
          value={values?.name}
          onChange={handleChange}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <FormControl
          fullWidth
          className="mt-4"
          variant="outlined"
          error={touched.gender && Boolean(errors.gender)}
        >
          <InputLabel id="gender-label">Gender *</InputLabel>
          <Select
            fullWidth
            id="select"
            name="gender"
            label="Gender *"
            onBlur={handleBlur}
            labelId="gender-label"
            value={values.gender}
            onChange={handleChange}
          >
            {Object.values(Gender).map((value, index) => (
              <MenuItem value={value} key={index}>
                {value}
              </MenuItem>
            ))}
          </Select>
          {touched.gender && errors.gender && (
            <ErrorMessage>{errors.gender}</ErrorMessage>
          )}
        </FormControl>

        <Autocomplete
          multiple
          className="mt-4"
          id="autocomplete"
          options={autoCompleteOptions}
          value={values?.workingDays}
          onChange={(_, value) => setFieldValue("workingDays", value)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Days"
              onBlur={handleBlur}
              label="Working Days *"
              helperText={touched.workingDays && errors.workingDays}
              error={touched.workingDays && Boolean(errors.workingDays)}
            />
          )}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="DOB *"
            value={values?.dob}
            className="mt-4 fullWidth"
            slotProps={{
              textField: {
                name: "dob",
                onBlur: handleBlur,
                variant: "outlined",
                error: touched.dob && !!errors.dob,
                helperText: touched.dob && errors.dob,
              },
            }}
            onChange={(value) => setFieldValue("dob", value)}
          />

          <DatePicker
            label="Start Date *"
            className="mt-4 fullWidth"
            value={values?.startDate}
            onChange={(value) => setFieldValue("startDate", value)}
            slotProps={{
              textField: {
                name: "dob",
                onBlur: handleBlur,
                variant: "outlined",
                error: touched.startDate && !!errors.startDate,
                helperText: touched.startDate && errors.startDate,
              },
            }}
          />

          <DatePicker
            label="End Date *"
            value={values?.endDate}
            className="mt-4 fullWidth"
            minDate={values?.startDate}
            onChange={(value) => setFieldValue("endDate", value)}
            slotProps={{
              textField: {
                name: "endDate",
                onBlur: handleBlur,
                variant: "outlined",
                error: touched.endDate && !!errors.endDate,
                helperText: touched.endDate && errors.endDate,
              },
            }}
          />
        </LocalizationProvider>

        <TextField
          fullWidth
          required
          type="tel"
          id="contact"
          name="contact"
          label="Contact"
          className="mt-4"
          onBlur={handleBlur}
          value={values?.contact}
          onChange={handleChange}
          error={touched.contact && !!errors.contact}
          helperText={touched.contact && errors.contact}
        />

        <FormControlLabel
          className="mt-4"
          control={
            <Checkbox
              name="isICUSpecialist"
              checked={values?.isICUSpecialist || false}
              onChange={handleChange}
            />
          }
          label="ICU Specialist"
        />
      </FormWrapper>
    );
  }
);
