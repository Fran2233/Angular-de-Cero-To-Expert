

/*
===== Código de TypeScript =====

*/

interface Pasajero {
    nombre: string,
    hijos?: string[],
}

const pasajero1: Pasajero = {
    nombre: 'Fran',
}

const pasajero2: Pasajero = {
    nombre: 'Pedro',
    hijos: ['Natalia', 'Gabriel']
}


function imprimeHijos(pasajero: Pasajero): void {

    const cuantosHijos = pasajero.hijos?.length;
    // INTENTA VER SI TIENE HIJOS 

    console.log(cuantosHijos);


}


imprimeHijos(pasajero1);


