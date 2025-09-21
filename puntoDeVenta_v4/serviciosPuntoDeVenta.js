calcularValorDescuento=function(valorSubtotal, porcentajeDescuento){
    let valorDescuento;
    valorDescuento=valorSubtotal*(porcentajeDescuento/100);
    return valorDescuento;
}

calcularValorIVA=function(valorSubtotal,valorDescuento){
    let valorIVA;
    valorIVA=(valorSubtotal-valorDescuento)*0.12;
    return valorIVA;
}

calcularSubtotal=function(precioProducto,cantidad){
    let total;
    total=precioProducto * cantidad;
    return total;
}

calcularTotal=function(valorSubtotal,valorDescuento,valorIVA){
    let totalPagar;
    totalPagar=(valorSubtotal-valorDescuento)+valorIVA;
    return totalPagar;
}
