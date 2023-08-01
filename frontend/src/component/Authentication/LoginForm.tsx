import { useFormik } from "formik";

import { TextField, Box, Button } from "@mui/material";

import { login } from "../../services";

import { loginValidationSchema } from "../../validation";

const handleLogin = async (
  value: initialValues,
  setSubmitting: any,
  resetForm: any
) => {
  try {
    setSubmitting(true);

    resetForm();

    console.log(value);

    //await login(value);
  } catch (error) {
  } finally {
    //setSubmitting(false);
  }
};

interface initialValues {
  username: string;
  password: string;
}

export const LoginForm = () => {
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
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (value: initialValues, { setSubmitting, resetForm }) =>
      await handleLogin(value, setSubmitting, resetForm),
  });

  console.log(isSubmitting);

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

      <Button
        fullWidth
        type="submit"
        color="primary"
        disabled={isSubmitting}
        variant="contained"
      >
        Login
      </Button>
    </form>
  );
};
