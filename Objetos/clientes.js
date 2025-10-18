let clientes=[
    //comenzamos con un arreglo global de 3 objetos
    {cedula:"123",nombre:"Rosstony",edad:32},
    {cedula:"456",nombre:"Kakaroto",edad:60},
    {cedula:"789",nombre:"Kratos",edad:300}
]
// Este es un arreglo global que contiene inicialmente 3 clientes con sus cédulas, nombres y edades

crearClientes=function(){
    let valorCedula=recuperarTexto("txtCedula");
    // Recupera el valor ingresado por el usuario en el input con id "txtCedula"

    let valorNombre=recuperarTexto("txtNombre");
    // Recupera el valor ingresado por el usuario en el input con id "txtNombre"

    let valorEdad=recuperarFloat("txtEdad");
    // Recupera el valor numérico ingresado por el usuario en el input con id "txtEdad"

    let nuevoCliente={};
    // Crea un objeto vacío para almacenar los datos del nuevo cliente

    nuevoCliente.cedula=valorCedula;
    // Asigna la cédula al objeto

    nuevoCliente.nombre=valorNombre;
    // Asigna el nombre al objeto

    nuevoCliente.edad=valorEdad;
    // Asigna la edad al objeto

    agregarCliente(nuevoCliente)
    // Llama a la función agregarCliente() pasando el objeto nuevoCliente para insertarlo en el arreglo
}

agregarCliente=function(cliente){
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    // Busca si ya existe un cliente con la misma cédula usando la función buscarCliente

    if(resultado==null){
        // Si no existe un cliente con esa cédula, se agrega al arreglo
        clientes.push(cliente);
        alert("Cliente agregado")
        // Muestra alerta de éxito

        mostrarClientes();
        // Actualiza la tabla en pantalla mostrando todos los clientes
    }else{
        alert("ya existe el cliente con la cedula: "+cliente.cedula);
        // Si ya existe un cliente con esa cédula, se muestra un mensaje de error
    }     
}

buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado;
    // Variables temporales para recorrer el arreglo y almacenar el cliente encontrado

    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        // Recorre cada cliente en el arreglo

        if(elementoCliente.cedula==cedula){
            clienteEncontrado=elementoCliente;
            // Si encuentra un cliente con la cédula buscada, lo asigna a clienteEncontrado
            break;
            // Sale del ciclo ya que encontró el cliente
        }
    }
    return clienteEncontrado
    // Devuelve el cliente encontrado o undefined si no existe
}

mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    // Obtiene el div donde se mostrará la tabla de clientes

    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    // Crea la estructura inicial de la tabla con los encabezados

    let elementoCliente;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        // Recorre todos los clientes en el arreglo

        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+ "</td>"
        +"<td>"+elementoCliente.nombre+ "</td>"
        +"<td>"+elementoCliente.edad+ "</td>"
        +"</tr>"
        // Agrega una fila a la tabla por cada cliente con sus datos
    }
    contenidoTabla+="</table>"
    // Cierra la tabla

    cmpTabla.innerHTML=contenidoTabla;
    // Inserta la tabla generada dentro del div "tablaClientes"
}

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
    // Obtiene el valor ingresado en el input de búsqueda por cédula

    let cliente=buscarCliente(valorCedula);
    // Llama a buscarCliente() para localizar al cliente con la cédula ingresada

    if(cliente==null){
        alert("Cliente no encontrado");
        // Si no existe, muestra un mensaje de error
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
        // Si se encuentra, muestra los datos del cliente en los inputs correspondientes
    }
}

modificarCLiente=function(cliente){
   let clienteEncontrado=buscarCliente(cliente.cedula);
   // Busca si el cliente ya existe por cédula

   if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
        // Si existe, actualiza el nombre y la edad con los valores nuevos
   }
}

guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula");
    // Obtiene la cédula del input

    let valorNombre=recuperarTexto("txtNombre");
    // Obtiene el nombre del input

    let valorEdad=recuperarFloat("txtEdad");
    // Obtiene la edad del input

    let newCliente={};
    newCliente.cedula=valorCedula;
    newCliente.nombre=valorNombre;
    newCliente.edad=valorEdad;
    // Crea un objeto con los valores ingresados para actualizar el cliente

    modificarCLiente(newCliente);
    // Llama a modificarCliente() para actualizar los datos del cliente en el arreglo

    mostrarClientes();
    // Refresca la tabla para mostrar los cambios
}
