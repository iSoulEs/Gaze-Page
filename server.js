const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Simulación de base de datos en memoria
let users = [];

// Ruta de registro
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

// Test server
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
