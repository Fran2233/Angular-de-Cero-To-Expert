
/*
===== Código de TypeScript =====

*/
interface reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: detalles
}

interface detalles {
    autor: string,
    anio: number;
}

const reproductor: reproductor = {
    volumen: 100,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2022,
    }
}

// Desestructuracion de OBJETOS

const { volumen, segundo, cancion, detalles/* , detalles:{autor :autorDetalles ,anio: anioDetalles} */ } = reproductor; /* Todo en una linea */
const { autor, anio } = detalles;  /* --> mejor usa esta */

console.log('El volumen actual es de: ', volumen)
console.log('El segundo actual es de: ', segundo)
console.log('La cancion actual es : ', cancion)
console.log('El Autor actual es de: ', autor)
console.log('El anio actual es de: ', anio)


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = dbz;


console.log(p3);