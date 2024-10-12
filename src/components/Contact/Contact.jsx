import { useState } from "react";
import clsx from "clsx";
import css from "./Contact.module.css";
import { BiSolidUser, BiSolidPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "react-modal";

export default function Contact({ phone: { id, name, number } }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const titleItem = clsx(css.item, css.title);
  const phoneItem = clsx(css.item, css.phone);
  const dispatch = useDispatch();

  const openDeleteModal = () => {
    setModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setModalIsOpen(false);
  };

  const openEditModal = () => {
    setEditedName(name); // Reset to current name
    setEditedNumber(number); // Reset to current number
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
    closeDeleteModal();
  };

  const handleEdit = (contactId) => {
    const updatedContact = {
      id: contactId,
      name: editedName,
      number: editedNumber
    };
    dispatch(updateContact(updatedContact));
    closeEditModal();
  };

  return (
    <>
      <Box className={css.content}>
        <Typography variant="h6" component="h2" className={titleItem}>
          <BiSolidUser />
          {name}
        </Typography>
        <a href={`tel:${number}`} className={phoneItem}>
          <BiSolidPhone />
          {number}
        </a>
      </Box>
      <Button
        variant="contained"
        color="primary"
        className={css.button}
        onClick={openEditModal}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="error"
        className={css.button}
        onClick={openDeleteModal}
      >
        Delete
      </Button>

      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeDeleteModal}
        className={css.modal}
        overlayClassName={css.overlay}
        contentLabel="Confirm Delete"
        ariaHideApp={false}
      >
        <Typography variant="h6" component="h2" className={css.modalTitle}>
          Confirm Deletion
        </Typography>
        <Typography variant="body1">
          Are you sure you want to delete {name}?
        </Typography>
        <Box className={css.modalActions}>
          <Button
            variant="contained"
            color="primary"
            onClick={closeDeleteModal}
            className={css.modalButton}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(id)}
            className={css.modalButton}
          >
            Delete
          </Button>
        </Box>
      </Modal>

      {/* Edit Contact Modal */}
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        className={css.modal}
        overlayClassName={css.overlay}
        contentLabel="Edit Contact"
        ariaHideApp={false}
      >
        <Typography variant="h6" component="h2" className={css.modalTitle}>
          Edit Contact
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit(id);
          }}
        >
          <TextField
            fullWidth
            label="Name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone Number"
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
            margin="normal"
          />
          <Box className={css.modalActions}>
            <Button
              variant="contained"
              color="primary"
              onClick={closeEditModal}
              className={css.modalButton}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              className={css.modalButton}
            >
              Save
            </Button>
          </Box>
        </form>
      </Modal>
    </>
  );
}