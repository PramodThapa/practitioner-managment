import React from "react";

import styled from "styled-components";

import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Paper, Tabs, Tab, Box } from "@mui/material";

import { FlexBox, TabPanel } from "../component/common";
import { LoginForm, SignUpForm } from "../component/Authentication";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
              <LoginForm></LoginForm>
            </TabPanel>
            <TabPanel index={value} value={1}>
              <SignUpForm></SignUpForm>
            </TabPanel>
          </Box>
        </Paper>
      </FlexBox>
    </PageWrapper>
  );
}
