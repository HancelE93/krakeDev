calcularDescuentoPorVolumen = function (cantidad, valorSubtotal) {
    let tasa = 0;
    if (cantidad < 3) {
        tasa = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        tasa = 3;
    } else if (cantidad >= 6 && cantidad <= 11) {
        tasa = 4;
    } else if (cantidad >= 12) {
        tasa = 5;
    }
    return valorSubtotal * (tasa / 100);
}



calcularValorDescuento = function (valorSubtotal, porcentajeDescuento) {
    let valorDescuento;
    valorDescuento = valorSubtotal * (porcentajeDescuento / 100);
    return valorDescuento;
}

calcularValorIVA = function (valorSubtotal, valorDescuento) {
    let valorIVA;
    valorIVA = (valorSubtotal - valorDescuento) * 0.12;
    return valorIVA;
}

calcularSubtotal = function (precioProducto, cantidad) {
    let total;
    total = precioProducto * cantidad;
    return total;
}

calcularTotal = function (valorSubtotal, valorDescuento, valorIVA,) {
    let totalPagar;
    let nombreProducto;
    let cantidad;
    let precioProducto;
   
    
    nombreProducto = recuperarTexto("txtProducto");
    cantidad = recuperarInt("txtCantidad");
    precioProducto = recuperarFloat("txtPrecio");

    if (esProductoValido(nombreProducto, "lblErrorProducto") & esCantidadValido(cantidad, "lblErrorCantidad") & esPrecioValido(precioProducto, "lblErrorPrecio")) {
        
        totalPagar = (valorSubtotal - valorDescuento) + valorIVA;
        return totalPagar;

    } else {
        mostrarTexto("lblTotal", "0.0");
    }

    
}


esProductoValido = function (nombreProducto, idComponenteError) {
    let hayErrores = false;
    if (!nombreProducto) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    }
    if (nombreProducto.length > 10) {
        mostrarTexto(idComponenteError, "El nombre del producto no puede tener más de 10 caracteres");
        return false;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;

}


esCantidadValido = function (cantidad, idComponenteError) {
    let hayErrores = false;
    if (!cantidad || isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "La cantidad debe estar entre 0 y 100");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;

}

esPrecioValido = function (precioProducto, idComponenteError) {
    let hayErrores = false;
    if (!precioProducto || isNaN(precioProducto)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (precioProducto < 0 || precioProducto > 50) {
        mostrarTexto(idComponenteError, "El precio debe estar entre 0 y 50");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}



