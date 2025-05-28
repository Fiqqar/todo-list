import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

function TodoInput({ onTambah }) {
    const [input, setInput] = useState('');

    const handleTambah = () => {
        onTambah(input);
        setInput('');
    };

    return (
        <Stack direction="row" spacing={2} mb={3}>
            <TextField
                fullWidth
                variant="outlined"
                label="Tambah kegiatan"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="contained" onClick={handleTambah}>
                Tambah
            </Button>
        </Stack>
    );
}

export default TodoInput;
