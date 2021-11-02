//creando personajes como objetos
class Personajes {
    constructor(src, id, nombre, vida, poderAtt, poderDef, tipo) {
        this.src = src;
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = poderAtt;
        this.defensa = poderDef;
        this.tipo = tipo;
        this.id = id;
    }
    //informacion de personajes para identificarlos
    //agrego e como parametro para mostrar en el html
    PersonjesInfo(e) {
        let info =
        //creo cards de bootstrap
            `
            <div class="card" style="width: 18rem;">
                <img src=${e.src} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5>Personaje numero: ${e.id}</h5>
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
}

//personajes elegidos por el usuario
const personaje1 = new Personajes(
    "https://files.rcnradio.com/public/styles/m_img_680x464/public/2019-04/thor_endgame_1_0.jpeg?itok=BedO9-_V",
    1,
    "thor",
    100,
    80,
    75,
    "electrico"
);
const personaje2 = new Personajes(
    "https://animal.mx/wp-content/uploads/2020/07/hulk_enojado2.jpg",
    2,
    "hulk",
    100,
    100,
    80,
    "destructor"
);
const personaje3 = new Personajes(
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/05/iron-man-2332341.jpg?itok=OpnxllqM",
    3,
    "ironMan",
    100,
    75,
    90,
    "tecnologico"
);
//personajes para enfrentar al usuario
const adversario1 = new Personajes(1, "loki", 110, 75, 90, "magia");
const adversario2 = new Personajes(2, "thanos", 110, 75, 90, "magia");
const adversario3 = new Personajes(3, "magneto", 110, 75, 90, "magia");
//creando arrays de objetos y pusheados
const ListaPersonajes = [];
ListaPersonajes.push(personaje1, personaje2, personaje3);
console.log(ListaPersonajes);

//recorro el array con el forEach y genero el codigo HTML con el inner
ListaPersonajes.forEach((e) => {
    heroesPrint.innerHTML += e.PersonjesInfo(e);
});
const ListaAdversarios = [];
ListaAdversarios.push(adversario1, adversario2, adversario3);
console.log(ListaAdversarios);
//validacion para continuar jugando o abandonar el juego
const validacion = () => {
    let seguirJugando = confirm("quiere seguir jugando?");
    if (seguirJugando) {
        alert("Volviendo a pelear");
        return seguirJugando;
    } else {
        alert("Saliendo del programa");
        return seguirJugando;
    }
};
//agregando metodo setTimeout para que se ejecute el confirm despues de cargar la pagina
setTimeout(() => {
    //primer comentario para ingresar a jugar
    let opcion = confirm("te animas a enfrentar a loki?");

    //este if valida continuar el juego despues de una partida
    if (opcion) {
        while (opcion) {
            //usuario ingresa el dato para iniciar
            let adversario = prompt(
                "ìngrese el numero de su heroe para enfrentar a loki"
            );
            //verifico que sea un dato valido
            if (adversario != "esc" && adversario != "" && adversario != null) {
                juegoMarvel(adversario, ListaAdversarios);
                opcion = validacion();
            } else {
                //aviso que el dato no es valido y vuelvo a preguntar
                alert("dato invalido");
                opcion = validacion();
            }
        }
    } else {
        //si el dato "opcion" es false abandona el juego
        alert("Abandonando el juego");
    }
}, 3000);

function juegoMarvel(personaje, adversario) {
    //la variable loki cambia dependiendo del dato ingrsado por usuario
    let loki = adversario;
    switch (personaje) {
        case "1":
            console.log(`${loki[0].nombre} vs Thor`);
            alert(`loki te enfrentara disfrazado de ${loki[0].nombre}`);
            break;

        case "2":
            console.log(`${loki[1].nombre} vs Hulk`);
            alert(`loki te enfrentara disfrazado de ${loki[1].nombre}`);
            break;

        case "3":
            console.log(`${loki[2].nombre} vs IronMan`);
            alert(`loki te enfrentara disfrazado de ${loki[2].nombre}`);
            break;

        default:
            alert(`dato invalido`);
            break;
    }
}