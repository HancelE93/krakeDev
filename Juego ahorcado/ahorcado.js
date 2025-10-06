//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//variables globales
let palabraSecreta = "";
let coincidencias = 0;
let intentos = 0;
let errores = 0;
//Paso 0
esMayuscula = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 65 && codigo <= 90)
}
//Paso 1
guardarPalabra = function () {
    let palabra = document.getElementById("txtSecreta").value;

    if (palabra.length != 5) {
        alert("Digite una palabra de 5 letras mayúsculas");
        return false;
    }

    for (let letra of palabra) {
        if (letra < 'A' || letra > 'Z') {
            alert("Digite una palabra de 5 letras mayúsculas");
            return false;
        }
    }
    palabraSecreta = palabra;
    alert("VALIDACION COMPLETA")
    return true;
}

//Paso 2
mostraLetra = function (letra, posicion) {
    let idDiv = div + posicion;
    let div = document.getElementById(idDiv);
    if (div) {
        div.textContent = letra;
    }

}
//Paso 3
validar = function (letra) {
 let letraEncontrada = false;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] == letra) {
            mostrarLetra(letra, i);
            coincidencias++;
            letraEncontrada = true;
        }
    }

    if (!letraEncontrada) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
    }
}
//Paso 4
ingresarLetra=function(){

    let letra = document.getElementById("txtLetra").value;

    
    if (!letra) {
        alert("Ingrese una letra");
        return;
    }

    if (esMayuscula(letra)) {
        intentos++;
        validar(letra);

        
        if (coincidencias == 5) {
            alert("!!HA GANADO!!");
        }

    
        if (intentos == 10) {
            alert("!!HA PERDIDO!!");
        }

    } else {
        alert("SOLO INGRESAR MAYÚSCULAS");
    }

    document.getElementById("txtLetra").value ="";
}