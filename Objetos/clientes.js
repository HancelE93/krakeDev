let clientes=[
    //comenzamos con un arreglo global de 3 objetos
    {cedula:"123",nombre:"Rosstony",edad:32},
    {cedula:"456",nombre:"Kakaroto",edad:60},
    {cedula:"789",nombre:"Kratos",edad:300}
]

crearClientes=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");

    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;

    
    agregarCliente(nuevoCliente)    
}
agregarCliente=function(cliente){
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    if(resultado==null){
        clientes.push(cliente);
        alert("Cliente agregado")
        mostrarClientes();
    }else{
        alert("ya existe el cliente con la cedula: "+cliente.cedula);
    }     
}
buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula==cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
    return clienteEncontrado
}
mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+ "</td>"
        +"<td>"+elementoCliente.nombre+ "</td>"
        +"<td>"+elementoCliente.edad+ "</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
    let cliente=buscarCliente(valorCedula);
    if(cliente==null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
    }
}

modificarCLiente=function(cliente){
   let clienteEncontrado=buscarCliente(cliente.cedula);
   if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;

   }
}

guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");

    let newCliente={};
    newCliente.cedula=valorCedula;
    newCliente.nombre=valorNombre;
    newCliente.edad=valorEdad;

    modificarCLiente(newCliente);

    mostrarClientes();
}