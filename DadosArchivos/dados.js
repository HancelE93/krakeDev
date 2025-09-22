jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio)
    if(aleatorio>3){
    console.log("ES MAYOR A 3")
    console.log("!!GANASTE!!");
    }else{
    console.log("ES MENOR A 3")
    console.log("perdiste")
    }
}
// crear una funcion llamada lanzar dado
//no recibes parametros
//retorna el numero aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();// entere 1 y 0
    numeroMultiplicado=aleatorio*6;

    numeroEntero=parseInt(numeroMultiplicado);// entre 0 y 1
   
    valorDado=numeroEntero+1;//entre 0 y 1
   return valorDado;
}