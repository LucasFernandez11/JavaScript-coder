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
//este if valida
if (opcion) {
    while (opcion) {
        let adversario = prompt('ìngrese su heroe para enfrentar a loki');
        if ((adversario != "esc") && (adversario != "") && (adversario != null)) {
            juegoMarvel(adversario);
            opcion = validacion();
        } else {
            alert('dato invalido debilucho');
            opcion = validacion();
        }        
    } 
}else {
    alert('Abandonando el juego')
}

function juegoMarvel(adversario) {
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

}

