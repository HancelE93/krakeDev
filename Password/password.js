validarPassword=function(password) {
    // Acá vamos a guardar los mensajes de error que encontremos
    let errores = ""; // Inicializamos una variable vacía para acumular todos los errores encontrados

    // Longuitud mínima de 8 caracteres.
    if (password.length < 8 ) { // Si la longitud del password es menor a 8
        errores = errores + "Debe tener al menos 8 caracteres."; // Añadimos este mensaje de error a la variable errores
    }

    // Longitud máxima de 16 caracteres.
    if (password.length > 16) { // Si la longitud del password es mayor a 16
        errores = errores + "Debe tener máximo 16 caracteres."; // Añadimos este mensaje de error
    }

    // Al menos una letra mayúscula.
    let tieneMayuscula = false; // Inicializamos un booleano que indica si encontramos una mayúscula
    for (let i = 0; i < password.length; i++) { // Recorremos cada carácter del password
        let letra = password[i]; // Tomamos la letra actual
        if (letra >= "A" && letra <= "Z") { // Si la letra está entre A y Z (mayúscula)
            tieneMayuscula = true; // Marcamos que sí tiene mayúscula
        }
    }
    if (tieneMayuscula == false) { // Si después de recorrer todo el password no encontramos mayúscula
        errores = errores + "Debe tener al menos una letra mayúscula."; // Añadimos mensaje de error
    }

    // Al menos un número
    let tieneNumero = false; // Inicializamos booleano para verificar si hay números
    for (let i = 0; i < password.length; i++) { // Recorremos cada carácter
        let letra = password[i];
        if (letra >= "0" && letra <= "9") { // Si la letra es un número del 0 al 9
            tieneNumero = true; // Marcamos que hay al menos un número
        }
    }
    if (tieneNumero == false) { // Si no encontramos números
        errores = errores + "Debe tener al menos un número."; // Añadimos mensaje de error
    }

    // Contiene un carácter especial (*, -, _)
    let tieneEspecial = false; // Inicializamos booleano para verificar si hay un carácter especial
    for (let i = 0; i < password.length; i++) { // Recorremos cada carácter
        let letra = password[i];
        if (letra == "*" || letra == "-" || letra == "_") { // Si la letra es alguno de los caracteres especiales permitidos
            tieneEspecial = true; // Marcamos que hay carácter especial
        }
    }
    if (tieneEspecial == false) { // Si no hay carácter especial
        errores = errores + "Debe tener al menos un carácter especial (*, - o _)."; // Añadimos mensaje de error
    }

    // Retornamos los errores encontrados (cadena vacía si no hay errores)
    return errores;
}


ejecutarValidacion=function() {
    let caja = document.getElementById("txtpass"); // Obtenemos el input donde el usuario escribe el password
    let texto = caja.value; // Tomamos el valor ingresado en el input
    let resultado = document.getElementById("lblPass"); // Obtenemos el elemento donde mostraremos el resultado de la validación
    let errores = validarPassword(texto); // Llamamos a la función validarPassword y guardamos los errores retornados

    if (errores == "") { // Si no hay errores (cadena vacía)
        resultado.textContent = "Password Correcto"; // Mostramos mensaje de éxito
    } else {
        resultado.textContent = errores + "Password Incorrecto"; // Mostramos los errores junto con mensaje de fallo
    }
}
