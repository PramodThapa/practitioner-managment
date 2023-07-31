import React, { useState } from "react";

import { Paper, Button, Box } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { Modal, Header, Container, FlexBox } from "../component/common";

import AddEditPractitionerForm from "../component/Practitioner/AddEditPractitionerForm";

import { PractitionerTable } from "../component/Practitioner";

export function Home() {
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
              marginTop: "var(--spacing-6x)",
            }}
          >
            <PractitionerTable />
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
