validarPassword=function(password) {
    // Acá vamos a guardar los mensajes de error que encontremos
    let errores = "";

    // Longuitud minima de 8 caracteres.
    if (password.length < 8 ) {
        errores = errores + "Debe tener al menos 8 caracteres.";
    }

    // Longitud maxima de 16 caracteres.
    if (password.length > 16) {
        errores = errores + "Debe tener máximo 16 caracteres.";
    }

    // Almenos una letra mayuscula.
    let tieneMayuscula = false;
    for (let i = 0; i < password.length; i++) {
        let letra = password[i]; 
        if (letra >= "A" && letra <= "Z") {
            tieneMayuscula = true; 
        }
    }
    if (tieneMayuscula == false) {
        errores = errores + "Debe tener al menos una letra mayúscula.";
    }

    // Almenos un numero
    let tieneNumero = false;
    for (let i = 0; i < password.length; i++) {
        let letra = password[i];
        if (letra >= "0" && letra <= "9") {
            tieneNumero = true;
        }
    }
    if (tieneNumero == false) {
        errores = errores + "Debe tener al menos un número.";
    }

    // contine un catacter especial(*, -, _)
    let tieneEspecial = false;
    for (let i = 0; i < password.length; i++) {
        let letra = password[i];
        if (letra == "*" || letra == "-" || letra == "_") {
            tieneEspecial = true;
        }
    }
    if (tieneEspecial == false) {
        errores = errores + "Debe tener al menos un carácter especial (*, - o _).";
    }

    // retornamos los errores
    return errores;
}


ejecutarValidacion=function() {
    let caja = document.getElementById("txtpass"); 
    let texto = caja.value;
    let resultado = document.getElementById("lblPass"); 
    let errores = validarPassword(texto);

    if (errores == "") {
        resultado.textContent = "Password Correcto";
       
    } else {
        resultado.textContent = errores+ "Password Incorrecto";
    }
}
