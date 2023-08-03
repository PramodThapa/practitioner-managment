import { useRef } from "react";

import { Paper, Button, Box } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { Modal, Header, Container, FlexBox } from "../component/common";

import {
  PractitionerTable,
  PractitionerForm,
  PractitionerData,
  PractitionerFormValues,
} from "../component/Practitioner";

import { handleSuccess, logOut } from "../utils";
import {
  useMutatePractitionerData,
  useFetchPractitionerData,
  usePractitionerForm,
} from "../hooks";
import { createPractitioner, deletePractitioner } from "../services";
import { DATE_FORMATE, SUCCESS_MESSAGE } from "../constants";
import dayjs from "dayjs";

export const Home = () => {
  const { isLoading, data: practitioners } = useFetchPractitionerData();
  const { mutate: onDeletePractitioner } = useMutatePractitionerData(
    deletePractitioner,
    () => handleSuccess(SUCCESS_MESSAGE.DELETE("practitioner"))
  );
  const { mutate: onAddPractitioner } = useMutatePractitionerData(
    createPractitioner,
    () => handleSuccess(SUCCESS_MESSAGE.ADD("practitioner"))
  );

  const practitionerFormRef = useRef<any | null>(null);
  const {
    formValues,
    setFormValues,
    practitionerFormOpen,
    practitionerFormEditMode,
    setPractitionerFormOpen,
    setPractitionerFormEditMode,
  } = usePractitionerForm();

  const handleSubmit = () => {
    practitionerFormRef.current?.handleSubmit?.();
  };

  const onAddButtonClick = () => {
    setPractitionerFormEditMode(false);
    setPractitionerFormOpen(true);
    setFormValues({
      name: "",
      dob: null,
      gender: "",
      contact: "",
      endDate: null,
      startDate: null,
      workingDays: [],
      isICUSpecialist: false,
    });
  };

  const handleDeletePractitioner = ({ _id: id }: PractitionerData) => {
    onDeletePractitioner(id);
  };

  const handleAddPractitioner = (data: PractitionerFormValues) => {
    const payload = {
      ...data,
      dob: data.dob?.format(DATE_FORMATE),
      endDate: data.endDate?.format(DATE_FORMATE),
      startDate: data.startDate?.format(DATE_FORMATE),
    };

    onAddPractitioner(payload);
  };

  const handlePractitionerUpdate = (data: PractitionerData) => {
    setPractitionerFormEditMode(true);
    setPractitionerFormOpen(true);

    const formValues = {
      ...data,
      dob: dayjs(data.dob),
      endDate: dayjs(data.endDate),
      startDate: dayjs(data.startDate),
    };

    setFormValues(formValues);
  };

  return (
    <>
      <Header handleLogout={logOut} />
      <Box marginTop={"var(--spacing-6x)"}>
        <Container size="md">
          <FlexBox direction="row-reverse">
            <Button
              color="primary"
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => onAddButtonClick()}
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
            <PractitionerTable
              data={practitioners}
              loading={isLoading}
              onDelete={handleDeletePractitioner}
              onUpdate={handlePractitionerUpdate}
            />
          </Paper>

          <Modal
            onSubmit={handleSubmit}
            title={
              (practitionerFormEditMode ? "Edit" : "Add") + " Practitioner"
            }
            open={practitionerFormOpen}
            onClose={() => setPractitionerFormOpen(false)}
          >
            <PractitionerForm
              ref={practitionerFormRef}
              initialValues={formValues}
              handleFormSubmit={handleAddPractitioner}
            />
          </Modal>
        </Container>
      </Box>
    </>
  );
};
