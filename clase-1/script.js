//pregunto el nombre al usuario
let nombre = prompt("como te llamas?");
console.log(nombre);

//doy la bienvenida al usuario
alert("hola " + nombre + " bienvenid@ a nuestra web!");
//pregunto el anio de nacimiento para saber su edad
let anioDelUsuario = parseInt(prompt("en que anio naciste?"));
console.log(anioDelUsuario);
//declaro una constante para realizar el calculo de la edad
const ANIO = 2021;
//calculo la edad en base a mi const y lo ingresado por el usuario
let calculoEdad = ANIO - anioDelUsuario;
//le muestro al usuario su edad calculada
if (calculoEdad <= 17) {
    alert("Eres un niño no puedes estar en esta web");    
} else if(calculoEdad >= 18 && calculoEdad <= 40) {
    alert("Sos un joven! bienvenido");
 
console.log(calculoEdad);
//consulto la nacionalidad al usuario
let origenUsuario = prompt("de que pais nos visitas?");
console.log(origenUsuario);
alert(origenUsuario + "? increible!");
//consulto el clima de su pais
let climaUsuario = prompt("como esta el clima por " + origenUsuario + "?");
//declaro un const para mi respuesta
const CLIMA = "primavera";
console.log(climaUsuario);
alert(climaUsuario + " de verdad? por aca ya es " + CLIMA + " se vienen dias lindos");
//datos extraidos del usuario: nombre, edad, nacionalidad
}


