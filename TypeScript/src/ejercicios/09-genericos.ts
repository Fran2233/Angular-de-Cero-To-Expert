

/*
===== Código de TypeScript =====

*/

// T significa TIPO GENERICO

function queTipoSoy<T>(argumento: T){
    return argumento;

}


let soyString = queTipoSoy('HolaMundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,]);
let soyExplicito = queTipoSoy<number>(1);




