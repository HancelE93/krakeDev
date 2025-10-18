// Variables globales
let puntosUsuario = 0; // Inicializa los puntos del usuario en 0
let puntosComputador = 0; // Inicializa los puntos del computador en 0

// Función principal para jugar una ronda
jugar = function(seleccionado) {
    // 'seleccionado' es la opción elegida por el usuario: "piedra", "papel" o "tijera"

    let eleccionComputador = generarElemento(); 
    // Llama a la función 'generarElemento' que devuelve aleatoriamente "piedra", "papel" o "tijera" para el computador

    let rutaComputador = generarRuta(eleccionComputador);
    // Genera la ruta de la imagen correspondiente a la elección del computador (por ejemplo "piedra.png")

    // Mostrar imagen del computador
    document.getElementById("imgComputador").src = rutaComputador; 
    // Cambia la imagen del computador en el HTML para reflejar su elección

    // Determinar ganador
    let resultado = determinarGanador(seleccionado, eleccionComputador); 
    // Llama a 'determinarGanador' con las elecciones del usuario y del computador
    // Retorna 0 si empate, 1 si gana el usuario, 2 si gana el computador

    let mensaje = ""; // Variable para almacenar el mensaje que se mostrará

    if (resultado == 0) {
        mensaje = "EMPATE"; 
        // Si el resultado es 0, es un empate
    } else if (resultado == 1) {
        mensaje = "¡GANASTE LA PARTIDA!"; 
        // Si el resultado es 1, el usuario gana
        puntosUsuario++; 
        // Incrementa los puntos del usuario en 1
    } else {
        mensaje = "PERDISTE LA PARTIDA"; 
        // Si el resultado es 2, el computador gana
        puntosComputador++; 
        // Incrementa los puntos del computador en 1
    }

    // Mostrar mensaje en pantalla
    document.getElementById("txtResultado").innerText = mensaje;
    // Cambia el texto del div o span con id "txtResultado" mostrando el mensaje correspondiente

    // Actualizar puntajes en pantalla
    document.getElementById("puntosUsuario").innerText = puntosUsuario;
    // Muestra los puntos actuales del usuario en el HTML
    document.getElementById("puntosComputador").innerText = puntosComputador;
    // Muestra los puntos actuales del computador en el HTML

    // Validar si alguien ganó el juego (meta: 5 puntos)
    if (puntosUsuario == 5) {
        alert("¡HAS GANADO EL JUEGO!");
        // Si el usuario llega a 5 puntos, muestra alerta de victoria
    } else if (puntosComputador == 5) {
        alert("EL COMPUTADOR TE HA VENCIDO");
        // Si el computador llega a 5 puntos, muestra alerta de derrota
    }
}

// Función para reiniciar la partida
nuevaPartida = function() {
    puntosUsuario = 0; 
    // Reinicia los puntos del usuario
    puntosComputador = 0; 
    // Reinicia los puntos del computador

    // Limpiar pantalla
    document.getElementById("imgComputador").src = ""; 
    // Quita la imagen del computador
    document.getElementById("txtResultado").innerText = ""; 
    // Limpia el mensaje de resultado
    document.getElementById("puntosUsuario").innerText = "0"; 
    // Reinicia la visualización de los puntos del usuario
    document.getElementById("puntosComputador").innerText = "0"; 
    // Reinicia la visualización de los puntos del computador
}
