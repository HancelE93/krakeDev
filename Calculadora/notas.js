// Función que calcula el promedio de tres notas
c = function (nota1, nota2, nota3) {
    let promedio; // Declaramos la variable donde guardaremos el promedio
    promedio = (nota1 + nota2 + nota3) / 3; // Suma las tres notas y divide entre 3
    return promedio; // Retorna el resultado del promedio
}

// Función que calcula y muestra el promedio, validando que las notas sean correctas
calcular = function () {
    let nota1; // Variable para almacenar la nota 1 ingresada por el usuario
    let nota2; // Variable para almacenar la nota 2
    let nota3; // Variable para almacenar la nota 3
    let resultado; // Variable donde guardaremos el promedio calculado
    let resultadoFormato; // Variable para guardar el promedio con formato de 2 decimales
    let existeError = false; // Bandera para controlar si hay errores en la validación

    // Recuperamos las notas desde los inputs y las convertimos a número
    nota1 = recuperarFloat("txtNota1"); 
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");

    // Validamos que las notas sean números y estén entre 0 y 10
    // El operador & asegura que se ejecuten todas las funciones de validación
    if (esNotaValida(nota1, "lblError1") & esNotaValida(nota2, "lblError2") & esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3); // Calcula el promedio usando otra función
        resultadoFormato = resultado.toFixed(2); // Formatea el promedio a 2 decimales
        mostrarTexto("lblResultado", resultadoFormato); // Muestra el promedio en el elemento HTML
    } else {
        mostrarTexto("lblresultado", "0.0"); // Si hay error, muestra 0.0
    }
}

// Función que valida si una nota es un número y está entre 0 y 10
esNotaValida = function (nota, idComponenteError) {
    let hayErrores = false; // Inicialmente asumimos que no hay errores
    if (isNaN(nota)) { // isNaN verifica si no es un número
        mostrarTexto(idComponenteError, "DEBE INGRESAR UN NUMERO"); // Mensaje de error en HTML
        hayErrores = true; // Indicamos que hay error
    }
    if (nota < 0 || nota > 10) { // Verificamos que la nota esté entre 0 y 10
        mostrarTexto(idComponenteError, "EL NUMERO DEBE DE ESTAR ENTRE 0 Y 10"); // Mensaje de error
        hayErrores = true; // Indicamos que hay error
    }
    if (hayErrores == false){ // Si no hay errores
        mostrarTexto(idComponenteError, ""); // Limpiamos cualquier mensaje de error previo
    }
    return !hayErrores; // Retorna true si es válida, false si hay errores
}

// ----------------- VERSIÓN 5 -------------------
// Función que calcula el promedio (igual que antes)
calcularPromedio5 = function (nota1, nota2, nota3) {
    let promedio; 
    promedio = (nota1 + nota2 + nota3) / 3; // Calcula promedio
    return promedio; // Retorna promedio
}

// Función que calcula y muestra el promedio usando la versión 5
calcular5 = function () {
    let nota1, nota2, nota3, resultado, resultadoFormato; // Declaramos variables
    let existeError = false; // Bandera de errores

    nota1 = recuperarFloat("txtNota1"); // Recupera nota1
    nota2 = recuperarFloat("txtNota2"); // Recupera nota2
    nota3 = recuperarFloat("txtNota3"); // Recupera nota3

    // Valida que todas las notas sean correctas
    if (esNotaValida(nota1, "lblError1") & esNotaValida(nota2, "lblError2") & esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3); // Calcula promedio
        resultadoFormato = resultado.toFixed(2); // Formatea a 2 decimales
        mostrarTexto("lblResultado", resultadoFormato); // Muestra resultado
    } else {
        mostrarTexto("lblresultado", "0.0"); // Si hay error, muestra 0.0
    }
}

// Función de validación versión 5
esNotaValida5 = function (nota, idComponenteError) {
    if (isNaN(nota)) { // Verifica si no es número
        mostrarTexto(idComponenteError, "DEBE INGRESAR UN NUMERO"); // Mensaje
        return false; // Retorna falso
    } else {
        if (nota >= 0 && nota <= 10) { // Si está dentro del rango permitido
            mostrarTexto(idComponenteError, ""); // Limpia mensaje
            return true; // Retorna verdadero
        } else { // Si está fuera de rango
            mostrarTexto(idComponenteError, "EL NUMERO DEBE DE ESTAR ENTRE 0 Y 10"); // Mensaje
            return false; // Retorna falso
        }
    }
}

// ----------------- VERSIÓN 4 -------------------
calcularPromedio4 = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3; // Calcula promedio
    return promedio;
}

