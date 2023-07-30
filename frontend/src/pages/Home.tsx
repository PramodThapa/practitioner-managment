import React, { useState } from "react";

import { Paper, Button, Box } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import Modal from "../component/common/Modal";
import Header from "../component/common/Header";
import FlexBox from "../component/common/FlexBox";
import Container from "../component/common/Container";
import AddEditPractitionerForm from "../component/Practitioner/AddEditPractitionerForm";
import Practitioner from "../component/Practitioner/Practitioner";

export default function Home() {
  const [addPractitionerOpen, setAddPractitionerOpen] = useState(false);

  const handleOpenModal = () => {
    setAddPractitionerOpen(true);
  };

  const handleCloseModal = () => {
    setAddPractitionerOpen(false);
  };

  return (
    <>
      <Header />
      <Box marginTop={"var(--spacing-6x)"}>
        <Container size="md">
          <FlexBox direction="row-reverse">
            <Button
              color="primary"
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpenModal}
              sx={{ textTransform: "none" }}
            >
              Add Practitioner
            </Button>
          </FlexBox>

          <Paper
            elevation={2}
            sx={{
              overflowY: "scroll",
              height: "calc(100vh - 190px)",
              marginTop: "var(--spacing-6x)",
            }}
          >
            <Practitioner />
            <Practitioner />
            <Practitioner />
            <Practitioner />
            <Practitioner />
            <Practitioner />
          </Paper>

          <Modal
            title="Add Practitioner"
            open={addPractitionerOpen}
            onClose={handleCloseModal}
            onSubmit={() => {}}
          >
            <AddEditPractitionerForm />
          </Modal>
        </Container>
      </Box>
    </>
  );
}
