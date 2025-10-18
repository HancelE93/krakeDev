// Lista base de productos
const productos = [
  {
    nombre: "Camisa",
    descripcion: "Camisa blanca de algodón",
    categoria: "Ropa",
    precio: 25.99,
    stock: 50,
  },
  {
    nombre: "Pantalón",
    descripcion: "Pantalón azul jeans",
    categoria: "Ropa",
    precio: 40.0,
    stock: 30,
  },
  {
    nombre: "Zapatos",
    descripcion: "Zapatos deportivos",
    categoria: "Calzado",
    precio: 60.5,
    stock: 20,
  },
];

// Lista base de categorías
const categorias = [
  { nombre: "Ropa", descripcion: "Prendas de vestir" },
  { nombre: "Calzado", descripcion: "Zapatos, sandalias y más" },
];

const carrito = [
  { nombre: "Camisa", cantidad: 2, precio: 25.99 },
  { nombre: "Zapatos", cantidad: 1, precio: 60.5 },
];

const ventas = [
  {
    cliente: {
      nombre: "Juan Pérez",
      email: "juan.perez@example.com",
      telefono: "0991234567",
      direccion: "Av. Siempre Viva 123",
    },
    total: 112.48,
  },
  {
    cliente: {
      nombre: "María López",
      email: "maria.lopez@example.com",
      telefono: "0987654321",
      direccion: "Calle Falsa 456",
    },
    total: 40.0,
  },
];


crearProducto = function () {
  let valornombreProducto = recuperarTexto("txtNombre");

  let valoDescripcion = recuperarTexto("tXtDescripcion");
  let valorCategoria = recuperarTexto("txtCategoria");
  let valorPrecio = recuperarFloat("txtPrecio");
  let valorStock = recuperarInt("txtStock");


  let nuevoProducto = {};// Crea un objeto vacío para almacenar los datos del nuevo cliente

  nuevoProducto.nombre = valornombreProducto;
  nuevoProducto.descripcion = valoDescripcion;
  nuevoProducto.categoria = valorCategoria;
  nuevoProducto.precio = valorPrecio;
  nuevoProducto.stock = valorStock;
  let errorNombre = document.getElementById("lblErrorNombre");
  let errorDescripcion = document.getElementById("lblErrorDescripcion");
  let errorCategoria = document.getElementById("lblErrorCategoria");
  let errorPrecio = document.getElementById("lblErrorPrecio");
  let errorStock = document.getElementById("lblErroStock");
  errorNombre.textContent = "";
  errorDescripcion.textContent = "";
  errorCategoria.textContent = "";
  errorPrecio.textContent = "";
  errorStock.textContent = "";

  agregarProducto(nuevoProducto)
  console.log(nuevoProducto.nombre)
  // Llama a la función agregarCliente() pasando el objeto nuevoCliente para insertarlo en el arreglo
}
// Función: agregar o actualizar producto
function agregarProducto(nombreProducto) {
  /*
       - Obtener datos del producto desde inputs
       - Validar que todos los campos sean correctos
       - Si el producto existe (por nombre), actualizar datos
       - Si no existe, agregar producto a la lista
       - Limpiar campos y actualizar la tabla y estadísticas
     */

  let resultado;
  resultado = buscarProducto(nombreProducto.nombre);
  let errorNombre = document.getElementById("lblErrorNombre");
  let errorDescripcion = document.getElementById("lblErrorDescripcion");
  let errorCategoria = document.getElementById("lblErrorCategoria");
  let errorPrecio = document.getElementById("lblErrorPrecio");
  let errorStock = document.getElementById("lblErroStock");
  
  



  let valido = true;  // 

  if (resultado == null) {
    productos.push(nombreProducto);
    
    alert("Producto agregado")
    mostrarProductos();
    valido = false;
  } else {
    errorNombre.textContent = "ingrese producto";
    errorDescripcion.textContent = "iingrese descripcion";
    errorCategoria.textContent = "ingrsecategoria";
    errorPrecio.textContent = "ingrese precio";
    errorStock.textContent = "ingrese stock";
    alert("ya existe el producto con el nombre: " + nombreProducto.nombre);
    
    valido = false;
  }

}




buscarProducto = function (nombre) {
  let elementoProducto;
  let productoEncontrado;


  for (let i = 0; i < productos.length; i++) {
    elementoProducto = productos[i];

    if (elementoProducto.nombre == nombre) {
      productoEncontrado = elementoProducto;

      break;

    }
  }
  return productoEncontrado
}





