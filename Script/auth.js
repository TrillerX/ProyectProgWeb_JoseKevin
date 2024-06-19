window.onload = function() {
    if (window.location.hash === "#register-container") {
        toggleForm();
    }
};

function toggleForm() {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'flex';
        registerContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'flex';
    }
}

function register(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("El usuario ya está registrado");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registro exitoso, ahora puedes iniciar sesión");
    toggleForm();
}

function login(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Inicio de sesión exitoso");
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        //Volver a página
        window.location.href = 'index.html';
    } else {
        alert("Correo o contraseña incorrectos");
    }
}