// Función que calcula la tasa de interés según el ingreso anual
calcularTasaInteres=function(ingresoAnual,tasa){
    if(ingresoAnual<300000){ // Si el ingreso anual es menor a 300000
        tasa=16; // La tasa será 16%
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){ // Si ingreso entre 300000 y 499999
        tasa=15; // La tasa será 15%
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){ // Si ingreso entre 500000 y 999999
        tasa=14; // La tasa será 14%
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){ // Si ingreso entre 1M y 1.999M
        tasa=13; // La tasa será 13%
    }else{ // Para ingresos iguales o mayores a 2M
        tasa=12; // La tasa será 12%
    }
    return tasa; // Retorna la tasa calculada
}

// Función que calcula la capacidad de pago según edad, ingresos y egresos
calcularCapacidadPago=function(edad,ingresos,egresos){
    let valorCuota; // Variable para almacenar el valor de la cuota que puede pagar
    if(edad>50){ // Si la persona tiene más de 50 años
        valorCuota= (egresos-ingresos)*0.30; // Puede pagar el 30% de la diferencia entre egresos e ingresos
    }else if(edad==50){ // Si la persona tiene exactamente 50 años
        valorCuota= (egresos-ingresos)*0.40; // Puede pagar el 40% de la diferencia
    }
    return valorCuota // Retorna el valor de la cuota
}

// Función que calcula el precio total con descuento según la cantidad de productos
calcularDescuento=function(precio,cantidad){
    let total=precio*cantidad; // Calcula el total sin descuento
    let descuento; // Variable para almacenar el porcentaje de descuento
    if(cantidad<3){ // Si la cantidad es menor a 3
        descuento=0; // No hay descuento
    }else if(cantidad >=3 && cantidad <= 5){ // Si la cantidad es entre 3 y 5
        descuento=0.02; // Descuento del 2%
    }else if(cantidad>=6 && cantidad<=11){ // Si la cantidad es entre 6 y 11
        descuento=0.03; // Descuento del 3%
    }else if(cantidad>=12){ // Si la cantidad es 12 o más
        descuento=0.04; // Descuento del 4%
    }
    let totalDescuento=total-(total*descuento); // Calcula el total después del descuento
    return totalDescuento // Retorna el total con descuento
}

// Función que determina el nivel de colesterol LDL (esta función tiene variables locales sin inicializar)
determinarCoresterolLDL=function(nivelCoresterol){
    let edad; // Variable para edad (debería recibirse como parámetro)
    let coresterol; // Variable para nivel de colesterol (debería recibirse como parámetro)
    let genero; // Variable para género (debería recibirse como parámetro)
    if(edad<=19 && coresterol<170){ // Si es menor o igual a 19 años y colesterol < 170
        nivelCoresterol=saludable; // Considerado saludable
    }else if(genero==hombre && edad>=20 && coresterol<200){ // Hombre mayor de 20 y colesterol < 200
        nivelCoresterol=saludable; // Considerado saludable
    }else if(genero==mujer && edad>=20 && coresterol<200){ // Mujer mayor de 20 y colesterol < 200
        nivelCoresterol=saludable; // Considerado saludable
    }else{ // En cualquier otro caso
       nivelCoresterol=alto; // Colesterol alto
    }
    return nivelCoresterol // Retorna el nivel determinado
}

// Función que valida la longitud de una clave (contraseña)
validarClave=function(clave){
    if(clave>=8 && clave<=16){ // Si la clave tiene entre 8 y 16 caracteres
        return true // Retorna verdadero
    }else{
        return false // Si no cumple, retorna falso
    }
}

// Función que verifica si un caracter es mayúscula
esMayuscula=function(caracter){
    let codigo=caracter.cha=rCodeAt(0); // Obtiene el código ASCII del caracter
    if(codigo>=65 &&codigo<=90){ // ASCII de 'A' a 'Z'
        return true // Es mayúscula
    }else{
        return false // No es mayúscula
    }
}

// Función que verifica si un caracter es minúscula
esMinuscula=function(caracter){
    let codigo=caracter.cha=rCodeAt(0); // Obtiene código ASCII
    if(codigo>=97 &&codigo<=122){ // ASCII de 'a' a 'z'
        return true // Es minúscula
    }else{
        return false // No es minúscula
    }
}

// Función que verifica si un caracter es un dígito
esDigito=function(caracter){
    let codigo=caracter.cha=rCodeAt(0); // Obtiene código ASCII
    if(codigo>=48 &&codigo<=57){ // ASCII de '0' a '9'
        return true // Es dígito
    }else{
        return false // No es dígito
    }
}

// Función que da permiso si alguna de las notas es mayor a 90
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90||notaFisica>90||notaGeometria>90){ // Si alguna nota es >90
        return true // Da permiso
    }else{
        return false // No da permiso
    }
}

// Función que otorga permiso si alguna nota >90 y geometría >80
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica>90||notaFisica>90)&& notaGeometria>80){ 
        return true // Da permiso
    }else{
        return false // No da permiso
    }
}

// Función que permite salir si alguna nota >90 y física > matemática
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica>90||notaFisica>90||notaGeometria>90)&& notaFisica>notaMatematica){
        return true // Da permiso de salida
    }else{
        return false // No da permiso
    }
}
