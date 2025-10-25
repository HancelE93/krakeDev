let estudiantes = [
    { nombre: "Daniel", Correo: "daniel@gmail.com", ID: "1723439318", },
    { nombre: "Pamela", Correo: "pamelukis@hotmail.com", ID: "1723439317" },
    { nombre: "juan", Correo: "juanito123@gmail.com", ID: "1723439314" },
];

agregarEstudiantes = function () {
    let nombre = recuperarTexto("txtNombre");
    let Correo = recuperarTexto("txtCorreo");
    let ID = recuperarInt("txtIDEstudiente");


    let errorNombre = document.getElementById("lblErrorNombre");
    let errorCorreo = document.getElementById("lblErrorCorreo");
    let errorID = document.getElementById("lblErrorID");

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorID.textContent = "";

    let valido = true;

    
    for (let i = 0; i < nombre.length; i++) {
        let codigo = nombre.charCodeAt(i); // Obtiene el código ASCII del caracter
        if (codigo >= 33 && codigo <= 63) { // Si contiene símbolos o números
            errorNombre.textContent = "El nombre del estudiante solo debe de ser solo letras";
            valido = false;
            break;
        }
        if (i == 0 && !(codigo >= 65 && codigo <= 90)) { // Primera letra debe ser mayúscula
            errorNombre.textContent = "La primera letra debe ser mayúscula";
            valido = false;
            break;
        }
    }
    if (nombre == "") { // No puede estar vacío
        errorNombre.textContent = "El nombre es obligatorio";
        valido = false;
    }

    let tieneArroba = false;
    for (let i = 0; i < Correo.length; i++) {
        if (Correo.charAt(i) =='@') {
            tieneArroba = true
        }
        
    }


    if (Correo == "" ||tieneArroba == false) {
        errorCorreo.textContent ="Ingrese email valido";
        errores = true;
    } else {
        document.getElementById("lblErrorCorreo").innerText = "";
    }


    if (isNaN(ID)) {
        errorID.textContent = "El ID es obligatorio y deve ser  numeros";
        valido = false;
    }
    if (ID == "" || ID == " ") {
        errorID.textContent = "El ID es obligatorio";
        valido = false;
    }
    
    if (valido) {

        let existe = false;

        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].ID == ID) {

                estudiantes[i].nombre = nombre;
                estudiantes[i].Correo = Correo;
                estudiantes[i].ID = ID;
                existe = true;
                alert("YA EXISTE EL ESTUDIANTE")
                break;
            }
        }

        if (!existe) {
            let nuevoEstudiante = {};
            nuevoEstudiante.nombre = nombre;
            nuevoEstudiante.Correo = Correo;
            nuevoEstudiante.ID = ID;
            estudiantes.push(nuevoEstudiante);
            alert("ESTUDIANTE AGREGADO CORRECTAMENTE");
            mostrarEstudientes();
            limpiarCampoEstudiante()
        }

    }
}

actualizarEstudiante = function () {

    let nombre = recuperarTexto("txtNombre");
    let Correo = recuperarTexto("txtCorreo");
    let ID = recuperarInt("txtIDEstudiente");


    let errorNombre = document.getElementById("lblErrorNombre");
    let errorCorreo = document.getElementById("lblErrorCorreo");
    let errorID = document.getElementById("lblErrorID");

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorID.textContent = "";

    let valido = true;
    for (let i = 0; i < nombre.length; i++) {
        let codigo = nombre.charCodeAt(i); // Obtiene el código ASCII del caracter
        if (codigo >= 33 && codigo <= 63) { // Si contiene símbolos o números
            errorNombre.textContent = "El nombre del estudiante solo debe de ser solo letras";
            valido = false;
            break;
        }
        if (i == 0 && !(codigo >= 65 && codigo <= 90)) { // Primera letra debe ser mayúscula
            errorNombre.textContent = "La primera letra debe ser mayúscula";
            valido = false;
            break;
        }
    }
    if (nombre == "") { // No puede estar vacío
        errorNombre.textContent = "El nombre es obligatorio";
        valido = false;
    }

    let tieneArroba = false;
    for (let i = 0; i < Correo.length; i++) {
        if (Correo.charAt(i) == "@") {
            tieneArroba = true;
            break;
        }
    }

    if (Correo == "" || tieneArroba == false) {
        document.getElementById("lblErrorCorreo").innerText = "Ingrese email valido";
        errores = true;
    } else {
        document.getElementById("lblErrorCorreo").innerText = "";
    }


    if (isNaN(ID)) {
        errorID.textContent = "El ID es obligatorio y deve ser  numeros";
        valido = false;
    }
    if (ID == "" || ID == " ") {
        errorID.textContent = "El ID es obligatorio";
        valido = false;
    }
    if (valido) {

        let existe = false;

        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].ID == ID) {

                estudiantes[i].nombre = nombre;
                estudiantes[i].Correo = Correo;
                estudiantes[i].ID = ID;
                existe = true;
                alert("YA EXISTE EL ESTUDIANTE")
            } else {
                alert("ESTUDIANTE MODIFICADO");
                mostrarEstudientes();
                limpiarCampoEstudiante()
            }
        }
    }

}



mostrarEstudientes = function () {
    let cmpTabla = document.getElementById("tablaMostrarEstudiante");
    let contenidoTabla = "<table class=\"miTabla\"><tr>" +
        "<th>NOMBRE</th>" +
        "<th>CORREO</th>" +
        "<th>ID / CEDULA </th>" +
        "</tr>";
    let elementoEstudiantes;
    for (let i = 0; i < estudiantes.length; i++) {
        elementoEstudiantes = estudiantes[i];

        contenidoTabla +=
            "<tr><td>" + elementoEstudiantes.nombre + "</td>"
            + "<td>" + elementoEstudiantes.Correo + "</td>"
            + "<td>" + elementoEstudiantes.ID + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}


eliminarEstudiante = function () {

    let IDEliminar = recuperarTexto("txtEliminar");
    let errorEliminar = document.getElementById("lblEliminar");
    errorEliminar.textContent = "";

    if (IDEliminar == "" || IDEliminar == " ") {
        errorEliminar.textContent = "Debe ingresar un ID válido para eliminar.";
        return;
    }

    let encontrado = false;
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].ID == IDEliminar) {
            encontrado = true;
            if (confirm("¿Eliminar estudiante '" + IDEliminar + "'?")) {
                estudiantes.splice(i, 1);
                alert("Estudiente eliminado correctamente.");
                mostrarEstudientes();
                mostrarTextoEnCaja("txtEliminar", "");
                errorEliminar.textContent = "";
                break;
            }
        }

        if (!encontrado) {
            errorEliminar.textContent = "No se encontró el estudiante con ese ID.";
        }
    }

}

limpiarCampoEstudiante = function () {
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtCorreo", "");
    mostrarTextoEnCaja("txtIDEstudiente", "");


}
