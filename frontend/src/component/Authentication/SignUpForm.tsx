import React from "react";

import { useFormik } from "formik";

import { TextField, Button, Box } from "@mui/material";

import { signUpValidationSchema } from "../../validation";

export interface SignUpFormValue {
  username: string;
  password: string;
  confirmPassword: string;
}

interface SignUpFormProps {
  handleSignUp: Function;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ handleSignUp }) => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (value: SignUpFormValue, { setSubmitting, resetForm }) =>
      await handleSignUp(value, setSubmitting, resetForm),
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
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />
      </Box>
      <Box paddingBottom={"var(--spacing-6x)"}>
        <TextField
          fullWidth
          type="password"
          variant="outlined"
          onBlur={handleBlur}
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
          label="Confirm Password"
          value={values.confirmPassword}
          error={touched.confirmPassword && !!errors.confirmPassword}
          helperText={touched.confirmPassword && errors.confirmPassword}
        />
      </Box>

      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        disabled={isSubmitting}
      >
        SignUp
      </Button>
    </form>
  );
};
