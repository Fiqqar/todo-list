import React from 'react';
import { Card, CardContent, Typography, Checkbox, Box } from '@mui/material';
import DeleteButton from './DeleteButton';

function TodoItem({ item, onHapus, onToggle }) {
    return (
        <Card
            variant="outlined"
            sx={{
                backgroundColor: item.selesai ? 'lightgray' : 'white',
                transition: '0.2s ease',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Checkbox checked={item.selesai} onChange={() => onToggle(item.id)} />
                    <Typography
                        sx={{
                            textDecoration: item.selesai ? 'line-through' : 'none',
                            color: item.selesai ? 'gray' : 'inherit',
                        }}
                    >
                        {item.isi}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '0.8rem',
                            color: 'gray',
                            marginLeft: 2,
                        }}>
                            Ditambahkan pada {new Date(item.id).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                        })}
                        </Typography>
                </Box>
                <DeleteButton onClick={() => onHapus(item.id)} />
            </CardContent>
        </Card>
    );
}

export default TodoItem;
