let orden = [
    { nombre: "Marcos", edad: 18 }, // Primer objeto persona con nombre y edad
    { nombre: "Roberto", edad: 15 }, // Segundo objeto persona
    { nombre: "Kate", edad: 25 },    // Tercer objeto persona
    { nombre: "Diana", edad: 12 },   // Cuarta persona
    { nombre: "Benja", edad: 5 }     // Quinta persona
]
// Arreglo global 'orden' que almacena objetos representando personas con nombre y edad


agregarPersona = function () {
    // 1. Tomamos el valor del input donde el usuario ingresa el nombre
    let nombre = recuperarTexto("txtNombre");
    // 1. Tomamos el valor del  int donde el usuario ingresa a edad
    let edad = recuperarInt("txtEdad");
    // 2. Tomamos el div donde mostraremos el error
    let errorNombre = document.getElementById("lblErrorNombre");
    let errorEdad = document.getElementById("lblErrorEdad");
    // 3. Limpiamos cualquier mensaje de error anterior
    errorNombre.textContent = "";
    errorEdad.textContent = "";

    let valido = true;  // Inicializamos: asumimos que todos los datos son correctos

    if (nombre.length < 3) {
        // Si no cumple, mostramos el error en pantalla
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        valido = false;  // Si el nombre es incorrecto, marcamos como no válido
    }
    //tu utilitario devuelve null si el valor no es un entero limpio y asegura que la edad esté entre 0 y 100.
    if (edad == null || edad < 0 || edad > 100) {
        errorEdad.textContent = "La edad debe ser un número entero entre 0 y 100.";
        valido = false;  // Si la edad es incorrecta, marcamos como no válido
    }

    if (valido) {
        // Crear objeto vacío
        let nuevaPersona = {};
        // Agregar atributos
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        // Agregar al arreglo global
        orden.push(nuevaPersona);

        // Mostrar alerta
        alert("Persona agregada correctamente")

        //Aquí llamamos a la función para refrescar la tabla
        mostrarTablaPersonas();
    }

}


mostrarTablaPersonas = function () {
    let cmpTabla = document.getElementById("tablaMostrarPersonas"); // Obtiene el div donde se mostrará la tabla
    let contenidoTabla = "<table class=\"miTabla\"><tr>" +  // Comienza la tabla con los encabezados
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>";
    let elementoPersonas;
    for (let i = 0; i < orden.length; i++) { // Recorre cada orden(objetonlobal)
        elementoPersonas = orden[i];
        // Agrega una fila con los datos del empleado
        contenidoTabla +=
            "<tr><td>" + elementoPersonas.nombre + "</td>"
            + "<td>" + elementoPersonas.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla; // Inserta la tabla generada en el HTML
}
encontrarMayor = function () {
    let personaMayor = null; // 1️⃣ Inicialmente no hay persona mayor

    if (orden.length > 0) { // 2️⃣ Verificamos que el arreglo no esté vacío
        personaMayor = orden[0]; // 3️⃣ Suponemos que la primera persona es la mayor

        // 4️⃣ Recorremos el resto del arreglo para comparar edades
        for (let i = 1; i < orden.length; i++) {
            if (orden[i].edad > personaMayor.edad) { // 5️⃣ Comparamos edad de la persona actual con la personaMayor
                personaMayor = orden[i]; // 6️⃣ Si es mayor, actualizamos personaMayor
            }
        }
    }

    // 7️⃣ Mostramos en la consola el resultado

     return personaMayor; // Devolvemos la persona con mayor edad
}

encontrarMenor = function () {
    let personaMenor = null; // 1️⃣ Inicialmente no hay persona menor

    if (orden.length > 0) { // 2️⃣ Verificamos que el arreglo no esté vacío
        personaMenor = orden[0]; // 3️⃣ Suponemos que la primera persona es la menor

        // 4️⃣ Recorremos el resto del arreglo para comparar edades
        for (let i = 1; i < orden.length; i++) {
            //cambia le sigo de mayor a menor  para que pueda funcionar el for 
            //Con eso, la función buscará la persona con la edad más pequeña.
            if (orden[i].edad < personaMenor.edad) { // 5️⃣ Comparamos edad de la persona actual con la personMenor
                personaMenor = orden[i]; // 6️⃣ Si es menor, actualizamos personaMenor
            }
        }
    }

    // 7️⃣ Mostramos en la consola el resultado

    return personaMenor; // Devolvemos la persona con menpr edad
}


// Esta función encuentra a la persona mayor y muestra su nombre y edad en pantalla
determinarMayor = function () {
    // Llama a la función encontrarMayor() que debe devolver un objeto con la persona mayor
    let mayor = encontrarMayor();

    // Obtiene el elemento HTML con id "resultadoMayor"
    // Este es el lugar donde se mostrará el resultado
    let cmpMayor = document.getElementById("resultadoMayor");

    // Asigna un texto al contenido del elemento HTML, mostrando el nombre y edad de la persona mayor
    // Se concatena el texto con las propiedades del objeto mayor (mayor.nombre y mayor.edad)
    cmpMayor.textContent = "La persona mayor es " + mayor.nombre + " con " + mayor.edad + " años";
}


// Esta función encuentra a la persona menor y muestra su nombre y edad en pantalla
determinarMenor = function () {
    // Llama a la función encontrarMenor() que debe devolver un objeto con la persona menor
    let menor = encontrarMenor();

    // Obtiene el elemento HTML con id "resultadoMenor"
    // Este será el div donde se mostrará el resultado
    let cmpMenor = document.getElementById("resultadoMenor");

    // Muestra el resultado con texto más el nombre y edad de la persona menor
    // Se concatena todo en una sola línea de texto
    cmpMenor.textContent = "La persona menor es " + menor.nombre + " con " + menor.edad + " años";
}
