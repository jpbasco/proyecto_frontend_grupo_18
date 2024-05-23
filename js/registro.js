document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    let valid = true;

    // Validar Nombre
    const nombre = document.getElementById('nombre').value;
    if (nombre === '') {
        alert("Ingrese un nombre valido.");
        valid = false;
    }

    // Validar Edad
    const edad = document.getElementById('edad').value;
    if (edad === '' || isNaN(edad) || edad <= 0) {
        alert("Ingrese una edad valida.");
        valid = false;
    }

    // Validar Email
    const email = document.getElementById('email').value;
    const emailCaracteres = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCaracteres.test(email)) {
        alert("Ingrese un e-mail valido.");
        valid = false;
    }

    // Validar Teléfono
    const telefono = document.getElementById('telefono').value;
    const telefonoCaracteres = /^[0-9]{10}$/;
    if (!telefonoCaracteres.test(telefono)) {
        alert("El numero de telefono debe contener 10 numeros.");
        valid = false;
    }

    // Validar Términos y Condiciones
    const terminos = document.getElementById('terminos').checked;
    if (!terminos) {
        alert("No acepto los terminos y condiciones.");
        valid = false;
    }

    // Validar Comentarios
    const comentarios = document.getElementById('comentarios').value;
    if (comentarios.length > 200) {
        alert("Los comentarios no pueden exceder los 200 caracteres.");
        valid = false;
    }

    // Evitar el envío del formulario si no es válido
    if (!valid) {
        event.preventDefault();
    }
});

