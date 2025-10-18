// Arreglo inicial de empleados con algunos registros de ejemplo
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 }, // empleado 1
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }, // empleado 2
    { cedula: "1723439319", nombre: "Hancel", apellido: "Espin", sueldo: 800 } // empleado 3
]

// Arreglo global donde se almacenarán los roles (nóminas) generados
let roles = []

// Flag que indica si se está creando un nuevo empleado (true) o editando uno existente (false)
let esNuevo = false;

// Función que muestra la tabla de empleados en el elemento con id "tablaEmpleados"
mostrarEmpleados = function () {
    // Obtiene referencia al elemento DOM donde se inyectará la tabla
    let cmpTabla = document.getElementById("tablaEmpleados");
    // Construye el HTML del encabezado de la tabla (columnas)
    let contenidoTabla = "<table class=\"miTabla\"><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SULEDO</th>" +
        "</tr>";
    // Variable temporal para iterar los empleados
    let elementoEmpleados;
    // Recorre el arreglo 'empleados'
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleados = empleados[i]; // toma el empleado actual
        // Agrega una fila a la tabla con los valores del empleado
        contenidoTabla +=
            "<tr><td>" + elementoEmpleados.cedula + "</td>"
            + "<td>" + elementoEmpleados.nombre + "</td>"
            + "<td>" + elementoEmpleados.apellido + "</td>"
            + "<td>" + elementoEmpleados.sueldo + "</td>"
            + "</tr>"
    }
    // Cierra la etiqueta de la tabla
    contenidoTabla += "</table>"
    // Inserta el HTML completo dentro del contenedor en la página
    cmpTabla.innerHTML = contenidoTabla;
}



// Muestra la vista/formulario para trabajar con empleados
mostrarOpcionEmpleado = function () {
    esNuevo = true; // marca que se va a crear un nuevo empleado
    mostrarComponente("divEmpleado"); // muestra el div del empleado
    ocultarComponente("divRol"); // oculta la sección de roles
    ocultarComponente("divResumen"); // oculta la sección resumen
    mostrarEmpleados(); // actualiza la tabla de empleados en pantalla
    deshabilitarComponente("txtCedula"); // deshabilita el input de cédula
    deshabilitarComponente("txtNombre"); // deshabilita el input de nombre
    deshabilitarComponente("txtApellido"); // deshabilita el input de apellido
    deshabilitarComponente("txtSueldo"); // deshabilita el input de sueldo
    deshabilitarComponente("btnGuardar"); // deshabilita el botón guardar
}

// Muestra la vista para gestionar roles (nóminas)
mostrarOpcionRol = function () {

    mostrarComponente("divRol"); // muestra el div de roles
    ocultarComponente("divEmpleado"); // oculta la sección de empleados
    ocultarComponente("divResumen"); // oculta la sección resumen
    deshabilitarComponente("lblguardar") // deshabilita el control identificado por 'lblguardar'
    mostrarRoles(); // muestra la lista/tabla de roles existentes
    
}

// Muestra la vista resumen (posiblemente totales o histórico)
mostrarOpcionResumen = function () {

    mostrarComponente("divResumen"); // muestra el div resumen
    ocultarComponente("divEmpleado"); // oculta empleados
    ocultarComponente("divRol"); // oculta roles

}

// Prepara el formulario para crear un nuevo empleado limpiando campos y habilitándolos
ejecutarNuevo = function () {
    document.getElementById("txtCedula").value = ""; // limpia el input cédula
    document.getElementById("txtNombre").value = ""; // limpia el input nombre
    document.getElementById("txtApellido").value = ""; // limpia el input apellido
    document.getElementById("txtSueldo").value = ""; // limpia el input sueldo

    habilitarComponente("txtCedula"); // habilita el input cédula
    habilitarComponente("txtNombre"); // habilita el input nombre
    habilitarComponente("txtApellido"); // habilita el input apellido
    habilitarComponente("txtSueldo"); // habilita el input sueldo
    habilitarComponente("btnGuardar"); // habilita el botón guardar
}

// Busca un empleado por su cédula en el arreglo 'empleados'
buscarEmpleado = function (cedula) {
    let elementoCedula;
    // Recorre el arreglo 'empleados'
    for (let i = 0; i < empleados.length; i++) {
        elementoCedula = empleados[i]; // toma el empleado actual
        if (elementoCedula.cedula == cedula) { // compara cédulas (== en vez de === permite coincidencias flexibles)
            return elementoCedula; // retorna el objeto empleado si coincide
        }
    }
    return null; // si no lo encuentra retorna null
}

// Agrega un empleado al arreglo si no existe uno con la misma cédula
agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula); // verifica existencia
    if (resultado == null) { // si no existe
        empleados.push(empleado); // agrega al arreglo
        return true; // indica éxito
    } else {
        return false; // ya existe, no agrega
    }
}

