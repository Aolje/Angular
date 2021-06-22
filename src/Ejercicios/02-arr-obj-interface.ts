

// console.log('Hola Mundo, todo bien?');

/*
    ===== Código de TypeScript =====
*/
let habilidades: (boolean | string | number)[] = ['bash', 'Cpunter', 'Healing', 100];
habilidades.push(1);
habilidades.push(true);

interface Personaje{
    nombre: string;
    hp:number;
    habilidades: string[];
    puebloNatal?: string;
}
const personaje: Personaje = {
    nombre: 'Stringer',
    hp: 100,
    habilidades: ['bash', ' counter', 'healin']
}

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);



