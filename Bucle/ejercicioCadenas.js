// Función que ejecuta la primera prueba: recorre una cadena ingresada por el usuario
ejecutarPrueba1 = function () {
    let mensaje; 
    // Recupera el texto del input con id "txtCadena" usando una función auxiliar
    mensaje = recuperarTexto("txtCadena"); 
    // Llama a la función recorrerCadena para imprimir cada carácter con su posición
    recorrerCadena(mensaje);
}

// Función que recorre una cadena y muestra cada carácter con su posición
recorrerCadena = function (cadena) {
    // 012  -> ejemplo de índice de cadena
    // Juan -> ejemplo de cadena
    let caracter; // Variable para almacenar el carácter actual

    // Primer ciclo for: recorre la cadena desde posición 0 hasta cadena.length - 1
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion); // Extrae el carácter en la posición actual
        console.log("Caracter " + caracter + " posicion " + posicion); // Muestra en consola
    }

    // Segundo ciclo for: hace exactamente lo mismo pero con condición <= cadena.length-1
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion); // Extrae el carácter en la posición actual
        console.log("Caracter " + caracter + " posicion " + posicion); // Muestra en consola
    }
}

// Función que ejecuta la segunda prueba: invierte la cadena ingresada
ejecutarPrueba2 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena"); // Recupera el texto del input
    let resultado = invertirCadena(mensaje); // Llama a la función invertirCadena
    mostrarTexto("lblResultado", resultado); // Muestra el resultado invertido en un label
}

// Función que invierte una cadena
invertirCadena = function (cadena) {
    // 012  -> ejemplo de índice de cadena
    // Juan -> ejemplo de cadena
    let caracter; // Variable para almacenar el carácter actual
    let resultado = ""; // Variable donde se construirá la cadena invertida

    // Recorre la cadena desde el último índice hasta 0
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion); // Toma el carácter en la posición actual
        resultado += caracter;              // Lo agrega al resultado final
        console.log(" posicion " + posicion + "Caracter " + caracter); // Muestra info en consola
    }
    return resultado; // Retorna la cadena invertida
}

// Función que busca si una letra existe en la cadena
buscarLetra = function(cadena, letra){
    let letraIterada; // Variable para almacenar el carácter actual
    let existeLetra = false; // Bandera que indica si la letra fue encontrada

    for(let i = 0; i < cadena.length; i++){
        letraIterada = cadena.charAt(i); // Extrae el carácter en la posición i
        if(letraIterada == letra){       // Compara si coincide con la letra buscada
            existeLetra = true;          // Si coincide, cambia la bandera a true
        }
    }

    if(existeLetra == true){
        return true;  // Retorna true si la letra existe en la cadena
    } else {
        return false; // Retorna false si no se encontró
    }
}

// Función que cuenta las letras mayúsculas en una cadena
contarMayusculas = function(){
    let letra;               // Variable para almacenar cada letra
    let contadorMayuscula = 0; // Variable para contar mayúsculas, inicializada en 0

    for(let i = 0; i < cadena.length; i++){
        letra = cadena.charAt(i);  // Extrae la letra en la posición i
        if(esMayuscula(letra)){    // Llama a función esMayuscula para verificar si es mayúscula
            contadorMayuscula++;   // Incrementa el contador si es mayúscula
        }
    }

    // Nota: aquí faltaría retornar el valor o mostrarlo, actualmente no hace nada visible
}
