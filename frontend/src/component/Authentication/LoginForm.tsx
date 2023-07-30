import React from "react";

import { useFormik } from "formik";

import { TextField, Box, Alert } from "@mui/material";

import loginValidationSchema from "../../schema/loginSchema";

const LoginForm = React.forwardRef((_, ref) => {
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginValidationSchema,
      onSubmit: () => {
        // Handle form submission here
        console.log("Some API Call");
      },
    });

  React.useImperativeHandle(ref, () => ({
    handleSubmit: handleSubmit,
  }));

  return (
    <form onSubmit={handleSubmit}>
      {/* <Box>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </Box> */}

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

      {/* <Button
        fullWidth
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Login
      </Button> */}
    </form>
  );
});

export default LoginForm;
