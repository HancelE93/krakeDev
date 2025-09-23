calcularTasaInteres=function(ingresoAnual,tasa){
    if(ingresoAnual<300000){
        tasa=16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasa=15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasa=14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasa=13;
    }else{
        tasa=12;
    }
    return tasa;
}
calcularCapacidadPago=function(edad,ingresos,egresos){
    let valorCuota;
    if(edad>50){
        valorCuota= (egresos-ingresos)*0.30;
    }else if(edad==50){
        valorCuota= (egresos-ingresos)*0.40;
    }
    return valorCuota
}

calcularDescuento=function(precio,cantidad){
    let total=precio*cantidad;
    let descuento;
    if(cantidad<3){
        descuento=0;
    }else if(cantidad >=3 && cantidad <= 5){
        descuento=0.02;
    }else if(cantidad>=6 && cantidad<=11){
        descuento=0.03;
    }else if(cantidad>=12){
        descuento=0.04;
    }
    let totalDescuento=total-(total*descuento);
    return totalDescuento
      
}

determinarCoresterolLDL=function(nivelCoresterol){
    let edad;
    let coresterol;
    let genero;
    if(edad<=19 && coresterol<170){
        nivelCoresterol=saludable;
    }else if(genero==hombre && edad>=20 && coresterol<200){
        nivelCoresterol=saludable;
    }else if(genero==mujer && edad>=20 && coresterol<200){
        nivelCoresterol=saludable;
    }else{
       nivelCoresterol=alto; 
    }
    return nivelCoresterol
}

validarClave=function(clave){
    if(clave>=8 && clave<=16){
        return true
    }else{
        return false
    }
}

esMayuscula=function(caracter){
    let codigo=caracter.cha=rCodeAt(0);
    if(codigo>=65 &&codigo<=90){
        return true
    }else{
        return false
    }
}

esMinuscula=function(caracter){
    let codigo=caracter.cha=rCodeAt(0);
    if(codigo>=97 &&codigo<=122){
        return true
    }else{
        return false
    }
}
esDigito=function(caracter){
    let codigo=caracter.cha=rCodeAt(0);
    if(codigo>=48 &&codigo<=57){
        return true
    }else{
        return false
    }
}


darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90||notaFisica>90||notaGeometria>90){
        return true
    }else{
        return false
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica>90||notaFisica>90)&& notaGeometria>80){
        return true
    }else{
        return false
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica>90||notaFisica>90||notaGeometria>90)&& notaFisica>notaMatematica){
        return true
    }else{
        return false
    }
}

