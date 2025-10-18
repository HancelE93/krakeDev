saludar = function() {
    let cmpImagenSaludo; 
    // Declaramos una variable llamada cmpImagenSaludo que se usará para guardar el elemento de imagen en el HTML

    cmpImagenSaludo = document.getElementById("imgSaudo"); 
    // Usamos document.getElementById para buscar el elemento HTML cuyo id es "imgSaudo"
    // y guardamos ese elemento dentro de la variable cmpImagenSaludo

    cmpImagenSaludo.src = "./imagenesGit/narutowin.gif"; 
    // Modificamos la propiedad 'src' de la imagen para cambiar la imagen mostrada
    // Ahora la imagen mostrará "narutowin.gif" ubicada en la carpeta "./imagenesGit/"

    console.log("ingresar a saludar"); 
    // Imprime en la consola del navegador el mensaje "ingresar a saludar"
    // Esto sirve para depuración y saber que la función se ejecutó
}


