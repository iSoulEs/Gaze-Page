const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Simulación de base de datos en memoria
let users = [];

/* === RUTAS API === */

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

    res.json({ message: 'Login exitoso' });
});

// Completar perfil
app.post('/profile', (req, res) => {
    const { username, nickname, classes } = req.body;

    if (!username || !nickname || !classes) {
        return res.status(400).json({ error: 'Faltan campos' });
    }

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    user.nickname = nickname;
    user.classes = classes;

    res.json({ message: 'Perfil actualizado correctamente' });
});

/* === RUTAS HTML === */

// Página de bienvenida (opcional porque Express ya sirve index.html por defecto)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Página de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Página de registro
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Página de completar perfil
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Levantar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
