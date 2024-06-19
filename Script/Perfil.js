document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        document.getElementById('edit-name').value = loggedInUser.name;
        const origin = new URLSearchParams(window.location.search).get('origin');
        document.getElementById('origin').value = origin || 'index.html';

        // Mostrar la imagen de perfil guardada, si existe
        const profilePic = localStorage.getItem('profilePic');
        if (profilePic) {
            const imgperfil = document.querySelector('.imgperfil');
            imgperfil.src = profilePic;
        }
    }
});

function updateProfile() {
    const newName = document.getElementById('edit-name').value;
    const newPassword = document.getElementById('edit-password').value;
    const confirmNewPassword = document.getElementById('confirm-edit-password').value;

    if (newPassword !== confirmNewPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    const updatedUsers = users.map(user => {
        if (user.email === loggedInUser.email) {
            return {
                ...user,
                name: newName,
                password: newPassword || user.password // Mantener la contraseña si no se cambia
            };
        }
        return user;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUsers.find(user => user.email === loggedInUser.email)));

    alert("Datos cambiados correctamente");

    // Guardar la nueva imagen
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imgperfil = document.querySelector('.imgperfil');
            imgperfil.src = event.target.result;

            // Guardar la imagen
            localStorage.setItem('profilePic', event.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('profilePic'); 
    window.location.href = 'index.html';
}

function goBack() {
    const origin = document.getElementById('origin').value;
    window.location.href = origin;
}

function deleteProfilePic() {
    const initials = getInitials(document.getElementById('edit-name').value);
    const defaultPicUrl = `https://via.placeholder.com/150?text=${initials}`;
    const imgperfil = document.querySelector('.imgperfil');
    imgperfil.src = defaultPicUrl;
    localStorage.removeItem('profilePic');
    alert("Foto de perfil borrada");
}

// Función de las iniciales del nombre
function getInitials(name) {
    return name.split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
}

// Función mostrar imagen seleccionada por usuario
document.getElementById('file-input').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const imgperfil = document.querySelector('.imgperfil');
        imgperfil.src = reader.result;
    }

    reader.readAsDataURL(file);
});