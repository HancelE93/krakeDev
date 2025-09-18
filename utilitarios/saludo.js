saludar=function(){
    //recuperar eñ valor de la caja de texto
    //let nombre;
    //nombre=recuperarTexto("txtNombre");
    let nombre=recuperarTexto("txtNombre");
    //recuperar texto apellido
    let apellido=recuperarTexto("txtApellido");

    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
}
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt=function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat=function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorCaja);
    return valorFlotante;
}