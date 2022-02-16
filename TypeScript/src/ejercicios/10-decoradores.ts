

/*
===== Código de TypeScript =====

*/

// T significa TIPO GENERICO


class MiSuperClase{

    public miPropiedad: string = ' asd1234';

    imprimir(){
        console.log('hola');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);

