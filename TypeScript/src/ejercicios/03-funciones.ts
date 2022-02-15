
/*
===== Código de TypeScript =====

*/

function sumar(a: number, b: number) {
    return a + b;
}

const sumaFlecha = (a: number, b: number): number => {
    return a + b;
}


function multiplicar(numero: number, numero2?: number, base: number = 2): number {
    return numero * base;
}

// const resultado = multiplicar(2, 3);


// console.log(resultado);


interface Personaje2 {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: Personaje2, curación: number): void {
    personaje.pv += curación;
}

const nuevoPersonaje: Personaje2 = {
    nombre: 'Fran',
    pv: 20,
    mostrarHp() {
        console.log('Puntos de vida', this.pv)
    }
}

nuevoPersonaje.mostrarHp();
