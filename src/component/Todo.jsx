import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo() {
    const [daftar, setDaftar] = useState([]);


    const toggleCeklis = (id) => {
        const hasil = daftar.map((item) =>
            item.id === id ? { ...item, selesai: !item.selesai } : item
        );
        setDaftar(hasil);
    };

    const tambahTodo = (teks) => {
        if (teks.trim() === '') {
            toast.error('Isi input tidak boleh kosong!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Container>
    );
}

export default Todo;
