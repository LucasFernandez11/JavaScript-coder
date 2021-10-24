//creando personajes como objetos 
class Personajes {
    constructor(id, nombre, vida, poderAtt, poderDef, tipo) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = poderAtt;
        this.defensa = poderDef;
        this.tipo = tipo;
        this.id = id
    }
    //informacion de personajes para identificarlos
    PersonjesInfo() {
        let info = `    
    Nombre: ${this.nombre}
    Vida: ${this.vida}
    Ataque: ${this.ataque}
    Defensa: ${this.defensa}
    Tipo: ${this.tipo}
    `;
        alert(`personaje ${this.id}` + info);
    }
}

//personajes elegidos por el usuario
const personaje1 = new Personajes(1, "thor", 100, 80, 75, "electrico");
const personaje2 = new Personajes(2, "hulk", 100, 100, 80, "destructor");
const personaje3 = new Personajes(3, "ironMan", 100, 75, 90, "tecnologico");
//personajes para enfrentar al usuario
const adversario1 = new Personajes(1, "loki", 110, 75, 90, "magia");
const adversario2 = new Personajes(2, "thanos", 110, 75, 90, "magia");
const adversario3 = new Personajes(3, "magneto", 110, 75, 90, "magia");
//creando arrays de objetos y pusheados pusheados
const ListaPersonajes = [];
ListaPersonajes.push(personaje1, personaje2, personaje3);
console.log(ListaPersonajes);
const ListaAdversarios = [];
ListaAdversarios.push(adversario1, adversario2, adversario3);
console.log(ListaAdversarios);
//desafio de ordenar mi array de objetos
//personajes ordenados por su nivel de poder
let listaOrdenada = ListaPersonajes.sort((a,b)=>{
    if ( a.ataque > b.ataque )
            return -1;
        if ( a.ataque < b.ataque )
            return 1;
        return 0;
})
console.log(listaOrdenada);
//llamando mis personajes con su informacion
personaje1.PersonjesInfo();
personaje2.PersonjesInfo();
personaje3.PersonjesInfo();


//validacion para continuar jugando o abandonar el juego
const validacion = () => {
    let seguirJugando = confirm("quiere seguir jugando?");
    if (seguirJugando) {
        alert('Volviendo a pelear')
        return (seguirJugando);
    } else {
        alert('Saliendo del programa')
        return (seguirJugando);
    }
}
//primer comentario para ingresar a jugar
let opcion = confirm('te animas a enfrentar a loki?');
console.log(opcion);
//este if valida continuar el juego despues de una partida
if (opcion) {
    while (opcion) {
        //usuario ingresa el dato para iniciar
        let adversario = prompt('ìngrese el numero de su heroe para enfrentar a loki');
        //verifico que sea un dato valido
        if ((adversario != "esc") && (adversario != "") && (adversario != null)) {


            juegoMarvel(adversario, ListaAdversarios);
            opcion = validacion();
        } else {
            //aviso que el dato no es valido y vuelvo a preguntar
            alert('dato invalido');
            opcion = validacion();
        }
    }
} else {
    //si el dato "opcion" es false abandona el juego
    alert('Abandonando el juego')
}

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
};

