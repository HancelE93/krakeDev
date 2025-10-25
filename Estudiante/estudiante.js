let estudiantes = [
  { nombre: "Daniel", Correo: "daniel@gmail.com", ID: "1723439318" },
  { nombre: "Pamela", Correo: "pamelukis@hotmail.com", ID: "1723439317" },
  { nombre: "Juan", Correo: "juanito123@gmail.com", ID: "1723439314" },
];

let docente = [];

let asistencias = [
  { estudianteID: "1245678987", estudianteNombre: "Fernando", estado: "ausente" },
  { estudianteID: "124dfd78987", estudianteNombre: "Prnandro", estado: "presente" }
];

let cursos = [
  { nombre: 'Primero A', docente: "Luis" },
  { nombre: 'Segundo C', docente: "Carmen" },
  { nombre: 'Tercero F', docente: "Pedro" },
  { nombre: 'Cuarto A', docente: "Ana" },
  { nombre: 'Quinto B', docente: "Maria" }
];

/* ===================== AGREGAR ESTUDIANTE ===================== */
agregarEstudiantes = function () {
  let nombre = recuperarTexto("txtNombre");
  let Correo = recuperarTexto("txtCorreo");
  let ID = recuperarTexto("txtIDEstudiente"); // ← usar recuperarTexto, no recuperarInt

  let errorNombre = document.getElementById("lblErrorNombre");
  let errorCorreo = document.getElementById("lblErrorCorreo");
  let errorID = document.getElementById("lblErrorID");

  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorID.textContent = "";

  let valido = true;

  // Validar nombre
  for (let i = 0; i < nombre.length; i++) {
    let codigo = nombre.charCodeAt(i);
    if (codigo >= 33 && codigo <= 63) {
      errorNombre.textContent = "El nombre debe tener solo letras.";
      valido = false;
      break;
    }
    if (i === 0 && !(codigo >= 65 && codigo <= 90)) {
      errorNombre.textContent = "La primera letra debe ser mayúscula.";
      valido = false;
      break;
    }
  }
  if (nombre === "") {
    errorNombre.textContent = "El nombre es obligatorio.";
    valido = false;
  }

  // Validar correo
  let tieneArroba = Correo.includes("@");
  if (Correo === "" || !tieneArroba) {
    errorCorreo.textContent = "Ingrese un correo válido.";
    valido = false;
  }

  // Validar ID
  if (isNaN(ID) || ID.trim() === "") {
    errorID.textContent = "El ID es obligatorio y debe contener solo números.";
    valido = false;
  }

  if (valido) {
    let existe = false;
    for (let i = 0; i < estudiantes.length; i++) {
      if (estudiantes[i].ID === ID) {
        existe = true;
        alert("YA EXISTE EL ESTUDIANTE");
        break;
      }
    }

    if (!existe) {
      let nuevoEstudiante = { nombre, Correo, ID };
      estudiantes.push(nuevoEstudiante);
      alert("ESTUDIANTE AGREGADO CORRECTAMENTE");
      mostrarEstudientes();
      limpiarCampoEstudiante();
    }
  }
};

/* ===================== ACTUALIZAR ESTUDIANTE ===================== */
actualizarEstudiante = function () {
  let nombre = recuperarTexto("txtNombre");
  let Correo = recuperarTexto("txtCorreo");
  let ID = recuperarTexto("txtIDEstudiente");

  let errorNombre = document.getElementById("lblErrorNombre");
  let errorCorreo = document.getElementById("lblErrorCorreo");
  let errorID = document.getElementById("lblErrorID");

  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorID.textContent = "";

  let valido = true;

  // Validaciones igual que arriba
  if (nombre === "" || nombre.charCodeAt(0) < 65 || nombre.charCodeAt(0) > 90) {
    errorNombre.textContent = "Nombre inválido o sin mayúscula inicial.";
    valido = false;
  }

  if (!Correo.includes("@")) {
    errorCorreo.textContent = "Correo inválido.";
    valido = false;
  }

  if (isNaN(ID) || ID.trim() === "") {
    errorID.textContent = "El ID es obligatorio y debe contener solo números.";
    valido = false;
  }

  if (valido) {
    let encontrado = false;
    for (let i = 0; i < estudiantes.length; i++) {
      if (estudiantes[i].ID === ID) {
        estudiantes[i].nombre = nombre;
        estudiantes[i].Correo = Correo;
        alert("ESTUDIANTE MODIFICADO");
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      alert("No se encontró el estudiante con ese ID");
    }
    mostrarEstudientes();
    limpiarCampoEstudiante();
  }
};

/* ===================== MOSTRAR ESTUDIANTES ===================== */
mostrarEstudientes = function () {
  let cmpTabla = document.getElementById("tablaMostrarEstudiante");
  let contenidoTabla = `
    <table class="miTabla">
      <tr>
        <th>NOMBRE</th>
        <th>CORREO</th>
        <th>ID / CÉDULA</th>
      </tr>
  `;
  for (let i = 0; i < estudiantes.length; i++) {
    let e = estudiantes[i];
    contenidoTabla += `
      <tr>
        <td>${e.nombre}</td>
        <td>${e.Correo}</td>
        <td>${e.ID}</td>
      </tr>`;
  }
  contenidoTabla += "</table>";
  cmpTabla.innerHTML = contenidoTabla;
};

/* ===================== ELIMINAR ESTUDIANTE ===================== */
eliminarEstudiante = function () {
  let IDEliminar = recuperarTexto("txtEliminar");
  let errorEliminar = document.getElementById("lblEliminar");
  errorEliminar.textContent = "";

  if (IDEliminar.trim() === "") {
    errorEliminar.textContent = "Debe ingresar un ID válido para eliminar.";
    return;
  }

  let encontrado = false;
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].ID === IDEliminar) {
      encontrado = true;
      if (confirm("¿Eliminar estudiante '" + IDEliminar + "'?")) {
        estudiantes.splice(i, 1);
        alert("Estudiante eliminado correctamente.");
        mostrarEstudientes();
        mostrarTextoEnCaja("txtEliminar", "");
      }
      break;
    }
  }

  if (!encontrado) {
    errorEliminar.textContent = "No se encontró el estudiante con ese ID.";
  }
};

/* ===================== LIMPIAR CAMPOS ===================== */
limpiarCampoEstudiante = function () {
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtCorreo", "");
  mostrarTextoEnCaja("txtIDEstudiente", "");
};

/* ===================== CURSOS ===================== */
mostrarCursos = function () {
  let lista = document.getElementById("listaCategorias");
  lista.innerHTML = "";
  for (let i = 0; i < cursos.length; i++) {
    lista.innerHTML += `<li>${cursos[i].nombre} - ${cursos[i].docente}</li>`;
  }
};

agregarDocente = function () {
  let nombreCurso = recuperarTexto("txtCurso");
  let nombreDocente = recuperarTexto("txtDocente");
  let errorCurso = document.getElementById("lblErrorCurso");
  let errorDocente = document.getElementById("lblErrorDocente");

  errorCurso.textContent = "";
  errorDocente.textContent = "";

  if (nombreCurso.trim() === "") {
    errorCurso.textContent = "El nombre del curso es obligatorio.";
    return;
  }
  if (nombreDocente.trim() === "") {
    errorDocente.textContent = "El docente es obligatorio.";
    return;
  }

  let nuevoCurso = { nombre: nombreCurso, docente: nombreDocente };
  cursos.push(nuevoCurso);
  alert("Curso agregado correctamente.");
  mostrarCursos();
};

/* ===================== ASISTENCIAS ===================== */
registrarAsistencia = function () {
  let estado = recuperarTexto("selecionEstado");
  let id = recuperarTexto("txtId");
  let nombre = recuperarTexto("txtNombreAsistencia");
  let errorId = document.getElementById("lblErrorId");

  errorId.textContent = "";

  if (id.trim() === "" || isNaN(id)) {
    errorId.textContent = "El ID es obligatorio y debe contener solo números.";
    return;
  }

  let existente = buscarID(asistencias, id);
  if (existente) {
    existente.estado = estado;
    alert("Registro de asistencia actualizado.");
  } else {
    let nuevo = { estudianteID: id, estudianteNombre: nombre, estado: estado };
    asistencias.push(nuevo);
    alert("Asistencia registrada correctamente.");
  }
  mostrarAsistencias();
  actualizarEstudiante();
};

buscarID = function (asistencias, ID) {
  for (let i = 0; i < asistencias.length; i++) {
    if (asistencias[i].estudianteID === ID) {
      return asistencias[i];
    }
  }
  return null;
};

mostrarAsistencias = function () {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < asistencias.length; i++) {
    const est = asistencias[i];
    tbody.innerHTML += `
      <tr>
        <td>${est.estudianteID}</td>
        <td>${est.estudianteNombre}</td>
        <td>${est.estado}</td>
      </tr>`;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  mostrarAsistencias();
});

function generarResumen() {
  let curso = document.getElementById("curso").value;
  let docente = document.getElementById("docente").value;
  let estados = document.getElementsByClassName("estado");

  let total = estados.length;
  let presentes = 0;

  for (let i = 0; i < estados.length; i++) {
    if (estados[i].checked) {
      presentes++;
    }
  }

  let ausentes = total - presentes;

  let resumen = `
    <p><b>Curso:</b> ${curso}</p>
    <p><b>Docente:</b> ${docente}</p>
    <p><b>Total de estudiantes:</b> ${total}</p>
    <p><b>Presentes:</b> ${presentes}</p>
    <p><b>Ausentes:</b> ${ausentes}</p>
  `;

  document.getElementById("resumen").innerHTML = resumen;
}