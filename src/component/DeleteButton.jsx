import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton({ onClick }) {
    return (
        <IconButton color="error" onClick={onClick}>
            <DeleteIcon />
        </IconButton>
    );
}

export default DeleteButton;
