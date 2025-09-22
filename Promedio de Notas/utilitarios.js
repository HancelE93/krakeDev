 mostrarImagen=function(idComponente,rutaImagen){
    let componente
    componente=document.getElementById(idComponente); 
    componente.src=rutaImagen;
}

mostrarTexto=function(idComponente,mensaje){
    let componente
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje
}

mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}


recuperarTexto=function(idComponente){
    let componente;
    let valorIngesado;
    componente=document.getElementById(idComponente);
    valorIngesado=componente.value;
    return valorIngesado;
}  

recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorDecimal=parseFloat(valorCaja);
    return valorDecimal;
}


 
 
 