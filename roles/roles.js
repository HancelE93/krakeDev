let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1723439319", nombre: "Hancel", apellido: "Espin", sueldo: 800 }
]

let esNuevo = false;

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table class=\"miTabla\"><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SULEDO</th>" +
        "</tr>";
    let elementoEmpleados;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleados = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleados.cedula + "</td>"
            + "<td>" + elementoEmpleados.nombre + "</td>"
            + "<td>" + elementoEmpleados.apellido + "</td>"
            + "<td>" + elementoEmpleados.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}



mostrarOpcionEmpleado = function () {
    esNuevo = true;
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

mostrarOpcionRol = function () {

    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {

    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");

}

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

buscarEmpleado = function (cedula) {
    let elementoCedula;
    for (let i = 0; i < empleados.length; i++) {
        elementoCedula = empleados[i];
        if (elementoCedula.cedula == cedula) {
            return elementoCedula;
        }
    }
    return null;
}

agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    document.getElementById("lblErrorCedula").textContent = "";
    document.getElementById("lblErrorNombre").textContent = "";
    document.getElementById("lblErrorApellido").textContent = "";
    document.getElementById("lblErrorSueldo").textContent = "";

    // Validaciones
    let esValido = true;

    // 
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

    if (!esValido) {
        return;
    }

    let nuevoEmpleado = {
        cedula: valorCedula,
        nombre: valorNombre,
        apellido: valorApellido,
        sueldo: valorSueldo
    }

    if (esNuevo) {
        let resultado = agregarEmpleado(nuevoEmpleado);
        if (resultado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            esNuevo = false;

            // Deshabilitar campos
            deshabilitarComponente("txtCedula");
            deshabilitarComponente("txtNombre");
            deshabilitarComponente("txtApellido");
            deshabilitarComponente("txtSueldo");
            deshabilitarComponente("btnGuardar");

        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA");
        }
    } else {
        let modificado = modificarEmpleado(nuevoEmpleado);
        if (modificado) {
            alert("EMPLEADO MODIFICADO CORRECTAMENTE");
            mostrarEmpleados();
            esNuevo = false;

        }
    }
}
modificarEmpleado = function (empleado) {
    // Modificación
    let empleadoExistente = buscarEmpleado(empleado.cedula);
    if (empleadoExistente != null) {
        empleadoExistente.nombre = empleado.nombre;
        empleadoExistente.apellido = empleado.apellido;
        empleadoExistente.sueldo = empleado.sueldo;

        // Deshabilitar campos
        deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");

        return true;  // Indica que se modificó
    }
    return false;



}


esSoloMayusculas = function (texto) {
    for (let i = 0; i < texto.length; i++) {
        let c = texto.charAt(i);
        if (c < 'A' || c > 'Z') {
            return false;
        }
    }
    return true;
}

guardarDeshabilitar = function () {
    guardar();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let empleado = buscarEmpleado(valorCedula);
    if (empleado == null) {
        alert("EMPLEADON, NO EXISTE");
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