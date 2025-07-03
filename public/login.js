const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        username: form.username.value.trim(),
        password: form.password.value,
    };

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            message.style.color = 'green';
            message.textContent = result.message;
            localStorage.setItem('username', data.username);
            form.reset();

            // Redirigir a completar perfil
            window.location.href = '/profile.html';
        } else {
            message.style.color = 'red';
            message.textContent = result.error || 'Error desconocido';
        }
    } catch (err) {
        message.style.color = 'red';
        message.textContent = 'Error al conectar con el servidor';
    }
});