// Función: mostrar productos en la tabla
function mostrarProductos() {
  let cmpTabla = document.getElementById("tablaProductos");


  let contenidoTabla = "<table><tr>" +
    "<th>NOMBRE</th>" +
    "<th>DESCRIPCION</th>" +
    "<th>CATEGORIA</th>" +
    "<th>PRECIO</th>" +
    "<th>STOCK</th>" +
    "</tr>";

  let elementoTabla;
  for (let i = 0; i < productos.length; i++) {
    elementoTabla = productos[i];


    contenidoTabla +=
      "<tr><td>" + elementoTabla.nombre + "</td>"
      + "<td>" + elementoTabla.descripcion + "</td>"
      + "<td>" + elementoTabla.categoria + "</td>"
      + "<td>" + elementoTabla.precio + "</td>"
      + "<td>" + elementoTabla.stock + "</td>"
      + "</tr>"

  }
  contenidoTabla += "</table>"


  cmpTabla.innerHTML = contenidoTabla;

  /*
      - Limpiar contenido actual de la tabla
      - Recorrer lista de productos
      - Crear filas dinámicas con los datos y botón para eliminar
      
    */
}

// Función: eliminar producto por índice
function eliminarProducto() {
  let eProducto = recuperarTexto("txteliminar");

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre == eProducto) {
      productos.splice(i, 1);
    }
    mostrarProductos();

    /*
    // Función para eliminar un producto en la posición dada del array
    function eliminarProducto(index) {
      // El método splice modifica el array original eliminando elementos
      // El primer parámetro 'index' indica la posición donde empezar a eliminar
      // El segundo parámetro '1' indica que se elimina un solo elemento
      productos.splice(index, 1);
    }
    */

    /*
        - Confirmar acción con el usuario
        - Remover producto de la lista productos
        - Actualizar tabla y estadísticas
      */
  }
}


// Función: actualizar estadísticas de productos
function actualizarEstadisticasProductos() {
  let totalProdcuo;
  let totalStock;
  let valorInventario;

  /*
      - Calcular y mostrar total productos, stock total y valor inventario
    */
}

// Función: limpiar campos de producto
function limpiarCamposProducto() {
  /*
      - Limpiar inputs de producto para nueva entrada
    */
}

// Función: agregar categoría
function agregarCategoria() {




}



/*
    - Obtener datos desde inputs
    - Validar campos obligatorios y evitar duplicados
    - Agregar categoría a la lista
    - Limpiar campos y actualizar lista de categorías
  */


// Función: mostrar categorías
function mostrarCategorias() {
  /*
      - Limpiar lista actual
      - Recorrer categorías y mostrar en lista HTML
      - Agregar botón para eliminar categoría
    */
}

// Función: eliminar categoría
function eliminarCategoria(index) {
  /*
      - Confirmar con el usuario
      - Eliminar categoría de la lista
      - Actualizar lista en pantalla
    */
}

// Función: mostrar productos disponibles para añadir al carrito
function mostrarProductosDisponibles() {
  /*
      - Mostrar lista de productos con botón para añadir al carrito
    */
}

// Función: añadir producto al carrito
function agregarAlCarrito(nombreProducto) {
  /*
      - Validar cantidad y stock disponible
      - Añadir producto o aumentar cantidad en carrito
      - Actualizar resumen y total del carrito
    */
}

// Función: mostrar resumen del carrito
function mostrarCarrito() {
  /*
      - Mostrar tabla con productos en carrito, cantidades y subtotal
      - Mostrar total general
    */
}

// Función: editar cantidad de producto en carrito
function editarCantidadCarrito(index) {
  /*
      - Validar nueva cantidad contra stock
      - Actualizar cantidad en carrito
      - Actualizar tabla y total
    */
}

// Función: eliminar producto del carrito
function eliminarDelCarrito(index) {
  /*
      - Eliminar producto del carrito
      - Actualizar tabla y total
    */
}

// Función: guardar datos cliente
function guardarDatosCliente() {
  /*
      - Obtener y validar campos del cliente (nombre, email, teléfono, dirección)
      - Guardar datos para la compra
    */
}

// Función: finalizar compra
function finalizarCompra() {
  /*
      - Validar carrito y datos cliente completos
      - Crear registro de venta con productos, cliente, total y fecha
      - Actualizar stock de productos vendidos
      - Vaciar carrito
      - Actualizar tablas y estadísticas
      - Mostrar mensaje éxito y limpiar formulario cliente
    */
}

// Función: mostrar resumen de ventas
function mostrarVentas() {
  /*
      - Mostrar tabla con ventas registradas
      - Calcular y mostrar totales globales y producto más vendido
    */
}

// Función: calcular producto más vendido
function calcularProductoMasVendido() {
  /*
      - Contar cantidades vendidas de cada producto en todas las ventas
      - Retornar nombre de producto con mayor cantidad vendida
    */
}
