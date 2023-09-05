import React, { useState, useEffect } from "react";
import "./ModalAddEdit.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalAddEdit = ({ isOpen, isClose, title, handleFormSubmit }) => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        category: "",
        name: "",
        quantity: "",
        price: "",
        description: "",
      });
      setErrors({});
    }
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

 const validateField = (name, value) => {
   if (!value) {
     setErrors((prevErrors) => ({
       ...prevErrors,
       [name]: "This field is required",
     }));
   } else {
     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
   }
 };


  const isFormValid = () => {
    return Object.values(errors).every((error) => !error);
  };

  return (
    <Dialog open={isOpen} onClose={isClose} className="dialog">
      <DialogTitle className="dialog-title">
        {title}
        <CloseIcon
          onClick={isClose}
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            cursor: "pointer",
            fontSize: "24px",
            color: "#000000",
          }}
        />
      </DialogTitle>
      <DialogContent className="dialog-content">
        <form>
          <TextField
            className={`text-field${errors.category ? " error" : ""}`}
            label="Category"
            variant="outlined"
            fullWidth
            name="category"
            value={formData.category}
            onChange={handleChange}
            margin="normal"
            error={!!errors.category}
            helperText={errors.category}
            required
          />

          <TextField
            className="text-field"
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
            required
          />
          <TextField
            className="text-field"
            label="Quantity"
            variant="outlined"
            fullWidth
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            margin="normal"
            error={!!errors.quantity}
            helperText={errors.quantity}
            required
          />
          <TextField
            className="text-field"
            label="Price"
            variant="outlined"
            fullWidth
            name="price"
            value={formData.price}
            onChange={handleChange}
            margin="normal"
            error={!!errors.price}
            helperText={errors.price}
            required
          />
          <TextField
            className="description"
            label="Description"
            variant="standard"
            fullWidth
            multiline
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
          />
        </form>
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button onClick={isClose} className="button-cansel">
          Cancel
        </Button>
        <Button
          onClick={() => handleFormSubmit(formData)}
          className="button-submit"
          disabled={!isFormValid()}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAddEdit;
