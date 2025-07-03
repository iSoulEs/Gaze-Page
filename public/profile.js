const form = document.getElementById('profileForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        nickname: form.nickname.value.trim(),
        classes: form.classes.value.trim(),
    };

    try {
        const response = await fetch('/complete-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // Para saber qué usuario está enviando los datos, en un caso simple vamos a mandar el username guardado en localStorage (por ejemplo)
            body: JSON.stringify({ ...data, username: localStorage.getItem('username') }),
        });

        const result = await response.json();

        if (response.ok) {
            message.style.color = 'green';
            message.textContent = 'Perfil actualizado con éxito';
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
