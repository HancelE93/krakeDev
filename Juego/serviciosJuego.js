obtenerAleatorio = function () {
    let aleatorio
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();// entere 1 y 0
    numeroMultiplicado = aleatorio * 3;

    numeroEntero = parseInt(numeroMultiplicado);// entre 0 y 1

    valorDado = numeroEntero + 1;//entre 0 y 1
    return valorDado;
}

generarElemento = function () {
    let aleatorio;
    aleatorio = obtenerAleatorio();
    if (aleatorio == 1) {
        return "piedra";
    } else if (aleatorio == 2) {
        return "papel";
    } else {
        return "tijera";
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return 0;
    }

    if (
        (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
        (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
        (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")
    ) {
        return 1;
    }

    return 2;
}

generarRuta=function(nombre) {
    return `./imagenes/${nombre}.png`;
    
}