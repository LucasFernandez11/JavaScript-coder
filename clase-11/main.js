console.log(document.getElementById("nombre"));
console.log(document.getElementsByClassName("heading2"));
console.log(document.querySelector("h1"));


//jQuery

/* Para usar jquery se coloca el signo $ y se usan los mismos selectores que en css para llamar el dom */

console.log($("#nombre, h2"));
console.log($(".heading2"));
console.log($("h1"));
console.log($(".div p:nth-child(odd)"));

// document.getElementById("btn").addEventListener("click", () => {
//     console.log("hola");
    
// })
 
/* JQUERY NOS TRAE UN ARRAY Y SE DEBE TRATAR COMO UN ARRAY, NO SE PUEDEN AGREGAR ACCIONES COMO A UN OBJETO*/ 
/*ESTO NO SE DEBE HACER, NO FUNCIONA*/
// $("#btn").addEventListener("click", () => {
//     console.log("hola");
    
// })
