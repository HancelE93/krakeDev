validarPlaca = function () {
    // Declaración de variables locales para esta función
    let placaIngresar; // Variable para guardar el elemento input de la placa
    let cmpPlacaIngresada; // Variable para guardar el valor ingresado por el usuario
    let erroEstructura; // Variable para almacenar los posibles errores de la estructura de la placa
    
    // Obtenemos el elemento input donde el usuario ingresa la placa
    placaIngresar = document.getElementById("txtplaca");
    
    // Guardamos el valor que el usuario escribió en el input
    cmpPlacaIngresada = placaIngresar.value;

    // Validamos la estructura de la placa (función previamente definida)
    erroEstructura = validarEstructura(cmpPlacaIngresada);
    
    // Si no hay errores de estructura (retorna null)
    if (erroEstructura == null) {
        mostrarTexto("lblValido", "ESTRUCTURA VALIDA"); // Mostramos mensaje de éxito
    } else {
        mostrarTexto("lblerrores", "ESTRUCTURA INVALIDA"); // Mostramos mensaje de error
    }
    
    // Obtenemos la provincia según la primera letra de la placa
    estructuraProvincia = obtenerPlaca(cmpPlacaIngresada);
    if (estructuraProvincia != null) { // Si se pudo determinar la provincia
        mostrarTexto("lblProvincia", "Provincia: " + estructuraProvincia); 
    } else { // Si no se pudo determinar
        mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA");
    }
    
    // Obtenemos el tipo de vehículo según la segunda letra de la placa
    estructuraVehiculo = obtenerTipoDeVehiculo(cmpPlacaIngresada);
    if (estructuraProvincia != null) { // Nota: aquí se verifica la provincia, pero podría ser mejor verificar tipo de vehículo
        mostrarTexto("lblVehiculo", "Vehiculo: " + estructuraVehiculo); 
    } else { 
        mostrarTexto("lblVehiculo", "VEHICULO INCORRECTO");
    }

    // Obtenemos el día de pico y placa según el último dígito de la placa
    estructuraPicoPlaca = obtenerPicoPlaca(cmpPlacaIngresada);
    if (estructuraPicoPlaca != null) { // Si se pudo determinar
        mostrarTexto("lblPicoPlaca", "Pico y Placa del Vehiculo: " + estructuraPicoPlaca); 
    } else { // Si no se pudo determinar
        mostrarTexto("lblPicoPlaca", "Incorrecto");
    }
}


limpiar = function () {
    // Declaración de variables locales
    let placaIngresar;
    let cmpPlacaIngresada;
    let erroEstructura;
    
    // Obtenemos el input de la placa
    placaIngresar = document.getElementById("txtplaca");
    
    // Limpiamos el valor ingresado por el usuario
    cmpPlacaIngresada = placaIngresar.value = "";

    // Validamos estructura aunque esté vacía (esto es para limpiar mensajes)
    erroEstructura = validarEstructura(cmpPlacaIngresada);
    if (erroEstructura == null) {
        mostrarTexto("lblValido", ""); // Limpiamos mensaje de estructura válida
    } else {
        mostrarTexto("lblerrores", ""); // Limpiamos mensaje de estructura inválida
    }
    
    // Limpiamos información de la provincia
    estructuraProvincia = obtenerPlaca(cmpPlacaIngresada);
    if (estructuraProvincia != null) {
        mostrarTexto("lblProvincia", "");
    } else {
        mostrarTexto("lblProvincia", "");
    }
    
    // Limpiamos información del tipo de vehículo
    estructuraVehiculo = obtenerTipoDeVehiculo(cmpPlacaIngresada);
    if (estructuraProvincia != null) {
        mostrarTexto("lblVehiculo", ""); 
    } else {
        mostrarTexto("lblVehiculo", "");
    }

    // Limpiamos información del pico y placa
    estructuraPicoPlaca = obtenerPicoPlaca(cmpPlacaIngresada);
    if (estructuraPicoPlaca != null) {
        mostrarTexto("lblPicoPlaca", ""); 
    } else {
        mostrarTexto("lblPicoPlaca", "");
    }
}