calcular4 = function () {
    let nota1, nota2, nota3, resultado, resultadoFormato;
    let existeError = false; // Bandera para errores

    nota1 = recuperarFloat("txtNota1"); // Recupera nota1
    esNotaValida(nota1, "lblError1"); // Valida nota1

    nota2 = recuperarFloat("txtNota2"); // Recupera nota2
    esNotaValida(nota2, "lblError2"); // Valida nota2

    nota3 = recuperarFloat("txtNota3"); // Recupera nota3
    esNotaValida(nota3, "lblError3"); // Valida nota3

    if (existeError == false) { // Si no hay errores
        resultado = calcularPromedio(nota1, nota2, nota3); // Calcula promedio
        resultadoFormato = resultado.toFixed(2); // Formatea a 2 decimales
        mostrarTexto("lblResultado", resultadoFormato); // Muestra resultado
    }
}

// Validación versión 4
esNotaValida4 = function (nota, idComponenteError) {
    if (isNaN(nota)) { // Si no es número
        mostrarTexto(idComponenteError, "Debe ingresar un numero"); // Mensaje
        return false;
    } else {
        mostrarTexto(idComponenteError, ""); // Limpia mensaje
        return true;
    }
}

// ----------------- VERSIÓN 3 -------------------
calcularPromedio3 = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3; // Calcula promedio
    return promedio;
}

calcular3 = function () {
    let nota1, nota2, nota3, resultado, resultadoFormato;
    let existeError = false; // Bandera de errores

    nota1 = recuperarFloat("txtNota1"); // Recupera nota1
    if (isNaN(nota1)) { // Si no es número
        mostrarTexto("lblError1", "Debe ingresar un numero"); // Mensaje error
        existeError = true; // Marca error
    } else {
        mostrarTexto("lblError1", ""); // Limpia mensaje si es correcto
    }

    nota2 = recuperarFloat("txtNota2"); // Recupera nota2
    if (isNaN(nota2)) {
        mostrarTexto("lblError2", "Debe ingresar un numero"); 
        existeError = true; 
    } else {
        mostrarTexto("lblError2", "");
    }

    nota3 = recuperarFloat("txtNota3"); // Recupera nota3
    if (isNaN(nota3)) {
        mostrarTexto("lblError3", "Debe ingresar un numero");
        existeError = true; 
    } else {
        mostrarTexto("lblError3", "");
    }

    if (existeError == false) { // Si no hay errores
        resultado = calcularPromedio(nota1, nota2, nota3); // Calcula promedio
        resultadoFormato = resultado.toFixed(2); // Formatea
        mostrarTexto("lblResultado", resultadoFormato); // Muestra resultado
    }
}

// ----------------- VERSIÓN 2 -------------------
calcularPromedio2 = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3; // Calcula promedio
    return promedio;
}

calcular2 = function () {
    let nota1, nota2, nota3, resultado, resultadoFormato;
    let existeError = false; // Bandera de errores

    nota1 = recuperarFloat("txtNota1"); 
    if (isNaN(nota1)) { // Si no es número
        alert("ERROR"); // Muestra alerta
        existeErro = true; // Marca error
    }

    nota2 = recuperarFloat("txtNota2"); 
    if (isNaN(nota2)) {
        alert("ERROR");
        existeErro = true;
    }

    nota3 = recuperarFloat("txtNota3"); 
    if (isNaN(nota3)) {
        alert("ERROR");
        existeErro = true;
    }

    if (existeError == false) { // Si no hay errores
        resultado = calcularPromedio(nota1, nota2, nota3); // Calcula promedio
        resultadoFormato = resultado.toFixed(2); // Formatea
        mostrarTexto("lblResultado", resultadoFormato); // Muestra resultado
    }
}

// ----------------- VERSIÓN 1 -------------------
calcularPromedio1 = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3; // Calcula promedio
    return promedio;
}

calcular1 = function () {
    let nota1, nota2, nota3, resultado, resultadoFormato;

    nota1 = recuperarFloat("txtNota1"); // Recupera nota1
    if (isNaN(nota1)) { // Si no es número
        alert("ERROR"); // Muestra alerta
    } else {
        nota2 = recuperarFloat("txtNota2"); // Recupera nota2
        if (isNaN(nota2)) { // Si no es número
            alert("ERROR");
        } else {
            nota3 = recuperarFloat("txtNota3"); // Recupera nota3
            if (isNaN(nota3)) { // Si no es número
                alert("ERROR");
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3); // Calcula promedio
                resultadoFormato = resultado.toFixed(2); // Formatea a 2 decimales
                mostrarTexto("lblResultado", resultadoFormato); // Muestra el resultado
            }
        }
    }
}
