function Mascotas(nombre, tipo, dueno, edad, castrado) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.dueno = dueno;
    this.edad = edad;
    this.castrado = castrado;
    this.bio =
};
const simba = new Mascotas("simba", "gato", "yael roufe", 5, true);
console.log(simba);
const mila = new Mascotas("mila", "perro", "fulanito gonzalez", 3, false);
console.log(mila);

/*const crearMascotas = ()=> {
    let nombreMascota= prompt("ingrese nombre de mascota");
    let tipoMascota= prompt("que tipo de mascota es?");
    let nombreDueno= prompt("como te llamas?");
    let edadMascota= prompt("que edad tiene?");
    let estaCastrado= prompt("esta castrado?");

    const mascota2 = new Mascotas(nombreMascota, tipoMascota, nombreDueno,edadMascota,estaCastrado);
    console.log(mascota2);
    console.log(mascota2.bio())
    
    
}*/


parse
class Productos {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
    calcularDescuento() {
        if (this.precio > 1000) {
            this.precio = this.precio *0.9;
            console.log(this.precio);

        }else {
            this.precio = this.precio * 0.95;
            console.log(this.precio);
        }
    }
    comprar(cantidad) {
        if (this.stock > cantidad){
            this.stock = this.stock - cantidad;
            console.log("compraste " + )
        }else {
            console.log("solo quedan " this.stock)
        }
    }

}
const productos = new productos 