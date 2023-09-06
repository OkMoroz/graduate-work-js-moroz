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
    setErrors({ ...errors, [name]: "" });
  };
const handleSubmit = () => {
  const newErrors = {};
  if (!formData.category) {
    newErrors.category = "This field is required";
  }
  if (!formData.name) {
    newErrors.name = "This field is required";
  }
  if (!formData.quantity) {
    newErrors.quantity = "This field is required";
  }
  if (!formData.price) {
    newErrors.price = "This field is required";
  }
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
  } else {
    handleFormSubmit(formData);
  }
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
            required
          />
          {errors.category && (
            <span className="error-message">{errors.category}</span>
          )}

          <TextField
            className={`text-field${errors.name ? " error" : ""}`}
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}

          <TextField
            className={`text-field${errors.quantity ? " error" : ""}`}
            label="Quantity"
            variant="outlined"
            fullWidth
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            margin="normal"
            required
          />
          {errors.quantity && (
            <span className="error-message">{errors.quantity}</span>
          )}

          <TextField
            className={`text-field${errors.price ? " error" : ""}`}
            label="Price"
            variant="outlined"
            fullWidth
            name="price"
            value={formData.price}
            onChange={handleChange}
            margin="normal"
            required
          />
          {errors.price && (
            <span className="error-message">{errors.price}</span>
          )}

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
        <Button onClick={handleSubmit} className="button-submit">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAddEdit;
