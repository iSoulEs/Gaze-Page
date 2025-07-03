const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        username: form.username.value.trim(),
        password: form.password.value,
        confirmPassword: form.confirmPassword.value,
    };

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            message.style.color = 'green';
            message.textContent = result.message;
            form.reset();
        } else {
            message.style.color = 'red';
            message.textContent = result.error || 'Error desconocido';
        }
    } catch (err) {
        message.style.color = 'red';
        message.textContent = 'Error al conectar con el servidor';
    }
});
