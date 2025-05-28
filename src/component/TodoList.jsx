import React from 'react';
import TodoItem from './TodoItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function TodoList({ daftar, onHapus, onToggle }) {
    if (daftar.length === 0) {
        return <Typography variant="h6" align="center" gutterBottom>Belum ada kegiatan.</Typography>;
    }
    return (
        <Stack spacing={2}>
            {daftar.map((item) => (
                <TodoItem key={item.id} item={item} onHapus={onHapus} onToggle={onToggle} />
            ))}
        </Stack>
    );
}

export default TodoList;
