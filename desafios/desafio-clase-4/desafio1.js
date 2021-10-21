//validacion para continuar jugando o abandonar el juego
const validacion = () => {
    let seguirJugando = confirm("quiere seguir jugando?");
    if (seguirJugando) {
        alert('Volviendo a pelear')
        return(seguirJugando);
    } else {
        alert('Saliendo del programa')
        return(seguirJugando);
    } 
}
//primer pregunta para iniciar el juego
let opcion = confirm('te animas a enfrentar a loki?');
console.log(opcion);
//este if valida continuar el juego despues de una partida
if (opcion) {
    while (opcion) {
        //usuario ingresa el dato para iniciar
        let adversario = prompt('ìngrese su heroe para enfrentar a loki');
        //verifico que sea un dato valido
        if ((adversario != "esc") && (adversario != "") && (adversario != null)) {
            juegoMarvel(adversario);
            opcion = validacion();
        } else {
            //aviso que el dato no es valido y vuelvo a preguntar
            alert('dato invalido debilucho');
            opcion = validacion();
        }        
    } 
}else {
    //si el dato "opcion" es false abandona el juego
    alert('Abandonando el juego')
}
//funcion para jugar, switch para definir los casos
function juegoMarvel(adversario) {
    //la variable loki cambia dependiendo del dato ingrsado por usuario
    let loki = "";
    switch (adversario) {
        case "ironMan":
            loki = "magneto";
            console.log(`${loki} vs ${adversario}`);
            alert(`loki te enfrentara disfrazado de ${loki}`);
            break;

        case "thor":
            loki = "odin";
            console.log(`${loki} vs ${adversario}`);
            alert(`loki te enfrentara disfrazado de ${loki}`);
            break;

        case "hulk":
            loki = "thanos"
            console.log(`${loki} vs ${adversario}`);
            alert(`loki te enfrentara disfrazado de ${loki}`);
            break;
        case "spiderMan":
            loki = "venom"
            console.log(`${loki} vs ${adversario}`);
            alert(`loki te enfrentara disfrazado de ${loki}`);
            break;
        case "capitan america":
            loki = "soldado del invierno"
            console.log(`${loki} vs ${adversario}`);
            alert(`loki te enfrentara disfrazado de ${loki}`);
            break;
        default:
            loki = "loki"
            console.log(`${loki} vs ${adversario}`);
            alert(`loki te humillara con su poder`);
            break;
    }

};

