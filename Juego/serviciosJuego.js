// Función que obtiene un número aleatorio entre 1 y 3
obtenerAleatorio = function () {
    let aleatorio; // Variable que almacenará el número aleatorio decimal entre 0 y 1
    let numeroMultiplicado; // Variable para multiplicar el decimal y escalarlo al rango deseado
    let numeroEntero; // Variable para convertir el número decimal a entero
    let valorDado; // Variable final que representa el número entre 1 y 3

    aleatorio = Math.random(); 
    // Math.random() genera un número decimal entre 0 (inclusive) y 1 (exclusive)

    numeroMultiplicado = aleatorio * 3; 
    // Escala el número aleatorio al rango 0 a 3 (decimal)

    numeroEntero = parseInt(numeroMultiplicado); 
    // Convierte el decimal a un entero truncando los decimales
    // Ahora el valor está entre 0, 1 o 2

    valorDado = numeroEntero + 1; 
    // Ajusta el rango para que quede entre 1 y 3

    return valorDado; 
    // Devuelve el número final aleatorio entre 1 y 3
}

// Función que genera la elección del computador: "piedra", "papel" o "tijera"
generarElemento = function () {
    let aleatorio;
    aleatorio = obtenerAleatorio(); 
    // Llama a la función anterior para obtener un número aleatorio entre 1 y 3

    if (aleatorio == 1) {
        return "piedra"; 
        // Si el número es 1, la elección es piedra
    } else if (aleatorio == 2) {
        return "papel"; 
        // Si el número es 2, la elección es papel
    } else {
        return "tijera"; 
        // Si el número es 3, la elección es tijera
    }
}

// Función que determina el ganador entre dos elecciones
// Devuelve 0 si empate, 1 si gana el jugador 1, 2 si gana el jugador 2
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return 0; 
        // Si ambos eligieron lo mismo, hay empate
    }

    if (
        (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
        (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
        (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")
    ) {
        return 1; 
        // Estas condiciones representan los casos donde gana el jugador 1
    }

    return 2; 
    // Si no es empate ni gana el jugador 1, entonces gana el jugador 2
}

// Función que genera la ruta de la imagen según la elección
generarRuta = function(nombre) {
    return `./imagenes/${nombre}.png`; 
    // Usa template strings de JavaScript para crear la ruta a la imagen
    // Ejemplo: si nombre = "piedra", retorna "./imagenes/piedra.png"
}
