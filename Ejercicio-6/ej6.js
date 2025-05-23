const enviar = document.getElementById('enviar')

enviar.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim()
    const apellido = document.getElementById('apellido').value.trim()
    const edad = +document.getElementById('edad').value
    const altura = +document.getElementById('altura').value
    const email = document.getElementById('email').value.trim()
    const mensaje = document.getElementById('mensaje')

    const errores = []

    if (nombre === '') {
        errores.push("El nombre no puede estar vacío")
    }
    if (nombre.length > 50) {
        errores.push("El nombre no puede tener más de 50 caracteres")
    }
    if (apellido === '') {
        errores.push("El apellido no puede estar vacío")
    }
    if (apellido.length > 50) {
        errores.push("El apellido no puede tener más de 50 caracteres")
    }
    if (edad === 0) {
        errores.push('La edad no puede estar vacía o ser igual a cero')
    }
    if (edad < 0) {
        errores.push('La edad no puede ser negativa')
    }
    if (edad < 18) {
        errores.push('No puede ser menor de edad')
    }
    if (altura === 0) {
        errores.push('La altura no puede estar vacía o ser igual a cero')
    }
    if (altura < 0) {
        errores.push('La altura no puede ser negativa')
    }
    if (altura > 230) {
        errores.push('La altura no debe ser mayor a 230cm')
    }
    if (email === '') {
        errores.push('El correo electrónico no puede estar vacío')
    }
    if (!email.includes('@')) {
        errores.push('El correo electrónico debe contener "@"')
    }

    if (errores.length > 0) {
        mensaje.innerHTML = errores.join("<br>")
        mensaje.className = 'error';
    } else {
        mensaje.textContent = "Todos los datos son válidos.";
        mensaje.className = 'exito';
    }
})