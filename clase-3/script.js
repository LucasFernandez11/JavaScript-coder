//bucle for
let num = parseInt(prompt("ingrese un numero"));

for (let i = 1; i<=10; i++) {
    let resultado = num * i;
    console.log(num + "x" + i + "=" + resultado);

}
// bucle for con condicional dentro
for (let i = 1; i <= 10 ; i++) {
    
    if (i==2) {
        for (let j = 2 ; j < 5 ; j++){
            let resultado = 1 *  j;
            console.log(i +"x" + j + "=" + resultado);
           
        }
        
    }
    if (i == 5) {
        continue;        
    }
    console.log(i);
    
}
//bucle while

let pass = 1234;
let dato = parseInt(prompt("ingrese su contraseña"));
let intentos = 3;

while ((dato  != pass) && (intentos > 0)) {
    alert("contraseña equivocada")
    dato= parseInt(prompt("ingrese su contraseña"));
    intentos--;
    break   
}

