
/*
===== Código de TypeScript =====

*/

// Tipo any no es buena practica
let habilidades: string [] = ['Bash','Counter','Healing']; 


interface Personaje{
    nombre :string;
    hp:number;
    habilidades: string[];
    puebloNatal?: string; /* OPCIONAL */
}

const personaje: Personaje = {
    nombre :'Fran',
    hp : 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo';


console.table(personaje);