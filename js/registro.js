document.getElementById('formulario_registro').addEventListener('submit', function(event){
    
    let valid = true;

    const nombre = document.getElementById('nombre_ususario').value;
    if (nombre ===''){
        alert("Ingrese su nombre");
        valid = false;
    }
    const apellido = document.getElementById('apellido_usuario').value;
    if (apellido === ''){
        alert("Ingrese su apellido");
        valid = false;
    }
    const edad = document.getElementById('edad').value;
    if (edad === '' || isNaN(edad) || edad <= 0){
        alert("Ingrese una edad valida");
        valid = false;
    }
    const email = document.getElementById('email').value;
    const caracteres = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!caracteres.test(email)){
        alert("Ingrese un e-mail valido");
        valid = false;
    }
    if (!valid){
        event.preventDefault();
    }
});

