import React from "react";
import ImageUpload from "../common/ImageUpload";

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

import FlexBox from "../common/FlexBox";

const FormWrapper = styled.div`
  width: 400px;

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

const AddEditPractitionerForm = () => {
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
    onSubmit: () => {},
  });

  console.log(values);

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
        value={values?.name}
        onChange={handleChange}
      />

      <FormControl fullWidth variant="outlined" className="mt-4">
        <InputLabel id="gender-label">Gender *</InputLabel>
        <Select
          fullWidth
          id="select"
          name="gender"
          label="Gender *"
          labelId="gender-label"
          value={values.gender}
          onChange={handleChange}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Others"}>Others</MenuItem>
        </Select>
      </FormControl>

      <Autocomplete
        multiple
        className="mt-4"
        id="autocomplete"
        options={autoCompleteValue}
        onChange={(event, value) => setFieldValue("workingDays", value)}
        getOptionLabel={(option) => option.day}
        renderInput={(params) => (
          <TextField {...params} label="Working Days" placeholder="Days" />
        )}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="DOB *"
          className="mt-4 fullWidth"
          value={values?.dob}
          onChange={(value) => setFieldValue("dob", value)}
        />

        <FlexBox direction="row" align="center" className="mt-4">
          <DatePicker
            sx={{ width: "200px" }}
            label="Start Date *"
            value={values?.startDate}
            onChange={(value) => setFieldValue("startDate", value)}
          />
          <span>-</span>
          <DatePicker
            sx={{ width: "200px" }}
            label="End Date *"
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
};

export default AddEditPractitionerForm;
