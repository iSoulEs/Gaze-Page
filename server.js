const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Simulación de base de datos en memoria
let users = [];

// Registro de usuario
app.post('/register', (req, res) => {
    const { username, password, confirmPassword } = req.body;

    if (!username || !password || !confirmPassword) {
        return res.status(400).json({ error: 'Faltan campos' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden' });
    }

    if (users.find(u => u.username === username)) {
        return res.status(400).json({ error: 'El usuario ya existe' });
    }

    users.push({ username, password });
    res.status(201).json({ message: 'Registro exitoso' });
});

// Login de usuario
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Faltan campos' });
    }

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    if (user.password !== password) {
        return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    // Aquí podrías agregar generación de token o manejo de sesión
    res.json({ message: 'Login exitoso' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
