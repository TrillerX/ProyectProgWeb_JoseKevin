document.getElementById('scrollCategorias').addEventListener('click', function () {
    document.getElementById('divProd').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollContacto').addEventListener('click', function () {
    document.getElementById('contac').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', function () {
    const perfilDiv = document.getElementById('perfil');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        const profilePic = localStorage.getItem('profilePic');
        if (profilePic) {
            perfilDiv.innerHTML = `
                <img class="imgperfil" src="${profilePic}" alt="Perfil">
                <p class="textPeque">
                    <a href="#" id="logout-link" onclick="logout()">Cerrar Sesión</a> | <a href="Perfil.html">Perfil</a>
                </p>
            `;
        } else {
            const initials = getInitials(loggedInUser.name);
            perfilDiv.innerHTML = `
                <img class="imgperfil" src="https://via.placeholder.com/150?text=${initials}" alt="Perfil">
                <p class="textPeque">
                    <a href="#" id="logout-link" onclick="logout()">Cerrar Sesión</a> | <a href="Perfil.html">Perfil</a>
                </p>
            `;
        }
    } else {
        perfilDiv.innerHTML = `
            <a href="auth.html">
                <img class="imgperfil"
                    src="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1704/alekseyvanin170403722/76700719-icono-de-la-l%C3%ADnea-de-usuario-esquema-de-perfil-ilustraci%C3%B3n-de-logotipo-vectorial-pictograma-lineal.jpg"
                    alt="Perfil">
            </a>
            <p class="textPeque"><a href="auth.html">Iniciar sesión</a> | <a
                    href="auth.html#register-container">Registrarse</a></p>
        `;
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('profilePic');
    location.reload();
}

function getInitials(name) {
    const names = name.split(' ');
    const initials = names.map(name => name.charAt(0)).join('');
    return initials.toUpperCase();
}