// Guarda el empleado (nuevo o modificado) según el flag esNuevo
guardar = function () {
    // Recupera valores desde los inputs del DOM usando funciones auxiliares
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    // Limpia los mensajes de error (labels) antes de validar
    document.getElementById("lblErrorCedula").textContent = "";
    document.getElementById("lblErrorNombre").textContent = "";
    document.getElementById("lblErrorApellido").textContent = "";
    document.getElementById("lblErrorSueldo").textContent = "";

    // Validaciones
    let esValido = true;

    // Valida que la cédula tenga exactamente 10 dígitos numéricos
    if (valorCedula.length !== 10 || isNaN(Number(valorCedula))) {
        document.getElementById("lblErrorCedula").textContent = "La cédula debe tener exactamente 10 dígitos numéricos.";
        esValido = false;
    }


    if (valorNombre.length < 3 || !esSoloMayusculas(valorNombre)) {
        document.getElementById("lblErrorNombre").textContent = "El nombre debe tener al menos 3 caracteres y estar en mayúsculas.";
        esValido = false;
    }

    if (valorApellido.length < 3 || !esSoloMayusculas(valorApellido)) {
        document.getElementById("lblErrorApellido").textContent = "El Apellido debe tener al menos 3 caracteres y estar en mayúsculas.";
        esValido = false;
    }

    if (valorSueldo < 400 || valorSueldo > 5000) {
        document.getElementById("lblErrorSueldo").textContent = "El sueldo debe ser un número entre 400 y 5000.";
        esValido = false;
    }

    // Si alguna validación falló, sale de la función sin guardar
    if (!esValido) {
        return;
    }

    // Crea el objeto empleado con los valores validados
    let nuevoEmpleado = {
        cedula: valorCedula,
        nombre: valorNombre,
        apellido: valorApellido,
        sueldo: valorSueldo
    }

    if (esNuevo) {
        // Si es nuevo, intenta agregar al arreglo
        let resultado = agregarEmpleado(nuevoEmpleado);
        if (resultado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE"); // mensaje de éxito
            mostrarEmpleados(); // actualiza la tabla de empleados
            esNuevo = false; // ahora ya no está en modo 'nuevo'

            // Deshabilitar campos para evitar ediciones accidentales después de guardar
            deshabilitarComponente("txtCedula");
            deshabilitarComponente("txtNombre");
            deshabilitarComponente("txtApellido");
            deshabilitarComponente("txtSueldo");
            deshabilitarComponente("btnGuardar");

        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA"); // mensaje de error si la cédula ya existe
        }
    } else {
        // Si no es nuevo, se intenta modificar el empleado existente
        let modificado = modificarEmpleado(nuevoEmpleado);
        if (modificado) {
            alert("EMPLEADO MODIFICADO CORRECTAMENTE");
            mostrarEmpleados();
            esNuevo = false;

        }
    }
}

// Modifica un empleado existente con los nuevos valores
modificarEmpleado = function (empleado) {
    // Modificación
    let empleadoExistente = buscarEmpleado(empleado.cedula); // busca por cédula
    if (empleadoExistente != null) { // si existe
        empleadoExistente.nombre = empleado.nombre; // actualiza nombre
        empleadoExistente.apellido = empleado.apellido; // actualiza apellido
        empleadoExistente.sueldo = empleado.sueldo; // actualiza sueldo

        // Deshabilitar campos luego de la modificación
        deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");

        return true;  // Indica que se modificó
    }
    return false; // No se encontró el empleado, no se modificó

}


// Función que verifica si un texto está compuesto solo por letras mayúsculas A-Z
esSoloMayusculas = function (texto) {
    for (let i = 0; i < texto.length; i++) {
        let c = texto.charAt(i); // obtiene el carácter en la posición i
        if (c < 'A' || c > 'Z') { // compara en base al orden Unicode/ASCII
            return false; // si encuentra un carácter fuera del rango A-Z retorna false
        }
    }
    return true; // si todos los caracteres están en A-Z retorna true
}

// Llama a guardar() y luego deshabilita los controles (útil para flujo donde después de guardar no se edita)
guardarDeshabilitar = function () {
    guardar(); // ejecuta la lógica de guardado ya definida
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

// Ejecuta la búsqueda de un empleado por la cédula que esté en el input 'txtCedula'
ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedula"); // obtiene el valor del input
    let empleado = buscarEmpleado(valorCedula); // busca en el arreglo
    if (empleado == null) {
        alert("EMPLEADON, NO EXISTE"); // mensaje si no existe (nota: texto con humor)
    } else {
        // Si existe, llena los inputs con los datos del empleado
        document.getElementById("txtNombre").value = empleado.nombre;
        document.getElementById("txtApellido").value = empleado.apellido;
        document.getElementById("txtSueldo").value = empleado.sueldo;
        deshabilitarComponente("txtCedula"); // bloquea la cédula para evitar cambiarla
        habilitarComponente("txtNombre"); // permite editar el nombre
        habilitarComponente("txtApellido"); // permite editar el apellido
        habilitarComponente("txtSueldo"); // permite editar el sueldo
        habilitarComponente("btnGuardar"); // habilita el botón guardar para aplicar cambios
        esNuevo = false // marca que ahora estamos en modo edición (no nuevo)
    }
}

