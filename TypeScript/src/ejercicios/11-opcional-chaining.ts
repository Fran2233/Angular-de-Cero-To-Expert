

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

    const cuantosHijos = pasajero.hijos?.length || 0;
    // INTENTA VER SI TIENE HIJOS Y SINO TIENE REGRESE 0
    console.log('el pasajero : '+pasajero.nombre+' Tiene '+cuantosHijos+' Hijos');
}

imprimeHijos(pasajero2);


