// Arreglo inicial de empleados con algunos datos de ejemplo
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1723439319", nombre: "Hancel", apellido: "Espin", sueldo: 800 }
]

// Arreglo vacío donde se almacenarán los roles calculados
let roles = []

// Variable para saber si estamos creando un nuevo empleado
let esNuevo = false;

// Función que muestra todos los empleados en la tabla HTML
mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados"); // Obtiene el div donde se mostrará la tabla
    let contenidoTabla = "<table class=\"miTabla\"><tr>" +  // Comienza la tabla con los encabezados
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SULEDO</th>" +
        "</tr>";
    let elementoEmpleados;
    for (let i = 0; i < empleados.length; i++) { // Recorre cada empleado
        elementoEmpleados = empleados[i];
        // Agrega una fila con los datos del empleado
        contenidoTabla +=
            "<tr><td>" + elementoEmpleados.cedula + "</td>"
            + "<td>" + elementoEmpleados.nombre + "</td>"
            + "<td>" + elementoEmpleados.apellido + "</td>"
            + "<td>" + elementoEmpleados.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla; // Inserta la tabla generada en el HTML
}

// Función que muestra la sección de Empleado y oculta las otras secciones
mostrarOpcionEmpleado = function () {
    esNuevo = true; // Indicamos que estamos agregando un nuevo empleado
    mostrarComponente("divEmpleado");  // Muestra el div de Empleado
    ocultarComponente("divRol");       // Oculta la sección de Rol
    ocultarComponente("divResumen");   // Oculta la sección de Resumen
    mostrarEmpleados();                // Llama a la función para mostrar la tabla
    // Deshabilita los campos para que no se pueda editar hasta que se presione "Nuevo"
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

// Función que muestra la sección de Rol
mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("lblguardar") // Deshabilita el botón de guardar rol
    mostrarRoles(); // Muestra los roles (función que debes tener definida en otro lado)
}

// Función que muestra la sección de Resumen
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

// Función que limpia los campos y habilita para ingresar un nuevo empleado
ejecutarNuevo = function () {
    document.getElementById("txtCedula").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtSueldo").value = "";

    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

// Función que busca un empleado por cédula, devuelve el objeto o null si no existe
buscarEmpleado = function (cedula) {
    let elementoCedula;
    for (let i = 0; i < empleados.length; i++) {
        elementoCedula = empleados[i];
        if (elementoCedula.cedula == cedula) {
            return elementoCedula; // Encuentra y devuelve el empleado
        }
    }
    return null; // No encuentra el empleado
}

// Función que agrega un empleado al arreglo, pero solo si no existe uno con la misma cédula
agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula); // Verifica si ya existe
    if (resultado == null) {
        empleados.push(empleado); // Agrega al arreglo
        return true;
    } else {
        return false; // Ya existe
    }
}

// Función que guarda o modifica un empleado
guardar = function () {
    // Recupera valores de los inputs
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    // Limpia mensajes de error
    document.getElementById("lblErrorCedula").textContent = "";
    document.getElementById("lblErrorNombre").textContent = "";
    document.getElementById("lblErrorApellido").textContent = "";
    document.getElementById("lblErrorSueldo").textContent = "";

    // Validaciones iniciales
    let esValido = true;

    // Valida cédula: 10 dígitos y numérica
    if (valorCedula.length !== 10 || isNaN(Number(valorCedula))) {
        document.getElementById("lblErrorCedula").textContent = "La cédula debe tener exactamente 10 dígitos numéricos.";
        esValido = false;
    }

    // Valida nombre: mínimo 3 caracteres y solo mayúsculas
    if (valorNombre.length < 3 || !esSoloMayusculas(valorNombre)) {
        document.getElementById("lblErrorNombre").textContent = "El nombre debe tener al menos 3 caracteres y estar en mayúsculas.";
        esValido = false;
    }

    // Valida apellido: mínimo 3 caracteres y solo mayúsculas
    if (valorApellido.length < 3 || !esSoloMayusculas(valorApellido)) {
        document.getElementById("lblErrorApellido").textContent = "El Apellido debe tener al menos 3 caracteres y estar en mayúsculas.";
        esValido = false;
    }

    // Valida sueldo: rango entre 400 y 5000
    if (valorSueldo < 400 || valorSueldo > 5000) {
        document.getElementById("lblErrorSueldo").textContent = "El sueldo debe ser un número entre 400 y 5000.";
        esValido = false;
    }

    if (!esValido) {
        return; // Si hay algún error, se detiene la función
    }

    // Construye objeto empleado con los valores
    let nuevoEmpleado = {
        cedula: valorCedula,
        nombre: valorNombre,
        apellido: valorApellido,
        sueldo: valorSueldo
    }

    if (esNuevo) { // Si estamos agregando un empleado
        let resultado = agregarEmpleado(nuevoEmpleado);
        if (resultado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados(); // Actualiza la tabla
            esNuevo = false;

            // Deshabilita campos tras guardar
            deshabilitarComponente("txtCedula");
            deshabilitarComponente("txtNombre");
            deshabilitarComponente("txtApellido");
            deshabilitarComponente("txtSueldo");
            deshabilitarComponente("btnGuardar");

        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA");
        }
    } else { // Si estamos modificando
        let modificado = modificarEmpleado(nuevoEmpleado);
        if (modificado) {
            alert("EMPLEADO MODIFICADO CORRECTAMENTE");
            mostrarEmpleados();
            esNuevo = false;
        }
    }
}

// Función para modificar los datos de un empleado existente
modificarEmpleado = function (empleado) {
    let empleadoExistente = buscarEmpleado(empleado.cedula);
    if (empleadoExistente != null) {
        // Actualiza los datos
        empleadoExistente.nombre = empleado.nombre;
        empleadoExistente.apellido = empleado.apellido;
        empleadoExistente.sueldo = empleado.sueldo;

        // Deshabilita campos
        deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");

        return true; // Indica que se modificó
    }
    return false; // No se modificó porque no existe
}

// Función que verifica si un texto tiene solo mayúsculas
esSoloMayusculas = function (texto) {
    for (let i = 0; i < texto.length; i++) {
        let c = texto.charAt(i);
        if (c < 'A' || c > 'Z') { // Si encuentra un carácter que no es A-Z
            return false;
        }
    }
    return true;
}

// Función que guarda y luego deshabilita campos automáticamente
guardarDeshabilitar = function () {
    guardar();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

// Función que busca un empleado y rellena los campos para modificarlo
ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let empleado = buscarEmpleado(valorCedula);
    if (empleado == null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        document.getElementById("txtNombre").value = empleado.nombre;
        document.getElementById("txtApellido").value = empleado.apellido;
        document.getElementById("txtSueldo").value = empleado.sueldo;
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        esNuevo = false
    }
}

// Función que limpia todos los campos y deshabilita entradas
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

// Función que busca un empleado por cédula y muestra la información en la sección de Rol
buscar

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

    habilitarComponente("lblguardar");
}

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

guardarRol = function() {
    //  Recuperar los valores de la pantalla
    let cedula = recuperarTextoDiv("infoCedula");
    let nombre = recuperarTextoDiv("infoNombre");
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");

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

   
    deshabilitarComponente("lblguardar")

}

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

    mostrarTotales();
}

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