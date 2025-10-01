validarPlaca = function () {
    let placaIngresar;
    let cmpPlacaIngresada;
    let erroEstructura
    
    placaIngresar = document.getElementById("txtplaca");
    cmpPlacaIngresada = placaIngresar.value;

    erroEstructura = validarEstructura(cmpPlacaIngresada);
    if (erroEstructura == null) {
        mostrarTexto("lblValido", "ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblerrores", "ESTRUCTURA INVALIDA");
    }
    
    estructuraProvincia = obtenerPlaca(cmpPlacaIngresada);
    if (estructuraProvincia!= null) {
        mostrarTexto("lblProvincia", "Provincia: " + estructuraProvincia);
    } else {
        mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA");
    }
    
    estructuraVehiculo=obtenerTipoDeVehiculo (cmpPlacaIngresada);
    if (estructuraProvincia!= null) {
        mostrarTexto("lblVehiculo", "Vehiculo: " + estructuraVehiculo); 
    } else {
        mostrarTexto("lblVehiculo", "VEHICULO INCORRECTO");
    }

    estructuraPicoPlaca=obtenerPicoPlaca(cmpPlacaIngresada);
    if (estructuraPicoPlaca!= null) {
        mostrarTexto("lblPicoPlaca", "Pico y Placa del Vehiculo: " + estructuraPicoPlaca); 
    } else {
        mostrarTexto("lblPicoPlaca", "Incorrecto");
    }
}

limpiar=function(){
    let placaIngresar;
    let cmpPlacaIngresada;
    let erroEstructura
    
    placaIngresar = document.getElementById("txtplaca");
    cmpPlacaIngresada = placaIngresar.value="";

     erroEstructura = validarEstructura(cmpPlacaIngresada);
    if (erroEstructura == null) {
        mostrarTexto("lblValido", "");
    } else {
        mostrarTexto("lblerrores", "");
    }
    
    estructuraProvincia = obtenerPlaca(cmpPlacaIngresada);
    if (estructuraProvincia!= null) {
        mostrarTexto("lblProvincia", "");
    } else {
        mostrarTexto("lblProvincia", "");
    }
    
    estructuraVehiculo=obtenerTipoDeVehiculo (cmpPlacaIngresada);
    if (estructuraProvincia!= null) {
        mostrarTexto("lblVehiculo", ""); 
    } else {
        mostrarTexto("lblVehiculo", "");
    }

    estructuraPicoPlaca=obtenerPicoPlaca(cmpPlacaIngresada);
    if (estructuraPicoPlaca!= null) {
        mostrarTexto("lblPicoPlaca", ""); 
    } else {
        mostrarTexto("lblPicoPlaca", "");
    }
}

