retorno = function () {
    return parseInt(Math.random() * 100) + 1
}

generarAleatorios = function () {
    let aleatorios = [];
    let numero = recuperarInt("lblaleatorio");
    if (numero < 5 || numero > 20) {
        mostrarTexto("error", "Porfavor, ingrese un numero del 5 y 20")
    }
    for (let i = 0; i < numero; i++) {
        console.log("Índice:", i);
        let num = retorno();
        aleatorios[i] = num;
    }

    mostrarResultado(aleatorios);
}

mostrarResultado=function(arregloNumeros){
    let contenido = "<table><tr><th>Numeros Aleatorios</th></tr>";
    for (let i = 0; i < arregloNumeros.length; i++) {
        contenido += "<tr><td>" + arregloNumeros[i] + "</td></tr>";
    }

    contenido += "</table>";

    document.getElementById("divTabla").innerHTML = contenido;
}
