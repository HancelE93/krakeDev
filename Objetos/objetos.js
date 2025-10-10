probarAtributos=function(){
    //objeto persona con sus atributos.
    let persona = {
        nombre : "Hancel",
        apellido : "Espin",
        edad : 32,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivio")
    }else{
        console.log("esta vivio")
    }
}

crearProducto=function(){
    let producto1 = {
        nombre : "Camisas",
        precio : 35.55,
        stock : 2
    }
    let producto2 = {
        nombre : "Pantalones",
        precio : 44.80,
        stock : 5
    }
    console.log(producto1.nombre)
    console.log(producto2.precio)

    if(producto1.stock>producto2.stock){
        console.log( "Producto 1 "+ producto1.nombre + " tiene mayor stock")
    }else if(producto1.stock<producto2.stock){
        console.log( "Producto 2 "+ producto2.nombre + " tiene mayor stock")
    }else{
        console.log("Ambos prodcutos tienen el mismo stock")
    }
}
