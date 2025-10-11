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

modificarAtributos=function(){
    let cuenta={
        numero:"2212590403",
        saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo)
}

crearCliente=function(){
    let cliente={
        cedula:"1723439319",
        nombre: "Rosttony"
    }
   let cliente1={};
   cliente1.nombre="Hancel";
   cliente1.apellido="Espin";
   cliente.cedula="17"
}

incrementarSAldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}

probarIncrementoSaldo=function(){
    let cta={numero:"123456",saldo:34.0}
    incrementarSAldo(cta,100);
    console.log(cta.saldo);
}

probarDeterminarMayor=function(){
    let per1={nombre:"Daniel",edad:55};
    let per2={nombre:"Aruba",edad:28};
    let mayor;
    mayor=determinarMayor(per1,per2);
    if(mayor != null){
        console.log("EL mayor es: "+mayor.nombre);
    }

}