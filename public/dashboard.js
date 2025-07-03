// Al hacer click en cerrar sesión
document.getElementById('logoutBtn').addEventListener('click', () => {
    // Limpiar datos almacenados (username u otros si quisieras)
    localStorage.removeItem('username');

    // Redirigir al inicio
    window.location.href = '/';
});
