import { producto,calcularISV } from './06-desestructuracion-funcion';

/*
===== Código de TypeScript =====

*/

const carritoCompras: producto[] = [
    {
        desc: 'Telefono1',
        precio: 100,
    },
    {
        desc: 'Telefono2',
        precio: 200
    },

];


const [total, isv] = calcularISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV: ', isv);