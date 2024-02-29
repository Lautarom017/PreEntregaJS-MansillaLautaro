function esPar(numero) {
    return numero % 2 === 0;
}

function sumaNumerosPares(limite) {
    let suma = 0;

    for (let i = 0; i <= limite; i++) {
        if (esPar(i)) {
            suma += i;
        }else{

        }
    }
    
    return suma;
}

let seguir = true;
while (seguir) {
    const entrada = prompt("Ingrese un numero o escriba 'listo' para terminar");

    if (entrada.toLowerCase() === "listo") {
        seguir = false;
        console.log("Hasta luego, que tengas un buen dia");
    } else {
        const limite = parseInt(entrada);

        if ((limite)) {
            const resultado = sumaNumerosPares(limite);
            console.log("La suma de los numeros pares hasta", limite, "es", resultado);
        } else {
            console.log("Por favor, introduce un numero valido");
        }
    }
}
