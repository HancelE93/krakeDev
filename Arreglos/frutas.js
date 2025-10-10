let frutas=["pera","manzana","banana"]

probarBusqueda=function(){
    let frutasIngresadas=recuperarTexto("lblFruta");
    let resultado=buscar(frutasIngresadas);
    if(resultado==null){
        alert("No existe la fruta");
    }else{
        alert(frutasIngresadas+ " existe en el cesto!!")
    }
}

buscar=function(fruta){
    let elemento;
    let frutaEncontrada=null;
    for(let i=0;i<frutas.length;i++){
        elemento=frutas[i];
        if(fruta==elemento){
            frutaEncontrada=elemento;
            break;
        }
    }
    return frutaEncontrada;
}