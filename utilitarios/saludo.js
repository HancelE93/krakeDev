saludar=function(){
    //recuperar eñ valor de la caja de texto
    //let nombre;
    //nombre=recuperarTexto("txtNombre");
    let nombre=recuperarTexto("txtNombre");
    //recuperar texto apellido
    let apellido=recuperarTexto("txtApellido");

    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");

    mostrarImagen("imgSaludo","./imagenes/saludogoku.gif")

    let mensajeBienvenida="Bienvenido "+ nombre +" "+apellido;

    mostrarTexto("lblResultados",mensajeBienvenida);
    mostrarTextoEnCaja("txtNombre","");
}

