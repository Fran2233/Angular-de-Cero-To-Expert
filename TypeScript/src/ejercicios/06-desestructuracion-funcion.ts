
/*
===== Código de TypeScript =====

*/

export interface producto {
    desc: string,
    precio: number
}

const telefono: producto = {
    desc: 'Nokia b21',
    precio: 200
}

const tablet: producto = {
    desc: 'Ipad b2',
    precio: 200
}

export function calcularISV(productos: producto[]) : [number,number] {
    let total = 0;

    productos.forEach(( {precio}) => {
        total += precio;
    })

    return [total,total * 0.15];
}

const articulos = [telefono,tablet];

const [totalf, isvAsd] = calcularISV(articulos);

console.log('Total: ', totalf);
console.log('ISV: ', isvAsd);