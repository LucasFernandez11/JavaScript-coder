const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#btn");

const escribir = () => {
    let texto =prompt("que queres escribir?");
    parrafo.textContent = texto;
}

// como escuchamos eventos

//1- selector.metodo(evento, funcion)

//boton.addEventListener("click", escribir);

//boton.addEventListener("click", ()=>{
  //  escribir();
//})

//2- forma reducida

//boton.onclick = () => {
  //  escribir()} 

  // EVENTOS MECANICOS y EVENTOS DE LOGICA
//mecanicos
// 1- mouse
//   boton.addEventListener("mousemove", ()=> {
//       console.log("me muevo")
//   });

  //2- teclado

  const texto = document.querySelector("#texto");
//   texto.onkeydown = ()=>{
//       console.log(texto.value);
//   }

//LOGICA

texto.onchange = ()=> {
    console.log("el nuevo valor es " + texto.value);
}

const selector = document.querySelector("#selector");
selector.addEventListener("change",()=>{
    console.log(selector.value);
})

boton.onclick = (e)=> {
    e.preventDefault();
    console.log("hace submit");
}

const enlace = document.querySelector("#enlace");
enlace.onclick = (e) => {
    e.preventDefault();
    enlace.style.color = 'red';
}