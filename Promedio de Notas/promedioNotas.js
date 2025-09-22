calcularPromedioNotas=function(){
    
    let nota1=recuperarFloat("N1");
    let nota2=recuperarFloat("N2");
    let nota3=recuperarFloat("N3");
    

    let promedio=calcularPromedio(nota1,nota2,nota3);
    mostrarTexto("lblResultado",promedio);
    if(promedio<5 && promedio>0){
    mostrarTexto("mensaje","REPROBADO");
    mostrarImagen("reprobado","./imagenesgif/reprobado.gif");
    }else if(promedio>=5 && promedio<=8){
    mostrarImagen("buentrabajo","./imagenesgif/buentrabajo.gif");
    mostrarTexto("mensaje","BUEN TRABAJO");
    }else if(promedio>8 && promedio<=10){
    mostrarImagen("excelente","./imagenesgif/excelente.gif");
    mostrarTexto("mensaje","EXCELENTE");
    }else{
    mostrarImagen("error","./imagenesgif/error.gif");
    mostrarTexto("mensaje","DATOS INCORRECTOS");
    }
}
