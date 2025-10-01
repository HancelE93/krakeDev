validarEstructura = function (placa) {
    let errores = "";

    if (placa.length != 7 && placa.length != 8) {
        errores += "La placa debe tener 7 u 8 caracteres. ";
    }

    if (placa.length >= 7) {

        let primer = placa.charAt(0);
        if (primer < 'A' || primer > 'Z') {
            errores += "El primer carácter debe ser una letra mayúscula. ";
        }

        let segundo = placa.charAt(1);
        if (segundo < 'A' || segundo > 'Z') {
            errores += "El segundo carácter debe ser una letra mayúscula. ";
        }

        let tercero = placa.charAt(2);
        if (tercero < 'A' || tercero > 'Z') {
            errores += "El tercer carácter debe ser una letra mayúscula. ";
        }

        if (placa.charAt(3) !== '-') {
            errores += "El cuarto carácter debe ser un guión. ";
        }

        let quinto = placa.charAt(4);
        if (quinto < '0' || quinto > '9') {
            errores += "El quinto carácter debe ser un dígito. ";
        }

        let sexto = placa.charAt(5);
        if (sexto < '0' || sexto > '9') {
            errores += "El sexto carácter debe ser un dígito. ";
        }

        let septimo = placa.charAt(6);
        if (septimo < '0' || septimo > '9') {
            errores += "El séptimo carácter debe ser un dígito. ";
        }

        if (placa.length == 8) {
            let octavo = placa.charAt(7);
            if (octavo < '0' || octavo > '9') {
                errores += "El octavo carácter debe ser un dígito. ";
            }
        }
    }

    if (errores == "") {
        return null;
    } else {
        return errores;
    }
}

obtenerPlaca = function (placa) {
    if (!placa || placa.length == 0) {
        return null;
    }

    let letraProvincia = placa.charAt(0).toUpperCase();

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
    return provincias[letraProvincia] || null;
}

obtenerTipoDeVehiculo = function (placa) {
    if (!placa || placa.length < 2) {
        return null;
    }

    let tipoDeVehiculo = placa.charAt(1).toUpperCase(); 

    let auto = {
        A: "Vehiculos comerciales: TAXIS o BUSES",
        Z: "Vehiculos comerciales: TAXIS o BUSES",
        X: "Vehiculos de uso oficial",
        S: "Vehiculos del GObierno de Pichincha",
        M: "Vehiculos Municipales",
    }

    return auto[tipoDeVehiculo] || "VEHICULO PARTICULAR";
}

obtenerPicoPlaca=function(placa){
    if (!placa || placa.length == 0) {
        return "Placa no válida";
    }

    
    let ultimoDigito = placa.charAt(placa.length - 1);

    
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
        return "Ultimo caracter invalido (debe de ser un numero";
    }
}

