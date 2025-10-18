//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

//variables globales
let palabraSecreta = ""; // Guardará la palabra secreta que el jugador ingresa
let coincidencias = 0;   // Contará cuántas letras correctas ha adivinado el jugador
let intentos = 0;        // Contará cuántas letras ha intentado adivinar
let errores = 0;         // Contará los errores cometidos, para mostrar el ahorcado

//Paso 0
esMayuscula = function (caracter) {
    // Convierte la letra en código ASCII
    let codigo = caracter.charCodeAt(0);
    // Devuelve true si el código corresponde a letras mayúsculas (A=65 a Z=90)
    return (codigo >= 65 && codigo <= 90)
}

//Paso 1
guardarPalabra = function () {
    let palabra = document.getElementById("txtSecreta").value;
    // Toma el valor del input donde el jugador escribe la palabra secreta

    if (palabra.length != 5) {
        // Valida que la palabra tenga exactamente 5 letras
        alert("Digite una palabra de 5 letras mayúsculas");
        return false;
    }

    for (let letra of palabra) {
        // Recorre cada letra de la palabra para validar si es mayúscula
        if (letra < 'A' || letra > 'Z') {
            // Si alguna letra no es mayúscula, muestra alerta y termina
            alert("Digite una palabra de 5 letras mayúsculas");
            return false;
        }
    }
    palabraSecreta = palabra;
    // Si pasa todas las validaciones, guarda la palabra en la variable global

    alert("VALIDACION COMPLETA")
    return true; // Retorna true para indicar que la palabra es válida
}

//Paso 2
mostrarLetra = function (letra, posicion) {
    let idDiv = "div" + posicion;
    // Construye el id del div donde se mostrará la letra, ej: "div0", "div1", etc.

    let div = document.getElementById(idDiv);
    // Obtiene el div correspondiente a la posición de la letra

    if (div) {
        // Si el div existe, coloca la letra dentro
        div.textContent = letra;
    }
}

//Paso 3
validar = function (letra) {
    let letraEncontrada = false;
    // Bandera para saber si la letra existe en la palabra

    for (let i = 0; i < palabraSecreta.length; i++) {
        // Recorre cada posición de la palabra secreta
        if (palabraSecreta[i] == letra) {
            // Si la letra coincide con la posición actual
            mostrarLetra(letra, i);
            // Muestra la letra en el div correspondiente

            coincidencias++;
            // Aumenta el contador de letras acertadas

            letraEncontrada = true;
            // Marca que se encontró la letra
        }
    }

    if (!letraEncontrada) {
        // Si la letra no se encontró en la palabra
        errores++;
        // Aumenta el contador de errores
        mostrarAhorcado();
        // Llama a la función para actualizar la imagen del ahorcado
    }
}

//Paso 4
ingresarLetra = function() {
    let letra = document.getElementById("txtLetra").value;
    // Obtiene la letra ingresada por el jugador

    if (!letra) {
        // Si no se ingresó ninguna letra, muestra alerta
        alert("Ingrese una letra");
        return;
    }

    if (esMayuscula(letra)) {
        // Solo procesa la letra si es mayúscula
        intentos++;
        // Aumenta el contador de intentos
        validar(letra);
        // Valida si la letra está en la palabra

        if (coincidencias == 5) {
            // Si ya adivinó todas las letras (5)
            document.getElementById("ahorcadoImagen").src = "ganador.gif";
            // Muestra la imagen de ganador
        }

        if (intentos == 10) {
            // Si se alcanzaron 10 intentos
            document.getElementById("ahorcadoImagen").src = "gameOver.gif";
            // Muestra la imagen de game over
        }

    } else {
        // Si la letra no es mayúscula
        alert("SOLO INGRESAR MAYÚSCULAS");
    }

    document.getElementById("txtLetra").value = "";
    // Limpia el input para la siguiente letra
}

//Paso 6
mostrarAhorcado = function() {
    if (errores >= 1 && errores <= 9) {
        // Solo muestra las imágenes de errores del 1 al 9
        let img = document.getElementById("ahorcadoImagen");
        img.src = "Ahorcado_0" + errores + ".png";
        // Actualiza la imagen del ahorcado según la cantidad de errores
    }   
}
