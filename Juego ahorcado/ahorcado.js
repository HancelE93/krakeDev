//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//Paso 0
esMayuscula=function(caracter){
    let codigo=caracter.charCodeAt(0);
    if(codigo>=65 &&codigo<=90){
        return true
    }else{
        return false
    }
}
//Paso 1
let palabraSecreta="";
guardarPalabra=function(){
    let palabra=document.getElementById("txtSecreta").value;

    if (palabra.length !== 5) {
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
mostraLetra=function(letra,posicion){
let idDiv = div + posicion;
let div = document.getElementById(idDiv);
if (div) {
        div.textContent = letra;
    }

}
