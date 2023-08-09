import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { useDispatch } from "react-redux";

import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Paper, Tabs, Tab, Box } from "@mui/material";

import { AxiosError } from "axios";

import { FlexBox, TabPanel } from "../component/common";
import {
  LoginForm,
  SignUpForm,
  SignUpFormValue,
  LoginInFormValue,
} from "../component/Authentication";

import { userLogin, userSignUp, addUserLoginToLocalStorage } from "../services";

import { handleError } from "../utils";

import { setUser } from "../reducers";

const PageWrapper = styled.div`
  height: 100vh;

  .contain-wrapper {
    height: 100%;
  }

  .tab-container {
    width: 500px;
  }
`;

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  /**
   * Function to handle login form submit.
   *
   * @param {LoginInitialValue} value Form values.
   * @param {Function} setSubmitting Function to handle set submitting.
   */
  const handleUserLogin = async (
    value: LoginInFormValue,
    setSubmitting: Function
  ) => {
    try {
      setSubmitting(true);

      const { data: response } = await userLogin(value);

      const { token, user } = response?.data;

      addUserLoginToLocalStorage(token, user);
      dispatch(setUser(user));

      navigate("/");
    } catch (error: Error | AxiosError | any) {
      handleError(error);
    } finally {
      setSubmitting(false);
    }
  };

  /**
   * Function to handle sign up form submit.
   *
   * @param {SignUpInitialValues} value Sign up form values.
   * @param {Function} setSubmitting Function to handle set submitting.
   */
  const handleUserSignUp = async (
    value: SignUpFormValue,
    setSubmitting: Function
  ) => {
    const { username, password } = value;
    try {
      setSubmitting(true);

      const { data: response } = await userSignUp({ username, password });

      const { token, user } = response?.data;

      addUserLoginToLocalStorage(token, user);
      navigate("/");
    } catch (error: Error | AxiosError | any) {
      handleError(error[0]);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <FlexBox className="contain-wrapper" justify="center" align="center">
        <Paper className="tab-container" elevation={2}>
          <Tabs centered value={value} onChange={handleChange}>
            <Tab
              label="Login"
              icon={<LockOpenIcon />}
              iconPosition="start"
              style={{ flexGrow: 1 }}
            />
            <Tab
              label="Sign up"
              iconPosition="start"
              style={{ flexGrow: 1 }}
              icon={<LoginIcon />}
            />
          </Tabs>
          <Box padding={"var(--spacing-6x)"}>
            <TabPanel index={value} value={0}>
              <LoginForm
                onFormSubmit={handleUserLogin}
                initialValue={{ username: "", password: "" }}
              ></LoginForm>
            </TabPanel>
            <TabPanel index={value} value={1}>
              <SignUpForm handleSignUp={handleUserSignUp}></SignUpForm>
            </TabPanel>
          </Box>
        </Paper>
      </FlexBox>
    </PageWrapper>
  );
}
