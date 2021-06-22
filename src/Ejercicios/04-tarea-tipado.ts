interface SuperHeroe {
    nombre: string;
    edad: number;
    // Así no es viable lo mejor es crear una nueva interfaz.
    // direccion: {
    //     calle: string;
    //     pais: string;
    //     ciudad: string;
    // };
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);