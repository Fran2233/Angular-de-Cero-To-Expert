
/*
===== Código de TypeScript =====

*/


interface superHeroe {
    nombre: string;
    edad: number;
    direccion: direccion ,
    mostrarDireccion: () => string;
}

interface direccion {
    calle: string,
    pais: string,
    ciudad: string
}

const superHero: superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais;
    }
}

const direccion = superHero.mostrarDireccion();
console.log(direccion);
