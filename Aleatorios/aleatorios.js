// Función que retorna un número aleatorio entre 1 y 100
retorno = function () {
    // Math.random() genera un número decimal entre 0 y 1
    // Se multiplica por 100 para que esté entre 0 y 100
    // parseInt lo convierte en entero truncando los decimales
    // +1 para que el rango sea 1 a 100 en lugar de 0 a 99
    return parseInt(Math.random() * 100) + 1;
}

// Función que genera un arreglo de números aleatorios
generarAleatorios = function () {
    let aleatorios = [];  // Arreglo vacío donde se guardarán los números aleatorios

    // Recupera el número ingresado por el usuario desde el input con id "lblaleatorio"
    let numero = recuperarInt("lblaleatorio");

    // Validación: el número debe estar entre 5 y 20
    if (numero < 5 || numero > 20) {
        mostrarTexto("error", "Porfavor, ingrese un numero del 5 y 20");
        return; // Termina la función si el número no es válido
    }

    // Bucle para generar 'numero' de valores aleatorios
    for (let i = 0; i < numero; i++) {
        console.log("Índice:", i);  // Muestra en consola el índice actual
        let num = retorno();         // Llama a la función 'retorno' para obtener un número aleatorio
        aleatorios[i] = num;         // Guarda el número en el arreglo 'aleatorios' en la posición i
    }

    // Llama a la función que mostrará los números generados en pantalla
    mostrarResultado(aleatorios);
}

// Función que muestra un arreglo de números en una tabla HTML
mostrarResultado = function(arregloNumeros) {
    // Construye la tabla HTML con un encabezado
    let contenido = "<table><tr><th>Numeros Aleatorios</th></tr>";

    // Recorre el arreglo para crear una fila por cada número
    for (let i = 0; i < arregloNumeros.length; i++) {
        contenido += "<tr><td>" + arregloNumeros[i] + "</td></tr>";
    }

    // Cierra la etiqueta de la tabla
    contenido += "</table>";

    // Inserta la tabla en el div con id "divTabla"
    document.getElementById("divTabla").innerHTML = contenido;
}
