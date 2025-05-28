import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';

function Todo() {
    const [daftar, setDaftar] = useState([]);


    const toggleCeklis = (id) => {
        const hasil = daftar.map((item) =>
            item.id === id ? { ...item, selesai: !item.selesai } : item
        );
        setDaftar(hasil);
    };

    const tambahTodo = (teks) => {
        if (teks.trim() === '') return toast.error('Kegiatan tidak boleh kosong!');
        const itemBaru = { id: Date.now(), isi: teks, selesai: false };
        setDaftar([...daftar, itemBaru]);
    };

    const hapusTodo = (id) => {
        const hasil = daftar.filter((item) => item.id !== id);
        setDaftar(hasil);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Todo List
            </Typography>
            <TodoInput onTambah={tambahTodo} />
            <TodoList daftar={daftar} onHapus={hapusTodo} onToggle={toggleCeklis} />

        </Container>
    );
}

export default Todo;
