import React from "react";

import { useFormik } from "formik";

import { TextField, Button, Box, Alert } from "@mui/material";

import signUpValidationSchema from "../../schema/signUpSchema";

const SignUpForm: React.FC = () => {
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signUpValidationSchema,
      onSubmit: () => {},
    });
  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </Box>
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

      <Button type="submit" fullWidth variant="contained" color="primary">
        SignUp
      </Button>
    </form>
  );
};

export default SignUpForm;
