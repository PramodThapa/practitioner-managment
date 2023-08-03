import { useState } from "react";
import { PractitionerFormValues } from "../component/Practitioner";

export const usePractitionerForm = () => {
  const [formValues, setFormValues] = useState<PractitionerFormValues>();
  const [practitionerFormEditMode, setPractitionerFormEditMode] =
    useState(false);
  const [practitionerFormOpen, setPractitionerFormOpen] = useState(false);

  return {
    formValues,
    setFormValues,
    practitionerFormOpen,
    setPractitionerFormOpen,
    practitionerFormEditMode,
    setPractitionerFormEditMode,
  };
};
