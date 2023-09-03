import React from "react";
import "./ModalDelete.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

const ModalDelete = ({ isOpen, isClose, isDelete }) => {
  return (
    <Dialog open={isOpen} onClose={isClose} className="modal-custom">
      <DialogContent className="modal-content">
        <DialogContentText className="modal-question">
          Are u sure you want to delete this product?
        </DialogContentText>
      </DialogContent>
      <DialogActions className="modal-buttons">
        <Button onClick={isClose} className="button-cansel">
          Cancel
        </Button>
        <Button
          onClick={isDelete}
          className="button-delete"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDelete;
