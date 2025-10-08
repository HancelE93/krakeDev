let notas=[];

agregarElementos=function(){
    let notas=[];
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNotas(notaRecuperada);
}

agregarNotas=function(nota){
    notas.push(nota);
    mostrarNotas();
}

recorrerArreglo=function(){
   let notaR;
    for( let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
        
    }
}

calcularPromedio=function(){
    let sumaNotas=0;
    let promedio;
    for (let i = 0; i < notas.length; i++){
        sumaNotas += notas[i]; 
    } 
    
    promedio=sumaNotas/notas.length;
    return promedio;
} 

ejecutarPromedio=function(){
    let promedio=calcularPromedio()
    mostrarTexto("lblPromedio",promedio);
}

generarTabla=function(){
    let contendioTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contendioTabla += "<table><tr><td>UNO</td></tr></table>" +"<tr><td>DOS</td></tr></table>"
    cmpTabla.innerHTML=contendioTabla;
}

mostrarNotas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contendioTabla="<table><tr><th>NOTA</th></tr>";
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota=notas[i];
        contendioTabla+="<tr><td>";
        contendioTabla+=miNota
        contendioTabla+="</tr></td>"
    }
    contendioTabla+="</table>"
    cmpTabla.innerHTML=contendioTabla;
}