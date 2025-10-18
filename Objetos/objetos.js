probarAtributos=function(){
    //objeto persona con sus atributos.
    let persona = {
        nombre : "Hancel",   // Atributo nombre con valor "Hancel"
        apellido : "Espin",  // Atributo apellido con valor "Espin"
        edad : 32,           // Atributo edad con valor 32
        estaVivo : true      // Atributo booleano que indica si la persona está viva
    }
    console.log(persona.nombre);  // Muestra en consola el nombre del objeto persona
    console.log(persona.edad);    // Muestra en consola la edad del objeto persona
    if(persona.estaVivo==false){ // Comprueba si la persona no está viva
        console.log("no esta vivio") // Si no está viva, imprime este mensaje
    }else{
        console.log("esta vivio")     // Si está viva, imprime este mensaje
    }
}

crearProducto=function(){
    // Creamos dos objetos producto con sus atributos
    let producto1 = {
        nombre : "Camisas",  // Nombre del producto
        precio : 35.55,      // Precio del producto
        stock : 2            // Cantidad en inventario
    }
    let producto2 = {
        nombre : "Pantalones",  // Nombre del producto
        precio : 44.80,         // Precio del producto
        stock : 5               // Cantidad en inventario
    }
    console.log(producto1.nombre)   // Muestra el nombre de producto1
    console.log(producto2.precio)   // Muestra el precio de producto2

    // Comparación de stock entre los dos productos
    if(producto1.stock>producto2.stock){
        console.log( "Producto 1 "+ producto1.nombre + " tiene mayor stock") // Si producto1 tiene más stock
    }else if(producto1.stock<producto2.stock){
        console.log( "Producto 2 "+ producto2.nombre + " tiene mayor stock") // Si producto2 tiene más stock
    }else{
        console.log("Ambos prodcutos tienen el mismo stock") // Si ambos tienen igual stock
    }
}

modificarAtributos=function(){
    // Creamos un objeto cuenta con dos atributos
    let cuenta={
        numero:"2212590403",  // Número de cuenta
        saldo: 0.0            // Saldo inicial
    }
    cuenta.saldo=100;    // Se modifica el saldo a 100
    cuenta.saldo+=10;    // Se incrementa el saldo en 10
    console.log(cuenta.saldo)  // Muestra el saldo final en consola (110)
}

crearCliente=function(){
    // Creamos un objeto cliente con algunos atributos
    let cliente={
        cedula:"1723439319", // Cédula del cliente
        nombre: "Rosttony"   // Nombre del cliente
    }
    let cliente1={};         // Creamos un objeto vacío
    cliente1.nombre="Hancel";// Se agrega atributo nombre al objeto vacío
    cliente1.apellido="Espin";// Se agrega atributo apellido
    cliente.cedula="17"      // Modificamos la cédula del primer cliente
}

incrementarSAldo=function(cuenta,monto){
    cuenta.saldo+=monto; // Incrementa el saldo de la cuenta sumando el monto recibido
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){ // Compara edades de las dos personas
        return persona1;              // Retorna persona1 si es mayor
    }else if(persona2.edad>persona1.edad){ 
        return persona2;              // Retorna persona2 si es mayor
    }else{
        return null;                  // Retorna null si tienen la misma edad
    }
}

probarIncrementoSaldo=function(){
    let cta={numero:"123456",saldo:34.0} // Creamos un objeto cuenta con saldo inicial 34
    incrementarSAldo(cta,100);           // Llamamos a la función que incrementa saldo en 100
    console.log(cta.saldo);              // Muestra el saldo final en consola (134)
}

probarDeterminarMayor=function(){
    let per1={nombre:"Daniel",edad:55}; // Persona 1
    let per2={nombre:"Aruba",edad:28};  // Persona 2
    let mayor;                           // Variable para guardar la persona mayor
    mayor=determinarMayor(per1,per2);   // Llamamos a la función para determinar quién es mayor
    if(mayor != null){                   // Si hay un mayor (no son iguales)
        console.log("EL mayor es: "+mayor.nombre); // Muestra el nombre de la persona mayor
    }
}
