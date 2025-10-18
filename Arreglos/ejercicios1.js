// Arreglo global que almacenará todas las notas ingresadas
let notas = [];

// Función que agrega elementos de prueba al arreglo notas
agregarElementos = function() {
    // ⚠ Atención: aquí se declara nuevamente un arreglo local notas, lo que hace que no modifique el arreglo global
    let notas = []; 
    notas.push(5); // Agrega la nota 5 al arreglo local
    notas.push(10); // Agrega la nota 10 al arreglo local
    console.log(notas.length); // Muestra en consola la cantidad de elementos del arreglo local (2)
}

// Función que se ejecuta al presionar "AGREGAR NOTA"
probarAgregar = function() {
    let notaRecuperada;
    // Recupera el valor ingresado en el input con id "txtNota" y lo convierte a entero
    notaRecuperada = recuperarInt("txtNota"); 
    // Llama a la función que agrega la nota al arreglo global
    agregarNotas(notaRecuperada); 
}

// Función que agrega una nota al arreglo global notas
agregarNotas = function(nota) {
    notas.push(nota); // Agrega la nota al final del arreglo global
    mostrarNotas();   // Llama a la función que actualiza la visualización de notas en pantalla
}

// Función que recorre el arreglo de notas y muestra cada una en consola
recorrerArreglo = function() {
    let notaR;
    for(let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice]; // Toma la nota en la posición actual
        console.log(notaR);   // La imprime en la consola
    }
}

// Función que calcula el promedio de todas las notas en el arreglo
calcularPromedio = function() {
    let sumaNotas = 0; // Acumulador para la suma de notas
    let promedio;       // Variable donde se almacenará el promedio
    for(let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i]; // Suma cada nota del arreglo
    }
    promedio = sumaNotas / notas.length; // Calcula el promedio
    return promedio; // Retorna el promedio calculado
}

// Función que obtiene el promedio y lo muestra en el elemento HTML con id "lblPromedio"
ejecutarPromedio = function() {
    let promedio = calcularPromedio(); // Calcula el promedio usando la función anterior
    mostrarTexto("lblPromedio", promedio); // Muestra el resultado en pantalla
}

// Función que genera una tabla básica y la inserta en el div "divTabla"
generarTabla = function() {
    let contendioTabla = ""; // Variable que contendrá el código HTML de la tabla
    let cmpTabla = document.getElementById("divTabla"); // Referencia al div donde se insertará la tabla
    // ⚠ Este código tiene un error: se cierran las etiquetas </table> antes de tiempo
    contendioTabla += "<table><tr><td>UNO</td></tr></table>" + "<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contendioTabla; // Inserta el HTML en el div
}

// Función que muestra todas las notas en una tabla dentro del div "divTabla"
mostrarNotas = function() {
    let cmpTabla = document.getElementById("divTabla"); // Referencia al div donde se mostrará la tabla
    let contendioTabla = "<table><tr><th>NOTA</th></tr>"; // Encabezado de la tabla
    let miNota;
    for(let i = 0; i < notas.length; i++) {
        miNota = notas[i]; // Toma la nota en la posición actual
        contendioTabla += "<tr><td>"; // Abre fila y celda
        contendioTabla += miNota;     // Inserta la nota en la celda
        contendioTabla += "</tr></td>"; // ⚠ Error: el cierre correcto debe ser "</td></tr>"
    }
    contendioTabla += "</table>"; // Cierra la tabla
    cmpTabla.innerHTML = contendioTabla; // Inserta el HTML generado en el div
}
