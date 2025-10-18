// Arreglo global que contiene algunas frutas
let frutas = ["pera", "manzana", "banana"];

// Función que se ejecuta al presionar un botón para probar la búsqueda
probarBusqueda = function() {
    // Recupera el valor ingresado por el usuario en el input con id "lblFruta"
    let frutasIngresadas = recuperarTexto("lblFruta"); 

    // Llama a la función 'buscar' pasando la fruta ingresada
    // La función devolverá el nombre de la fruta si existe, o null si no existe
    let resultado = buscar(frutasIngresadas); 

    // Si la función 'buscar' devuelve null, significa que la fruta no se encuentra
    if(resultado == null) {
        alert("No existe la fruta"); // Muestra un mensaje de alerta
    } else {
        // Si la fruta existe, muestra un mensaje confirmando que la fruta está en el cesto
        alert(frutasIngresadas + " existe en el cesto!!");
    }
}

// Función que busca si una fruta existe dentro del arreglo 'frutas'
buscar = function(fruta) {
    let elemento;            // Variable temporal para iterar sobre cada fruta
    let frutaEncontrada = null; // Inicialmente se asume que no se encuentra la fruta

    // Recorre el arreglo 'frutas' desde la posición 0 hasta el final
    for(let i = 0; i < frutas.length; i++) {
        elemento = frutas[i]; // Obtiene la fruta en la posición actual

        // Compara si la fruta ingresada es igual a la fruta actual del arreglo
        if(fruta == elemento) {
            frutaEncontrada = elemento; // Guarda la fruta encontrada
            break;                      // Termina el bucle porque ya se encontró
        }
    }

    // Retorna la fruta encontrada o null si no se encontró
    return frutaEncontrada; 
}
