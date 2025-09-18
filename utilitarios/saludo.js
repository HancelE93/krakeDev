saludar=function(){
    //recuperar eñ valor de la caja de texto
    //let nombre;
    //nombre=recuperarTexto("txtNombre");
    let nombre=recuperarTexto("txtNombre");
    //recuperar texto apellido
    let apellido=recuperarTexto("txtApellido");
}
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}