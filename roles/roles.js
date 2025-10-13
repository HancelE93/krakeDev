let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1723439319", nombre:"Hancel",apellido:"Espin",sueldo:800}
]

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table class=\"miTabla\"><tr>" +
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SULEDO</th>"+
    "</tr>";
    let elementoEmpleados;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleados=empleados[i];
        contenidoTabla+=
        "<tr><td>"+elementoEmpleados.cedula+ "</td>"
        +"<td>"+elementoEmpleados.nombre+ "</td>"
        +"<td>"+elementoEmpleados.apellido+ "</td>"
        +"<td>"+elementoEmpleados.sueldo+ "</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}



mostrarOpcionEmpleado=function(){

    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados()
}

mostrarOpcionRol=function(){
    
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen=function(){

    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    
}