// Limpia los campos del formulario y deshabilita los controles
limpiar = function () {
    document.getElementById("txtCedula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtSueldo").value = "";
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    esNuevo = false
}

// Busca un empleado por cédula para la sección roles y muestra su información en los divs correspondientes
buscarPorRol = function () {
    let valorCedula = recuperarTexto("txtBusquedaCedulaRol"); // lectura del input
    let empleado = buscarEmpleado(valorCedula); // busca el empleado

    if (empleado == null) {
        alert("EMPLEADO NO EXISTE"); // no encontrado
    } else {
        // Si se encuentra, muestra sus datos en elementos de lectura (divs/spans)
        document.getElementById("infoCedula").textContent = empleado.cedula;
        document.getElementById("infoNombre").textContent = empleado.nombre + " " + empleado.apellido;
        document.getElementById("infoSueldo").textContent = empleado.sueldo;
    }

}

// Calcula el aporte del empleado (IESS u otra deducción) como 9.5% del sueldo
calcularAporteEmpleado = function (sueldo) {
    let aporte = sueldo * 0.095;
    return aporte;
}

// Calcula el valor neto a pagar a un empleado usando sueldo, aporte y descuento
calcularValorAPagar = function (sueldo, aporte, descuento) {
    let valorPagar = sueldo - aporte - descuento
    return valorPagar;
}

// Función que calcula y muestra el aporte y el pago a realizar en la vista de roles
calcularRol = function () {
    // Recupera el valor del descuento ingresado en el input "txtDescuentos"
    // 'recuperarFloat' devuelve un número flotante (tipo Number) desde un input
    let descuento = recuperarFloat("txtDescuentos");

    // Recupera el valor del sueldo ingresado en el div "infoSueldo"
    // 'recuperarFloatDiv' convierte el texto dentro del div a número flotante
    let sueldo = recuperarFloatDiv("infoSueldo");

    // Validación: si el descuento no es un número, es negativo o mayor que el sueldo
    if (isNaN(descuento) || descuento < 0 || descuento > sueldo) {
        alert("El descuento debe ser un número válido entre 0 y el sueldo del empleado.");
        return; // Termina la función aquí, no se ejecuta nada más
    }

    // Calcula el aporte del empleado usando otra función que recibe el sueldo
    let aporte = calcularAporteEmpleado(sueldo);

    // Muestra el aporte en el div "infoIESS"
    // .textContent: pone texto dentro de un div (el usuario no lo puede editar)
    // toFixed(2): formatea el número con 2 decimales para mostrarlo bonito
    document.getElementById("infoIESS").textContent = aporte.toFixed(2);

    // Calcula el valor total a pagar usando sueldo, descuento y aporte
    let valorAPagar = calcularValorAPagar(sueldo, descuento, aporte);

    // Muestra el valor total a pagar en el div "infoPago"
    // .textContent: pone texto dentro de un div (no editable por el usuario)
    // toFixed(2): asegura que se muestre con 2 decimales
    document.getElementById("infoPago").textContent = valorAPagar.toFixed(2);

    habilitarComponente("lblguardar"); // habilita el control/etiqueta para guardar el rol
}

// Busca un rol por cédula dentro del arreglo 'roles'
buscarRol = function (cedula) {
    // Recorremos el arreglo roles
    for (let i = 0; i < roles.length; i++) {
        let rol = roles[i];
        // Si encontramos la cédula correspondiente, retornamos el objeto rol
        if (rol.cedula === cedula) {
            return rol;
        }
    }
    // Si no encontramos nada, retornamos null
    return null;
}

// Agrega un rol al arreglo si no existe otro con la misma cédula
agregarRol = function (rol) {
    // Verificamos si ya existe un rol con la misma cédula
    let existeRol = buscarRol(rol.cedula);

    if (existeRol == null) {
        // No existe, lo agregamos al arreglo roles
        roles.push(rol);
        alert("ROL AGREGADO CORRECTAMENTE");
    } else {
        // Ya existe un rol con esa cédula
        alert("YA EXISTE UN ROL CON ESTA CÉDULA");
    }
}
calcularAporteIESS = function(sueldo) {
    let aporte = sueldo * 0.1115;
    return aporte; // Retorna el valor que debe pagar al IESS
}

