import { useRef, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Paper, Button, Box } from "@mui/material";

import dayjs from "dayjs";

import { Modal, Header, Container, FlexBox } from "../component/common";

import {
  PractitionerTable,
  PractitionerForm,
  PractitionerData,
  PractitionerFormValues,
} from "../component/Practitioner";

import { logOut } from "../utils";

import {
  usePractitionerForm,
  useAddPractitionerData,
  useFetchPractitionerData,
  useDeletePractitionerData,
  useUpdatePractitionerData,
} from "../hooks";

import { DATE_FORMATE } from "../constants";

export const Home = () => {
  const practitionerFormRef = useRef<any | null>(null);
  const { mutate: onAddPractitioner } = useAddPractitionerData();
  const [selectedPractitioner, setSelectedPractitioner] = useState("");
  const { mutate: onDeletePractitioner } = useDeletePractitionerData();
  const { mutate: onUpdatePractitioner } = useUpdatePractitionerData();
  const { isLoading, data: practitioners } = useFetchPractitionerData();

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
      imageURL: "",
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
    const { dob, endDate, startDate, ...rest } = data;
    const payload = {
      ...rest,
      dob: dob?.format(DATE_FORMATE),
      endDate: endDate?.format(DATE_FORMATE),
      startDate: startDate?.format(DATE_FORMATE),
    };

    onAddPractitioner(payload);
    setPractitionerFormOpen(false);
  };

  const handleUpdatePractitionerClick = (data: PractitionerData) => {
    setSelectedPractitioner(data._id);
    setPractitionerFormEditMode(true);
    setPractitionerFormOpen(true);

    const formValues = {
      ...data,
      dob: dayjs(data.dob),
      endDate: dayjs(data.endDate),
      startDate: dayjs(data.startDate),
    } as PractitionerFormValues;

    setFormValues(formValues);
  };

  const handleUpdatePractitioner = (data: PractitionerFormValues) => {
    const { dob, endDate, startDate, ...rest } = data;
    const payload = {
      ...rest,
      _id: selectedPractitioner,
      dob: data.dob?.format(DATE_FORMATE),
      endDate: data.endDate?.format(DATE_FORMATE),
      startDate: data.startDate?.format(DATE_FORMATE),
    } as PractitionerData;

    onUpdatePractitioner(payload);
    setPractitionerFormOpen(false);
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
              onUpdate={handleUpdatePractitionerClick}
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
              handleFormSubmit={
                practitionerFormEditMode
                  ? handleUpdatePractitioner
                  : handleAddPractitioner
              }
            />
          </Modal>
        </Container>
      </Box>
    </>
  );
};
