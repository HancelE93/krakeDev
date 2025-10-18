calcularDescuentoPorVolumen = function (cantidad, valorSubtotal) {
    // Esta función calcula el descuento en base al volumen de productos comprados
    
    let tasa = 0; 
    // Inicializamos la variable 'tasa' que será el porcentaje de descuento

    if (cantidad < 3) {
        tasa = 0;
        // Si se compran menos de 3 unidades, no hay descuento
    } else if (cantidad >= 3 && cantidad <= 5) {
        tasa = 3;
        // Si se compran entre 3 y 5 unidades, descuento del 3%
    } else if (cantidad >= 6 && cantidad <= 11) {
        tasa = 4;
        // Si se compran entre 6 y 11 unidades, descuento del 4%
    } else if (cantidad >= 12) {
        tasa = 5;
        // Si se compran 12 o más unidades, descuento del 5%
    }

    return valorSubtotal * (tasa / 100);
    // Retorna el valor del descuento calculado aplicando el porcentaje sobre el subtotal
}


calcularValorDescuento = function (valorSubtotal, porcentajeDescuento) {
    // Esta función calcula el descuento dado un porcentaje específico
    
    let valorDescuento;
    valorDescuento = valorSubtotal * (porcentajeDescuento / 100);
    // Aplica el porcentaje de descuento al subtotal

    return valorDescuento;
    // Devuelve el valor del descuento
}


calcularValorIVA = function (valorSubtotal, valorDescuento) {
    // Calcula el IVA (12%) sobre el subtotal después de aplicar el descuento
    
    let valorIVA;
    valorIVA = (valorSubtotal - valorDescuento) * 0.12;
    // 12% de IVA aplicado al subtotal neto

    return valorIVA;
    // Retorna el valor del IVA
}


calcularSubtotal = function (precioProducto, cantidad) {
    // Calcula el subtotal multiplicando el precio por la cantidad
    
    let total;
    total = precioProducto * cantidad;
    // Multiplicación simple

    return total;
    // Retorna el subtotal
}


calcularTotal = function (valorSubtotal, valorDescuento, valorIVA,) {
    // Calcula el total a pagar considerando subtotal, descuento e IVA
    
    let totalPagar;
    let nombreProducto;
    let cantidad;
    let precioProducto;

    // Recupera los datos del formulario usando funciones auxiliares
    nombreProducto = recuperarTexto("txtProducto");
    cantidad = recuperarInt("txtCantidad");
    precioProducto = recuperarFloat("txtPrecio");

    // Valida que los datos sean correctos antes de calcular el total
    if (esProductoValido(nombreProducto, "lblErrorProducto") & esCantidadValido(cantidad, "lblErrorCantidad") & esPrecioValido(precioProducto, "lblErrorPrecio")) {
        totalPagar = (valorSubtotal - valorDescuento) + valorIVA;
        // Calcula el total neto
        return totalPagar;
    } else {
        mostrarTexto("lblTotal", "0.0");
        // Si hay error en los datos, se muestra 0.0 en el total
    }
}


esProductoValido = function (nombreProducto, idComponenteError) {
    // Valida que el nombre del producto sea correcto
    let hayErrores = false; 

    if (!nombreProducto) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        // Si el campo está vacío, muestra un error
        return false;
    }

    if (nombreProducto.length > 10) {
        mostrarTexto(idComponenteError, "El nombre del producto no puede tener más de 10 caracteres");
        // Si el nombre es demasiado largo, muestra un error
        return false;
    }

    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
        // Si no hay errores, limpia el mensaje de error
    }

    return !hayErrores;
    // Retorna true si no hubo errores
}


esCantidadValido = function (cantidad, idComponenteError) {
    // Valida que la cantidad ingresada sea correcta
    let hayErrores = false;

    if (!cantidad || isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
        // Si el campo está vacío o no es un número, muestra error
    }

    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "La cantidad debe estar entre 0 y 100");
        hayErrores = true;
        // Si la cantidad está fuera del rango permitido, muestra error
    }

    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
        // Si no hay errores, limpia el mensaje
    }

    return !hayErrores;
    // Retorna true si la cantidad es válida
}


esPrecioValido = function (precioProducto, idComponenteError) {
    // Valida que el precio ingresado sea correcto
    let hayErrores = false;

    if (!precioProducto || isNaN(precioProducto)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        hayErrores = true;
        // Si el precio está vacío o no es un número, muestra error
    }

    if (precioProducto < 0 || precioProducto > 50) {
        mostrarTexto(idComponenteError, "El precio debe estar entre 0 y 50");
        hayErrores = true;
        // Si el precio está fuera del rango permitido, muestra error
    }

    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
        // Si no hay errores, limpia el mensaje
    }

    return !hayErrores;
    // Retorna true si el precio es válido
}
