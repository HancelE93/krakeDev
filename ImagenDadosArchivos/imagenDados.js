let puntos;
puntos=0;
let lanzamientos;
lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(resultado);
    
}
modificarPuntos=function(numero){
    //le guardamos la suma en la variable puntos
    //asi puntos se va aumentado
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    // si el juegador optiene mas de 20 puntos
    if(puntos>20){
        cambiarTexto("lblWinOrLose","GANASTE");
        limpiar();
    }
    
    // msotras el mensaje ganaste
    //invocar a limpiar
}
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamiento",lanzamientos);
    //NO recibe parametros
    //resta 1 la variable lanzamientos
    //guarda el resultado en la misma varibale
    //muesttra en pantalla
    // si lamzamiento llega a 0 GAME OVER
    if(lanzamientos==0){
        cambiarTexto("lblWinOrLose","GAME OVER");
        limpiar();
    }
    //invoca a limpiar
}
limpiar=function(){
    let puntos;
    puntos=0;
    let lanzamientos;   
    lanzamientos=5;
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamiento",lanzamientos);
    cambiarImagen("imgDado","");
//colocar puntaje 0 y lanzamiento en 5
//variables y pantalla
//quitar imagen ""
}
mostrarCara=function(numero){
    if(numero==1){
        cambiarImagen("imgDado","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero==6){
        cambiarImagen("imgDado","dados6.png");
    }
//fumcion mostrarCara, recibe el numero que quiere mostrar
//muestra la imagen correspondiente al numero que recibe
//no retorna nada 
// doble igual == sirve para comparar
// un igual = solo se asigna
}
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}

