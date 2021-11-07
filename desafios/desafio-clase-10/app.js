//creando personajes como objetos
class Personajes {
    constructor(src, id, nombre, vida, poderAtt, poderDef, tipo, numero) {
        this.src = src;
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = poderAtt;
        this.defensa = poderDef;
        this.tipo = tipo;
        this.id = id;
        this.numero = numero
    };
    //informacion de personajes para identificarlos
    //agrego e como parametro para mostrar en el html
    PersonjesInfo(e) {
        let info =
            //creo cards de bootstrap
            `
            <div class="card" id=${e.id} style="width: 15rem;">
                <img src=${e.src} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title global">${e.nombre}</h5>
                <h5>Personaje numero: ${e.numero}</h5>
                <p class="card-text global p2">Vida: ${e.vida}</p>
                <p class="card-text global p3">Ataque: ${e.ataque}</p>
                <p class="card-text global p4">Defensa: ${e.defensa}</p>
                <p class="card-text global p5">Tipo: ${e.tipo}</p>
                <button type="button" class="btn btn-danger seleccionar">Seleccionar</button>
                </div>
            </div>  
          `;
        return info;
    };
    AdversariosInfo(e) {
        let info =
            //creo cards de bootstrap
            `
            <div class="card advCard" style="width: 15rem;">
                <img src=${e.src} class="card-img-top" alt="..."/>
                <div class="card-body">               
                    <h5>Adversario numero: ${e.numero}</h5>
                    <h5 class="card-title global">${e.nombre}</h5>
                    <p class="card-text global p2">Vida: ${e.vida}</p>
                    <p class="card-text global p3">Ataque: ${e.ataque}</p>
                    <p class="card-text global p4">Defensa: ${e.defensa}</p>
                    <p class="card-text global p5">Tipo: ${e.tipo}</p>
                </div>
            </div>  
          `;
        return info;
    }
};

//personajes elegidos por el usuario
const personaje1 = new Personajes("https://files.rcnradio.com/public/styles/m_img_680x464/public/2019-04/thor_endgame_1_0.jpeg?itok=BedO9-_V", 0, "thor", 100, 80, 75, "electrico", 1);
const personaje2 = new Personajes("https://animal.mx/wp-content/uploads/2020/07/hulk_enojado2.jpg", 1, "hulk", 100, 100, 80, "destructor", 2);
const personaje3 = new Personajes("https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/05/iron-man-2332341.jpg?itok=OpnxllqM", 2, "ironMan", 100, 75, 90,"tecnologico",3);

const heroesPrint = document.querySelector("#heroesPrint");
const contenedorPrint = document.querySelector(".portada");
const adversariosPrint = document.querySelector("#adversariosPrint");

//personajes para enfrentar al usuario
const adversario1 = new Personajes("https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/07/loki-1-scaled.jpg?fit=1200%2C675&ssl=1", 0, "loki", 110, 75, 90, "magia",1);
const adversario2 = new Personajes("https://media.gq.com.mx/photos/5dec0db85b7e8300097bca15/16:9/w_1280,c_limit/thanos-bebe-marvel.jpg", 1, "thanos", 110, 75, 90, "magia",2);
const adversario3 = new Personajes("https://p4.wallpaperbetter.com/wallpaper/710/631/644/comics-magneto-magneto-marvel-comics-marvel-comics-x-men-hd-wallpaper-preview.jpg", 2, "magneto", 110, 75, 90, "magia",3);
//creando arrays de objetos y pusheados
const ListaPersonajes = [];
ListaPersonajes.push(personaje1, personaje2, personaje3);
console.log(ListaPersonajes);

//recorro el array con el forEach y genero el codigo HTML con el inner
console.log(heroesPrint);
ListaPersonajes.forEach((e) => {
    heroesPrint.innerHTML += e.PersonjesInfo(e);
});
const ListaAdversarios = [];
ListaAdversarios.push(adversario1, adversario2, adversario3);
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("adversarios") == null) {
        localStorage.setItem("adversarios", JSON.stringify(ListaAdversarios));

    }
});


const seleccionar = document.querySelectorAll(".seleccionar");
// funcion para crear un alert
function printAlert(msj, img) {
    Swal.fire({
        title: `${msj}`,
        
        imageUrl: `${img}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
};

//recorre el array y asigna un valor random para que asigne un ganador con el if
seleccionar.forEach((element) => {
    element.addEventListener("click", (e) => {
        //declaro al elemento padre para poder llamar al hijo
        let padre = element.parentElement;
        console.log(padre.firstElementChild.textContent);
        //asigno los valores random para compararlos         
        let poder1 = Math.random() * (1 - 101) + 1
        let poder2 = Math.random() * (1 - 101) + 2
        //llamada en referencia al ID, y el ID es el ID del objeto dentro de la lista
        const llamada = e.target.parentElement.parentElement.id;
        // se usan los indices como parametros y los ID se ponen como numeros de indice (0,1,2 etc) 
        if (true) {
            adversariosPrint.innerHTML = ListaAdversarios[llamada].AdversariosInfo(ListaAdversarios[llamada])           
        }
        
        const advCard = document.querySelectorAll(".advCard");
        advCard.forEach((adv) => {
            eliminarAlert(adv);
        });
        if (poder1 >= poder2) {
            printAlert(`Vencedor ${padre.firstElementChild.textContent}`, "https://depor.com/resizer/SNGbsCZdXRHCdKzYqXzPDvQ9yns=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/5GCGCMOHOJD7NELNUKPXIZH6WA.jpg")
        } else {
            printAlert("Loki te vencio", "https://cdn.colombia.com/sdi/2021/07/07/loki-capitulo-5-resumen-sylvie-tva-old-loki-marvel-studios-932511-0.jpg")
        }
    })
});

//funcion con setTimeout para eliminar el alert
function eliminarAlert(elemento) {
    setTimeout(() => {
        elemento.remove()
    }, 6000);
};