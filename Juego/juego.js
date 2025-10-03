// Variables globales
let puntosUsuario = 0;
let puntosComputador = 0;

jugar=function(seleccionado) {
    let eleccionComputador = generarElemento(); // piedra, papel o tijera
    let rutaComputador = generarRuta(eleccionComputador);

    // Mostrar imagen del computador
    document.getElementById("imgComputador").src = rutaComputador;

    // Determinar ganador
   let resultado = determinarGanador(seleccionado, eleccionComputador);

    let mensaje = "";

    if (resultado == 0) {
        mensaje = "EMPATE";
    } else if (resultado == 1) {
        mensaje = "¡GANASTE LA PARTIDA!";
        puntosUsuario++;
    } else {
        mensaje = "PERDISTE LA PARTIDA";
        puntosComputador++;
    }

    // Mostrar mensaje
    document.getElementById("txtResultado").innerText = mensaje;

    // Actualizar puntajes
    document.getElementById("puntosUsuario").innerText = puntosUsuario;
    document.getElementById("puntosComputador").innerText = puntosComputador;

    // Validar si alguien ganó el juego (5 puntos)
    if (puntosUsuario ==5) {
        alert("¡HAS GANADO EL JUEGO!");
    } else if (puntosComputador ==5) {
        alert("EL COMPUTADOR TE HA VENCIDO");
    }
}

nuevaPartida= function() {
puntosUsuario = 0;
puntosComputador = 0;

// Limpiar pantalla
document.getElementById("imgComputador").src = "";
document.getElementById("txtResultado").innerText = "";
document.getElementById("puntosUsuario").innerText = "0";
document.getElementById("puntosComputador").innerText = "0";
}