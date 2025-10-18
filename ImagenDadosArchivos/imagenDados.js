let puntos;
puntos = 0; 
// Declaramos la variable 'puntos' que llevará el acumulado del puntaje del jugador
// Inicializamos en 0 porque al iniciar no tiene puntos

let lanzamientos;
lanzamientos = 5; 
// Declaramos la variable 'lanzamientos' que indica cuántos tiros le quedan al jugador
// Inicializamos en 5, es decir, el jugador puede lanzar 5 veces

jugar = function() {
    let resultado;
    resultado = lanzarDado();
    // Llamamos a la función lanzarDado() que devuelve un número aleatorio entre 1 y 6
    // Guardamos el resultado en la variable 'resultado'

    console.log(resultado);
    // Mostramos en la consola el número obtenido en el dado para depuración

    mostrarCara(resultado);
    // Llamamos a la función mostrarCara() para mostrar la imagen correspondiente al número obtenido

    modificarPuntos(resultado);
    // Llamamos a modificarPuntos() pasando el número obtenido
    // Esto actualizará el puntaje acumulado del jugador

    modificarLanzamientos(resultado);
    // Llamamos a modificarLanzamientos() que disminuye el número de lanzamientos restantes
}

modificarPuntos = function(numero){
    // Función que recibe el número obtenido en el dado y suma al puntaje total

    puntos = puntos + numero;
    // Suma el número obtenido a la variable global 'puntos'
    // Esto acumula el puntaje del jugador

    cambiarTexto("lblPuntos", puntos);
    // Actualiza en la pantalla el puntaje usando la función cambiarTexto()
    // 'lblPuntos' es el id del elemento HTML donde se muestra el puntaje

    if(puntos > 20){
        // Si el puntaje supera 20, el jugador gana

        cambiarTexto("lblWinOrLose", "GANASTE");
        // Muestra el mensaje "GANASTE" en el elemento con id 'lblWinOrLose'

        limpiar();
        // Llama a la función limpiar() para reiniciar el juego
    }

    // Comentario extra: aquí se muestra el mensaje de victoria y se reinician las variables
}

modificarLanzamientos = function(){
    // Función que no recibe parámetros y se encarga de disminuir los lanzamientos restantes

    lanzamientos = lanzamientos - 1;
    // Resta 1 a la variable global 'lanzamientos'

    cambiarTexto("lblLanzamiento", lanzamientos);
    // Muestra en pantalla la cantidad de lanzamientos restantes

    if(lanzamientos == 0){
        // Si los lanzamientos llegan a 0, significa que el juego terminó sin ganar

        cambiarTexto("lblWinOrLose", "GAME OVER");
        // Muestra "GAME OVER" en pantalla

        limpiar();
        // Reinicia el juego llamando a limpiar()
    }
}

limpiar = function(){
    let puntos;
    puntos = 0;
    let lanzamientos;   
    lanzamientos = 5;
    // Reinicia las variables puntos y lanzamientos a sus valores iniciales

    cambiarTexto("lblPuntos", puntos);
    // Muestra 0 en el puntaje

    cambiarTexto("lblLanzamiento", lanzamientos);
    // Muestra 5 en los lanzamientos

    cambiarImagen("imgDado", "");
    // Limpia la imagen del dado (no se muestra ninguna)
    // Comentario extra: esta función reinicia la pantalla y las variables para un nuevo juego
}

mostrarCara = function(numero){
    // Función que recibe un número entre 1 y 6 y muestra la imagen correspondiente

    if(numero == 1){
        cambiarImagen("imgDado", "dados1.png");
    } else if(numero == 2){
        cambiarImagen("imgDado", "dados2.png");
    } else if(numero == 3){
        cambiarImagen("imgDado", "dados3.png");
    } else if(numero == 4){
        cambiarImagen("imgDado", "dados4.png");
    } else if(numero == 5){
        cambiarImagen("imgDado", "dados5.png");
    } else if(numero == 6){
        cambiarImagen("imgDado", "dados6.png");
    }

    // Comentarios extra: 
    // '==' se usa para comparar valores
    // '=' se usa para asignar un valor
    // cambiarImagen() actualiza la imagen del dado en la pantalla según el número
}

lanzarDado = function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    // Declaramos variables temporales para generar el número aleatorio

    aleatorio = Math.random();
    // Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusive)

    aleatorioMultiplicado = aleatorio * 6;
    // Multiplicamos por 6 para tener un rango de 0 a 5.999...

    aleatorioEntero = parseInt(aleatorioMultiplicado);
    // parseInt convierte el número decimal a entero, truncando los decimales
    // Esto nos da un entero entre 0 y 5

    valorDado = aleatorioEntero + 1;
    // Sumamos 1 para que el número final esté entre 1 y 6, simulando un dado real

    return valorDado;
    // Retorna el valor del dado para usarlo en la función jugar()
}
