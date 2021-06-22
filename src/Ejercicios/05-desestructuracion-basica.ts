interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}
interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//Desestructuraciónm de objetos
const autor = 'Fulano';
const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
// const { autor } = detalles;  Alternativa 1
// const { volumen, segundo, cancion, detalles: { autor: autorDetalle <-/apodo o subnombre/ } } = reproductor; Alternativa 2

// console.log('EL volumen actual de: ', volumen);
// console.log('El segundo actual de: ', segundo);
// console.log('La canción actual de: ', cancion);
// console.log('El autor es: ', autorDetalle);


//En la desestructuración de arreglos importa la posición.
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz;
// const [ , , p3] = dbz; Así sería cuando no queremos los demas valores del arreglo y se deja vacia la posición.

// console.log('Persojane 1: ', dbz[0])
// console.log('Persojane 2: ', dbz[1])
// console.log('Persojane 3: ', dbz[2])

console.log('Persojane 1: ', p1)
console.log('Persojane 2: ', p2)
console.log('Persojane 3: ', p3)