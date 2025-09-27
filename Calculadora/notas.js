c = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");

    if (esNotaValida(nota1, "lblError1") & esNotaValida(nota2, "lblError2") & esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblresultado", "0.0");
    }

}
esNotaValida = function (nota, idComponenteError) {
    let hayErrores = false;
    if (isNaN(nota)) {
        mostrarTexto(idComponenteError, "DEBE INGRESAR UN NUMERO");
        hayErrores = true;
    }
    if (nota < 0 || nota > 10) {
        mostrarTexto(idComponenteError, "EL NUMERO DEBE DE ESTAR ENTRE 0 Y 10");
        hayErrores = true;
    }
    if (hayErrores==false){
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;

}








calcularPromedio5 = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular5 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");

    if (esNotaValida(nota1, "lblError1") & esNotaValida(nota2, "lblError2") & esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblresultado", "0.0");
    }

}
esNotaValida5 = function (nota, idComponenteError) {
    if (isNaN(nota)) {
        mostrarTexto(idComponenteError, "DEBE INGRESAR UN NUMERO");
        return false;
    } else {
        if (nota >= 0 && nota <= 10) {
            mostrarTexto(idComponenteError, "");
            return true;
        } else {
            mostrarTexto(idComponenteError, "EL NUMERO DEBE DE ESTAR ENTRE 0 Y 10");
            return false;
        }

    }
}


calcularPromedio4 = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular4 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    esNotaValida(nota1, "lblError1");

    nota2 = recuperarFloat("txtNota2");
    esNotaValida(nota2, "lblError2");

    nota3 = recuperarFloat("txtNota3");
    esNotaValida(nota3, "lblError3");

    if (existeError == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }

}
esNotaValida4 = function (nota, idComponenteError) {
    if (isNaN(nota)) {
        mostrarTexto(idComponenteError, "Debe ingresar un numero");
        return false;
    } else {
        mostrarTexto(idComponenteError, "")
        return true;
    }
}


calcularPromedio3 = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular3 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        mostrarTexto("lblError1", "Debe ingresar un numero")
        existeError = true;
    } else {
        mostrarTexto("lblError1", "")
    }

    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
        mostrarTexto("lblError2", "Debe ingresar un numero")
        existeError = true;
    } else {
        mostrarTexto("lblError2", "")
    }

    nota3 = recuperarFloat("txtNota3");
    if (isNaN(nota3)) {
        mostrarTexto("lblError3", "Debe ingresar un numero")
        existeError = true;
    } else {
        mostrarTexto("lblError3", "")
    }

    if (existeError == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }

}

calcularPromedio2 = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("ERROR");
        existeErro = true;
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

    if (existeError == false) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    }

}





calcularPromedio1 = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("ERROR");
    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert("ERROR");
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert("ERROR");
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);
            }

        }

    }

}