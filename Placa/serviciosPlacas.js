validarEstructura = function (placa) {
    let errores = ""; // Variable para acumular mensajes de error encontrados

    // Validamos longitud de la placa: debe ser 7 u 8 caracteres
    if (placa.length != 7 && placa.length != 8) {
        errores += "La placa debe tener 7 u 8 caracteres. "; // Agregamos mensaje si la longitud no es correcta
    }

    // Si la placa tiene al menos 7 caracteres, seguimos con la validación detallada
    if (placa.length >= 7) {

        let primer = placa.charAt(0); // Primer carácter
        if (primer < 'A' || primer > 'Z') { // Debe ser letra mayúscula
            errores += "El primer carácter debe ser una letra mayúscula. ";
        }

        let segundo = placa.charAt(1); // Segundo carácter
        if (segundo < 'A' || segundo > 'Z') { // Debe ser letra mayúscula
            errores += "El segundo carácter debe ser una letra mayúscula. ";
        }

        let tercero = placa.charAt(2); // Tercer carácter
        if (tercero < 'A' || tercero > 'Z') { // Debe ser letra mayúscula
            errores += "El tercer carácter debe ser una letra mayúscula. ";
        }

        if (placa.charAt(3) !== '-') { // Cuarto carácter debe ser guión "-"
            errores += "El cuarto carácter debe ser un guión. ";
        }

        let quinto = placa.charAt(4); // Quinto carácter
        if (quinto < '0' || quinto > '9') { // Debe ser dígito
            errores += "El quinto carácter debe ser un dígito. ";
        }

        let sexto = placa.charAt(5); // Sexto carácter
        if (sexto < '0' || sexto > '9') { // Debe ser dígito
            errores += "El sexto carácter debe ser un dígito. ";
        }

        let septimo = placa.charAt(6); // Séptimo carácter
        if (septimo < '0' || septimo > '9') { // Debe ser dígito
            errores += "El séptimo carácter debe ser un dígito. ";
        }

        // Si la placa tiene 8 caracteres, validamos también el octavo
        if (placa.length == 8) {
            let octavo = placa.charAt(7); // Octavo carácter
            if (octavo < '0' || octavo > '9') { // Debe ser dígito
                errores += "El octavo carácter debe ser un dígito. ";
            }
        }
    }

    // Retornamos null si no hay errores, o los errores encontrados
    if (errores == "") {
        return null;
    } else {
        return errores;
    }
}


obtenerPlaca = function (placa) {
    if (!placa || placa.length == 0) { // Si no se ingresó placa o está vacía
        return null;
    }

    let letraProvincia = placa.charAt(0).toUpperCase(); // Primer letra indica provincia, convertida a mayúscula

    // Objeto con todas las provincias y su letra inicial
    let provincias = {
        A: "Azuay",
        B: "Bolívar",
        C: "Carchi",
        E: "Esmeraldas",
        G: "Guayas",
        H: "Chimborazo",
        I: "Imbabura",
        L: "Loja",
        M: "Manabí",
        N: "Napo",
        O: "El Oro",
        P: "Pichincha",
        Q: "Orellana",
        R: "Los Ríos",
        S: "Santa Elena",
        T: "Tungurahua",
        U: "Sucumbíos",
        V: "Morona Santiago",
        W: "Galápagos",
        X: "Cotopaxi",
        Y: "Pastaza",
        Z: "Zamora Chinchipe"
    }
    return provincias[letraProvincia] || null; // Retornamos la provincia correspondiente o null si no existe
}


obtenerTipoDeVehiculo = function (placa) {
    if (!placa || placa.length < 2) { // Si la placa no existe o tiene menos de 2 caracteres
        return null;
    }

    let tipoDeVehiculo = placa.charAt(1).toUpperCase(); // Segundo carácter indica tipo de vehículo

    // Objeto con tipos especiales de vehículos
    let auto = {
        A: "Vehiculos comerciales: TAXIS o BUSES",
        Z: "Vehiculos comerciales: TAXIS o BUSES",
        X: "Vehiculos de uso oficial",
        S: "Vehiculos del GObierno de Pichincha",
        M: "Vehiculos Municipales",
    }

    return auto[tipoDeVehiculo] || "VEHICULO PARTICULAR"; // Retornamos el tipo específico o "particular" si no coincide
}


obtenerPicoPlaca=function(placa){
    if (!placa || placa.length == 0) { // Validación inicial
        return "Placa no válida";
    }

    let ultimoDigito = placa.charAt(placa.length - 1); // Último carácter de la placa

    // Determinamos el día de restricción según el último dígito
    if (ultimoDigito === "1" || ultimoDigito === "2") {
        return "Lunes";
    } else if (ultimoDigito === "3" || ultimoDigito === "4") {
        return "Martes";
    } else if (ultimoDigito === "5" || ultimoDigito === "6") {
        return "Miercoles";
    } else if (ultimoDigito === "7" || ultimoDigito === "8") {
        return "Jueves";
    } else if (ultimoDigito === "9" || ultimoDigito === "0") {
        return "Viernes";
    } else {
        return "Ultimo caracter invalido (debe de ser un numero"; // Mensaje si el último carácter no es un número
    }
}
