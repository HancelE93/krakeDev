calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto

    let nombreProducto = recuperarTexto("txtProducto");
    // Recupera el nombre del producto ingresado en la caja de texto con id "txtProducto"
    // Se guarda como String en la variable nombreProducto

    let precioProducto = recuperarFloat("txtPrecio"); 
    // Recupera el precio del producto ingresado en "txtPrecio"
    // Se convierte a float para poder hacer operaciones aritméticas

    let cantidad = recuperarInt("txtCantidad"); 
    // Recupera la cantidad ingresada en "txtCantidad"
    // Se convierte a entero para poder usarlo en cálculos

    //variables para almacenar los retornos de las funciones
    let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    // Invoca la función calcularSubtotal enviando precioProducto y cantidad
    // El retorno es el subtotal sin descuentos ni IVA
    mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));
    // Muestra el subtotal en el componente lblSubtotal con 2 decimales

    let valorDescuento = calcularDescuentoPorVolumen(cantidad, valorSubtotal);
    // Calcula el descuento según la cantidad comprada y el subtotal
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
    // Muestra el descuento en lblDescuento con 2 decimales

    let valorIVA = calcularValorIVA(valorSubtotal, valorDescuento);
    // Calcula el IVA del 12% sobre subtotal menos descuento
    mostrarTexto("lblValorIVA", valorIVA.toFixed(2));
    // Muestra el IVA en lblValorIVA con 2 decimales

    let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    // Calcula el total a pagar sumando subtotal menos descuento más IVA
    mostrarTexto("lblTotal", valorTotal.toFixed(2));
    // Muestra el total en lblTotal con 2 decimales

    let resumen = "Valor a pagar por " + nombreProducto + " con " + valorTotal.toFixed(2) + " dolares";
    // Crea un resumen en formato de texto con el nombre del producto y total a pagar
    mostrarTexto("lblResumen", resumen);
    // Muestra el resumen en lblResumen

    // Comentarios de planificación y prueba de la función:
    // 1-3. Recuperar nombre, precio y cantidad.
    // 4-5. Calcular subtotal y mostrarlo.
    // 6-7. Calcular descuento y mostrarlo.
    // 8-9. Calcular IVA y mostrarlo.
    // 10-11. Calcular total y mostrarlo.
    // 12. Mostrar resumen del pago.
}

limpiar = function () {
    // Función que reinicia todas las cajas de texto y montos a valores por defecto

    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");
    // Estas variables se recuperan pero no se usan para cálculos
    // Se podrían omitir, pero se dejan por consistencia con calcularValorTotal

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtCantidad", "0");
    // Reinicia los inputs a vacío o 0 según corresponda

    let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", "0.0");
    // Resetea el subtotal a 0.0

    let valorDescuento = calcularDescuentoPorVolumen(cantidad, valorSubtotal);
    mostrarTexto("lblDescuento", "0.0");
    // Resetea el descuento a 0.0

    let valorIVA = calcularValorIVA(valorSubtotal, valorDescuento);
    mostrarTexto("lblValorIVA", "0.0");
    // Resetea el IVA a 0.0

    let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", "0.0");
    // Resetea el total a 0.0

    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 o 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */
