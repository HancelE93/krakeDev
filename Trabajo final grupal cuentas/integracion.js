// Arreglo global de cuentas existentes
let cuentas = [
    // Cada elemento es un objeto que representa una cuenta bancaria
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

// Variable global usada para marcar si una cuenta es nueva (aunque no se usa más abajo)
let esNuevo = false;

// Arreglo global con los movimientos (transacciones) realizados
movimientos = [
    // Cada objeto representa una transacción de una cuenta
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" }, // D = Débito (retiro)
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" }, // C = Crédito (depósito)
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]

// ---------------- FUNCIONES PARA MOSTRAR/OCULTAR SECCIONES ----------------

// Muestra la vista de "Cuentas" y oculta las demás
cargarCuenta = function () {
    mostrarComponente("divCuentas");        // Muestra el div de cuentas
    ocultarComponente("divMovimientos");    // Oculta el div de movimientos
    ocultarComponente("divTransacciones");  // Oculta el div de transacciones
    mostrarCuentas();                       // Llama a la función que crea y muestra la tabla de cuentas
}

// Muestra la vista de "Transacciones" (depósitos/retiros)
cargarTransacciones = function(){
    mostrarComponente("divTransacciones");  // Muestra el div de transacciones
    ocultarComponente("divCuentas");        // Oculta el div de cuentas
    ocultarComponente("divMovimientos");    // Oculta el div de movimientos
    deshabilitarComponente("btnDepositar"); // Desactiva el botón Depositar
    deshabilitarComponente("btnRetirar");   // Desactiva el botón Retirar
}

// Muestra la vista de "Movimientos"
cargarMovimientos = function(){
    mostrarComponente("divMovimientos");    // Muestra el div de movimientos
    ocultarComponente("divCuentas");        // Oculta el div de cuentas
    ocultarComponente("divTransacciones");  // Oculta el div de transacciones
}

/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

// ---------------- FUNCIONES DE CUENTAS ----------------

// Muestra en pantalla una tabla HTML con todas las cuentas
mostrarCuentas = function () {

    // 1️⃣ Busca el elemento HTML donde se mostrará la tabla (div con id="tablaResumen")
    let cmpTabla = document.getElementById("tablaResumen");

    // 2️⃣ Crea el encabezado de la tabla con títulos de columnas
    let contenidoTabla = "<table class=\"miTabla\"><tr>" +
        "<th>NUMERO DE CUENTA</th>" +
        "<th>NOMBRE</th>" +
        "<th>SALDO</th>" +
        "</tr>";

    // 3️⃣ Declara una variable temporal para recorrer cada cuenta
    let elementoCuenta;

    // 4️⃣ Recorre el arreglo global 'cuentas'
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i]; // obtiene el objeto cuenta actual

        // 5️⃣ Agrega una fila con los datos de la cuenta
        contenidoTabla +=
            "<tr><td>" + elementoCuenta.numeroCuenta + "</td>" + 
            // Concatena nombre y apellido en una misma celda
            "<td>" + elementoCuenta.nombre + " " + elementoCuenta.apellido + "</td>" +      
            // saldo mostrado con 2 decimales
            "<td>" + elementoCuenta.saldo.toFixed(2) + "</td>" +
            "</tr>";
    }

    // 6️⃣ Cierra la tabla
    contenidoTabla += "</table>";

    // 7️⃣ Inserta la tabla completa dentro del elemento HTML
    cmpTabla.innerHTML = contenidoTabla;
}

/*
    Busca una cuenta en el arreglo 'cuentas' según el número de cuenta.
    Retorna el objeto cuenta si existe, o null si no la encuentra.
*/
buscarCuenta = function (numeroCuenta) {
    for (let i = 0; i < cuentas.length; i++) {
        let cuenta = cuentas[i];
        if (cuenta.numeroCuenta == numeroCuenta) {
            return cuenta; // si coincide, retorna el objeto
        }
    }
    return null; // si no la encuentra
}

/*
    Agrega una cuenta al arreglo solo si no existe otra con el mismo número.
*/
agregarCuenta = function (cuenta) {
    let existeCuenta = buscarCuenta(cuenta.numeroCuenta); // busca si ya existe
    if (existeCuenta == null) {
        cuentas.push(cuenta); // si no existe, la agrega
        alert("CUENTA AGREGADA");
    } else {
        alert("CUENTA EXISTENTE");
    }
}

// Crea una nueva cuenta desde los inputs del formulario
agregar = function () {
    // Recupera los valores de los campos HTML
    let valorNumeroCuenta = recuperarTexto("txtNumeroCuenta");
    let valorCedula = recuperarInt("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");

    // Crea el objeto cuenta
    let cuenta = {
        numeroCuenta: valorNumeroCuenta,
        cedula: valorCedula,
        nombre: valorNombre,
        apellido: valorApellido,
        saldo: 0.0
    };

    // Agrega la cuenta al arreglo y actualiza la tabla
    agregarCuenta(cuenta);
    mostrarCuentas();
    mostrarComponente("divTransacciones");
}

// Busca una cuenta existente y muestra su información
ejecutarBusqueda = function () {
    let cuentaBusqueda = recuperarTexto("txtCuentaExistente"); // obtiene el número ingresado
    let cuentaEncontrada = buscarCuenta(cuentaBusqueda);        // busca la cuenta
    if (cuentaEncontrada == null) {
        alert("NUMERO DE CUENTA NO EXISTE");
    } else {
        // Muestra los datos en pantalla
        mostrarTexto("txtNumeroCuentaExistente", cuentaEncontrada.numeroCuenta);
        mostrarTexto("txtNombreCuenta", cuentaEncontrada.nombre + " " + cuentaEncontrada.apellido);
        mostrarTexto("txtCedulaCuenta", cuentaEncontrada.cedula);
        mostrarTexto("txtSaldoCuenta", cuentaEncontrada.saldo);
    }
    // Habilita los botones de depósito y retiro
    habilitarComponente("btnDepositar");
    habilitarComponente("btnRetirar");
}

// ---------------- FUNCIONES DE TRANSACCIONES ----------------

// Realiza un depósito (aumenta el saldo)
depositar = function (numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta); // busca la cuenta
    if (cuentaAfectada != null) {
        cuentaAfectada.saldo = cuentaAfectada.saldo + monto; // suma al saldo
        // registra el movimiento
        let movimiento = {
            numeroCuenta: numeroCuenta,
            monto: monto,
            tipo: "C"
        };
        movimientos.push(movimiento);
        return true;
    }
    return false;
}

// Toma los datos del formulario y ejecuta el depósito
ejecutarDeposito = function () {
    let numeroCuenta = recuperarTexto("txtCuentaExistente");
    let monto = recuperarFloat("txtMonto");
    let resultado = depositar(numeroCuenta, monto);
    if (resultado) {
        alert("TRANSACCION EXITOSA");
        let cuentaActualizada = buscarCuenta(numeroCuenta);
        // muestra los datos actualizados
        mostrarTexto("txtNumeroCuentaExistente", cuentaActualizada.numeroCuenta);
        mostrarTexto("txtNombreCuenta", cuentaActualizada.nombre + " " + cuentaActualizada.apellido);
        mostrarTexto("txtCedulaCuenta", cuentaActualizada.cedula);
        mostrarTexto("txtSaldoCuenta", cuentaActualizada.saldo);
    }
}

// Realiza un retiro (disminuye el saldo)
retirar = function (numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    if (cuentaAfectada != null) {
        if (cuentaAfectada.saldo >= monto) {
            cuentaAfectada.saldo = cuentaAfectada.saldo - monto; // resta del saldo
            let movimiento = {
                numeroCuenta: numeroCuenta,
                monto: monto,
                tipo: "D"
            };
            movimientos.push(movimiento); // registra el movimiento
            return true;
        } else {
            alert("SALDO INSUFICIENTE"); // si no tiene saldo suficiente
        }
    }
    return false;
}

// Toma los datos del formulario y ejecuta el retiro
ejecutarRetiro = function () {
    let numeroCuenta = recuperarTexto("txtCuentaExistente");
    let monto = recuperarFloat("txtMonto");
    let resultado = retirar(numeroCuenta, monto);
    if (resultado) {
        alert("TRANSACCION EXITOSA");
        let cuentaActualizada = buscarCuenta(numeroCuenta);
        // muestra los datos actualizados
        mostrarTexto("txtNumeroCuentaExistente", cuentaActualizada.numeroCuenta);
        mostrarTexto("txtNombreCuenta", cuentaActualizada.nombre + " " + cuentaActualizada.apellido);
        mostrarTexto("txtCedulaCuenta", cuentaActualizada.cedula);
        mostrarTexto("txtSaldoCuenta", cuentaActualizada.saldo);
    }
}

// ---------------- FUNCIONES DE MOVIMIENTOS ----------------

// Filtra los movimientos por número de cuenta
filtrarMovimientos = function (numeroCuenta) {
  let movimientosCuenta = []; // arreglo temporal

  // Recorre todos los movimientos
  for (let i = 0; i < movimientos.length; i++) {
    let movimiento = movimientos[i];
    // Si pertenece a la cuenta buscada, se agrega al arreglo
    if (movimiento.numeroCuenta == numeroCuenta) {
      movimientosCuenta.push(movimiento);
    }
  }

  // Llama a la función para mostrar solo los movimientos filtrados
  mostrarMovimientos(movimientosCuenta);
}

/*
    Recibe un arreglo con movimientos y los muestra en una tabla HTML
*/
mostrarMovimientos = function (misMovimientos) {
  // Crea la estructura base de la tabla
  let tabla =
    '<table class="miTabla"><tr>' +
    "<th>CUENTA</th>" +
    "<th>MONTO</th>" +
    "<th>OPERACIÓN</th>" +
    "</tr>";

  let movimientoModificado;

  // Recorre cada movimiento recibido
  for (let i = 0; i < misMovimientos.length; i++) {
    let movimiento = misMovimientos[i];

    // Si es un débito (retiro), muestra el monto negativo
    if (movimiento.tipo == "D") {
      movimientoModificado = movimiento.monto * -1;
    } else if (movimiento.tipo == "C") {
      movimientoModificado = movimiento.monto; // crédito queda igual
    }

    // Agrega la fila con los datos
    tabla +=
      "<tr><td>" +
      movimiento.numeroCuenta +
      "</td>" +
      "<td>" +
      movimientoModificado +
      "</td>" +
      "<td>" +
      movimiento.tipo +
      "</td>" +
      "</tr>";
  }

  // Cierra la tabla
  tabla += "</table>";

  // Inserta la tabla en el div con id="tablaMovimientos"
  document.getElementById("tablaMovimientos").innerHTML = tabla;
}

// Toma el número de cuenta del input y muestra sus movimientos
verMovimientos = function () {
  let numeroCuenta = recuperarTexto("txtCuenta");
  filtrarMovimientos(numeroCuenta);
}

//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos


