// Función que muestra números del 0 al 3
mostrarNumeros = function(){
    console.log("antes del for"); // Mensaje antes de iniciar el ciclo
    for(let i=0; i<4; i++){      // Ciclo for: i inicia en 0, se ejecuta mientras i<4, se incrementa en 1
        console.log(i);           // Muestra el valor actual de i en consola
    }
    console.log("despues del for"); // Mensaje después de terminar el ciclo
}

// Función que muestra números del 1 al 5
mostrarNumeros2 = function(){
    console.log("antes del for"); // Mensaje previo al ciclo
    for(let indice=1; indice<=5; indice++){ // Ciclo for: inicia en 1, se ejecuta hasta 5 inclusive
        console.log(indice);       // Muestra el valor actual de indice
    }
    console.log("despues del for"); // Mensaje posterior al ciclo
}

// Función que muestra números pares del 2 al 10
mostrarNumeros3 = function(){
    console.log("antes del for"); // Mensaje antes del ciclo
    for(let x=2; x<=10; x+=2){   // Ciclo for: inicia en 2, hasta 10 inclusive, incrementando de 2 en 2
        console.log(x);           // Muestra el valor actual de x
    }
    console.log("despues del for"); // Mensaje después del ciclo
}

// Función que muestra números de 10 a 0 en forma descendente
mostrarInversa = function(){
    console.log("antes del for"); // Mensaje previo al ciclo
    for(let i=10; i>=0; i--){    // Ciclo for: inicia en 10, se ejecuta mientras i>=0, decrementando en 1
        console.log(i);           // Muestra el valor actual de i
    }
    console.log("antes del for"); // Mensaje final (debería decir "despues del for" para mayor claridad)
}

// Función simulando un "hackeo" con porcentaje del 0 al 100
hackearNasaPelis = function(){
    // hackeando nasa 0% ....100%
    for(let porcentaje=0; porcentaje<=100; porcentaje++){ // Ciclo for de 0 a 100
        console.log("hackeando nasa "+porcentaje +"%"); // Muestra el porcentaje actual
    }
    console.log("La nasa ha sido hackeada XD"); // Mensaje final simulando éxito
}

// Función que muestra los números impares del 1 al 21
mostrarImpares = function(){
    console.log("antes del for"); // Mensaje previo al ciclo
    for(i=1; i<=21; i+=2){        // Ciclo for: inicia en 1, se ejecuta hasta 21, incrementando de 2 en 2
        console.log(i);           // Muestra el valor impar actual
    }
    console.log("despues del for"); // Mensaje después del ciclo
}
