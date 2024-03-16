// Función para determinar si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

// Función para calcular la suma de los números pares hasta un límite dado
function sumaNumerosPares(limite) {
    let suma = 0;

    // Ciclo para iterar sobre los números hasta el límite dado
    for (let i = 0; i <= limite; i++) {
    // Ver si el número actual es par y agregarlo a la suma
        if (esPar(i)) {
            suma += i;
        }
    }

    return suma;
}

// Bucle para repetir el proceso hasta que se ingrese una palabra clave
let seguir = true;
while (seguir) {
        const entrada = prompt("Ingrese un número o escriba 'salir' para terminar:");
    // Verificar si se debe salir del bucle
    if (entrada.trim().toLowerCase() === "salir") {
        seguir = false;
        console.log("¡Hasta luego! ¡Que tengas un buen día!");
    } else {
        const limite = parseInt(entrada);
        // Verificar si la entrada es un número válido
        if ((limite)) {
            const resultado = sumaNumerosPares(limite);
            console.log("La suma de los números pares hasta", limite, "es:", resultado);
            const datos = {
                limite: limite,
                sumaPares: resultado
            };
            const historial = [];
            historial.push(datos);
            // Mostrar el historial en la consola
            console.log("Historial:");
            historial.forEach(item => {
                console.log(`Límite: ${item.limite}, Suma de pares: ${item.sumaPares}`);
            });
        } else {
            console.log("Por favor, ingrese un número válido o 'salir' para terminar.");
        }
    }
}