// Guarda un rol (crea el objeto rol con valores calculados y lo agrega al arreglo)
guardarRol = function() {
    //  Recuperar los valores de la pantalla
    let cedula = recuperarTextoDiv("infoCedula"); // obtiene cédula mostrada en el div
    let nombre = recuperarTextoDiv("infoNombre"); // obtiene nombre mostrado en el div
    let sueldo = recuperarFloatDiv("infoSueldo"); // obtiene sueldo desde el div y lo convierte a número
    let descuento = recuperarFloat("txtDescuentos"); // obtiene el descuento ingresado

    //  Calcular los valores necesarios
    let aporteEmpleado = calcularAporteEmpleado(sueldo); // descuento del empleado
    let aporteEmpleador = calcularAporteIESS(sueldo);    // aporte del empleador
    let valorAPagar = calcularValorAPagar(sueldo, descuento, aporteEmpleado);

    //  Crear el objeto rol
    let rol = {
        cedula: cedula,
        nombre: nombre,
        sueldo: sueldo,
        valorAPagar: valorAPagar,
        aporteEmpleado: aporteEmpleado,
        aporteEmpleador: aporteEmpleador
    };

    //  Agregar al arreglo global
    agregarRol(rol); // muestra alerta de éxito o error dentro de esa función

    // 5️ Mostrar los roles actualizados
    mostrarRoles();

   
    deshabilitarComponente("lblguardar") // deshabilita el guardado para evitar duplicados

}

// Función que muestra todos los roles en forma de tabla (resumen)
mostrarRoles = function() {
    // 1️⃣ Buscar el elemento HTML donde se mostrará la tabla
    // En este caso, el contenedor con id="tablaResumen"
    let cmpTabla = document.getElementById("tablaResumen");

    // 2️⃣ Crear el encabezado de la tabla con los títulos de las columnas
    // Se arma como un texto HTML (string)
    let contenidoTabla = "<table class=\"miTabla\"><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "</tr>";

    // 3️⃣ Declarar una variable para recorrer el arreglo 'roles'
    let elementoRol;

    // 4️⃣ Recorrer el arreglo global 'roles'
    // Cada elemento del arreglo es un objeto 'rol' con datos del empleado
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i]; // tomar el rol actual

        // 5️⃣ Agregar una nueva fila (<tr>) con las celdas (<td>) de los datos
        // Usamos 'toFixed(2)' para mostrar los números con 2 decimales
        contenidoTabla +=
            "<tr><td>" + elementoRol.cedula + "</td>" + // Cedula del empleado
            "<td>" + elementoRol.nombre + "</td>" +      // Nombre del empleado
            "<td>" + elementoRol.valorAPagar.toFixed(2) + "</td>" + // Valor total a pagar
            "<td>" + elementoRol.aporteEmpleado.toFixed(2) + "</td>" + // Aporte del empleado
            "<td>" + elementoRol.aporteEmpleador.toFixed(2) + "</td>" + // Aporte del empleador
            "</tr>";
    }

    // 6️⃣ Cerrar la tabla agregando la etiqueta </table>
    contenidoTabla += "</table>";

    // 7️⃣ Insertar todo el contenido HTML dentro del elemento del documento
    // Esto actualiza la tabla visible en pantalla
    cmpTabla.innerHTML = contenidoTabla;

    mostrarTotales(); // actualiza y muestra los totales acumulados
}

// Calcula y muestra los totales acumulados de aportes y pagos entre todos los roles
mostrarTotales = function() {

    // 1️⃣ Declaramos las variables acumuladoras en 0
    // Estas servirán para ir sumando los valores de todos los roles
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    // 2️⃣ Recorremos todo el arreglo global "roles"
    for (let i = 0; i < roles.length; i++) {
        // Tomamos el rol actual
        let rol = roles[i];

        // 3️⃣ Acumulamos los valores
        totalEmpleado += rol.aporteEmpleado;  // sumamos lo que paga el empleado
        totalEmpleador += rol.aporteEmpleador; // sumamos lo que paga el empleador
        totalAPagar += rol.valorAPagar;       // sumamos el total a pagar del empleado
    }

    // 4️⃣ Mostramos los totales en pantalla (en los campos respectivos)
    // Supongamos que los campos tienen estos IDs en tu HTML:
    // infoTotalEmpleado, infoTotalEmpleador, infoTotalAPagar

    document.getElementById("infoAporteEmpleado").textContent = totalEmpleado.toFixed(2);
    document.getElementById("infoAporteEmpresa").textContent = totalEmpleador.toFixed(2);
    document.getElementById("infoTotalPago").textContent = totalAPagar.toFixed(2);

    
   // 4️⃣ (Opcional) Total general de nómina
    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar;
    console.log("Total general de nómina:", totalNomina);
}
