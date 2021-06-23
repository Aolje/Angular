class PersonaNormal {
    // nombre: string;
    // direccion: string;

    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}
class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'New York , USA');
     }


}


const ironman = new Heroe('Ironman', 45, 'Tony');
// ironman.edad
console.log(' ', ironman);

// interface Personaje {
//     alterEgo: string;
//     edad: number;
//     nombreReal: number;
// }

// private -> Solo es visible dentro de esta clase 
// public  -> Afuera de esta clase alguien puede verlo
// static  -> Se puede acceder sin crear una isntancia de la clase

// Heroe.nombreReal
