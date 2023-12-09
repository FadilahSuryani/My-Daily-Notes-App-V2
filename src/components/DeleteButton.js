import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteButton({ index, id, onDelete }) {
  return (
    <IconButton color="danger" aria-label="delete" onClick={() => onDelete(id)}>
      <DeleteIcon />
    </IconButton>
  );
}

DeleteButton.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { DeleteButton };
