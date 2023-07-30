import React from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  onClose,
  onSubmit,
  children,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          fontWeight: "var(--fontWeight-bold)",
          borderBottom: "1px solid var(--color-grey-400)",
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent
        sx={{
          marginTop: "var(--spacing-4x)",
          borderBottom: "1px solid var(--color-grey-400)",
        }}
      >
        {children}
      </DialogContent>
      <DialogActions sx={{ padding: "var(--spacing-4x)" }}>
        <Button
          color="primary"
          onClick={onSubmit}
          variant="contained"
          sx={{ textTransform: "none", fontWeight: "var(--fontWeight-bold)" }}
        >
          Submit
        </Button>
        <Button
          color="primary"
          onClick={onClose}
          sx={{ textTransform: "none" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
