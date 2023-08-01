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

import styled from "styled-components";

import { FlexBox, Gender, ImageUpload } from "../common";
import { forwardRef, useImperativeHandle } from "react";
import { practitionerFormSchema } from "../../validation";
import { ErrorMessage } from "../common/ErrorMessage";

const FormWrapper = styled.div`
  .mt-4 {
    margin-top: var(--spacing-4x);
  }

  .fullWidth {
    width: 100%;
  }
`;

enum Days {
  SUNDAY = "Sunday",
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "WednesDay",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
}

interface initialValues {
  name: string;
  gender: string;
  contact: string;
  dob: Dayjs | null;
  workingDays: Days[];
  endDate: Dayjs | null;
  startDate: Dayjs | null;
  isICUSpecialist: boolean;
}

const autoCompleteValue = Object.values(Days).map((day) => ({ day }));

const AddEditPractitionerForm = forwardRef((props, ref) => {
  const initialValues: initialValues = {
    name: "",
    dob: null,
    gender: "",
    contact: "",
    endDate: null,
    startDate: null,
    workingDays: [],
    isICUSpecialist: false,
  };

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
    onSubmit: () => {},
  });

  useImperativeHandle(ref, () => ({ handleSubmit }));

  return (
    <FormWrapper>
      <ImageUpload />

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
        options={autoCompleteValue}
        onChange={(_, value) => setFieldValue("workingDays", value)}
        getOptionLabel={(option) => option.day}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Days"
            label="Working Days"
            onBlur={handleBlur}
            helperText={touched.workingDays && errors.workingDays}
            error={touched.workingDays && Boolean(errors.workingDays)}
          />
        )}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="DOB *"
          className="mt-4 fullWidth"
          value={values?.dob}
          onChange={(value) => setFieldValue("dob", value)}
        />

        <FlexBox direction="row" align="center" className="mt-4 fullWidth">
          <DatePicker
            label="Start Date *"
            sx={{ width: "50%" }}
            value={values?.startDate}
            onChange={(value) => setFieldValue("startDate", value)}
          />
          <span>-</span>
          <DatePicker
            label="End Date *"
            sx={{ width: "50%" }}
            value={values?.endDate}
            minDate={values?.startDate}
          />
        </FlexBox>
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
        placeholder="+XXX-XXXXXXXXXX"
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
});

export default AddEditPractitionerForm;
