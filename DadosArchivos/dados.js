// Función que representa el juego de lanzar un dado y mostrar si ganas o pierdes
jugar=function(){
    let aleatorio; // Se declara una variable para almacenar el número aleatorio que saldrá del dado
    aleatorio=lanzarDado(); // Se llama a la función lanzarDado() y se guarda el resultado en 'aleatorio'
    cambiarTexto("lblNumero",aleatorio) // Se actualiza el texto de un elemento HTML con id "lblNumero" mostrando el número obtenido
    if(aleatorio>3){ // Si el número del dado es mayor a 3
        console.log("ES MAYOR A 3") // Se muestra en consola que el número es mayor a 3
        console.log("!!GANASTE!!"); // Se muestra en consola el mensaje de que ganaste
    }else{ // Si el número del dado es 3 o menor
        console.log("ES MENOR A 3") // Se muestra en consola que el número es menor o igual a 3
        console.log("perdiste") // Se muestra en consola el mensaje de que perdiste
    }
}

// Función que simula lanzar un dado
// No recibe parámetros
// Retorna un número aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio // Variable para almacenar el valor decimal aleatorio generado por Math.random()
    let numeroMultiplicado; // Variable para multiplicar el número aleatorio por 6
    let numeroEntero; // Variable para convertir el número multiplicado a un número entero
    let valorDado; // Variable para almacenar el valor final del dado (1 a 6)
    
    aleatorio=Math.random();// Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    
    numeroMultiplicado=aleatorio*6; // Multiplica el número aleatorio por 6 para obtener un rango entre 0 y casi 6

    numeroEntero=parseInt(numeroMultiplicado);// Convierte el número decimal a un entero (0,1,2,3,4,5)
   
    valorDado=numeroEntero+1;// Ajusta el rango de 0-5 a 1-6, que es el rango de un dado
    return valorDado; // Retorna el número final del dado
}
