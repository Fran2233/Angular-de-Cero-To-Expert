

/*
===== Código de TypeScript =====

*/

class PersonaNormal{

    constructor(
        public nombre:string, 
        public direccion:string){
    }

}

class Hero extends PersonaNormal {

    constructor(
        public alterEgo:string,
        public edad: number,
        public nombreReal: string
        ){
            super(nombreReal, 'New York');
        }
}

                        // STATIC es paraa acceder sin crear una instancia


const ironman = new Hero('Ironman',40,'Tony');

console.log(ironman);
