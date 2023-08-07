import React from "react";

import { useFormik } from "formik";

import { TextField, Box, Button } from "@mui/material";

import { loginValidationSchema } from "../../validation";

export interface LoginInFormValue {
  username: string;
  password: string;
}

interface LoginFormProps {
  onFormSubmit: Function;
  initialValue: LoginInFormValue;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onFormSubmit,
  initialValue,
}) => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: loginValidationSchema,
    onSubmit: async (value: LoginInFormValue, { setSubmitting }) =>
      await onFormSubmit(value, setSubmitting),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box paddingTop={"var(--spacing-6x)"}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values?.username}
          error={touched.username && !!errors.username}
          helperText={touched.username && errors.username}
        />
      </Box>
      <Box paddingY={"var(--spacing-6x)"}>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />
      </Box>

      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        disabled={isSubmitting}
      >
        Login
      </Button>
    </form>
  );
};
