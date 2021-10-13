//pregunto el nombre al usuario
let nombre = prompt("cual es tu nombre?");
console.log(nombre);
let apellido = prompt("y cual es tu apelledo?")
console.log(apellido);
if ((nombre != "") && (apellido != "")) {
    alert(`Hola ${nombre} ${apellido} bienvenido a nuestra web`);
    //pregunto el anio de nacimiento para saber su edad
    let anioDelUsuario = parseInt(prompt("en que anio naciste?"));
    console.log(anioDelUsuario)
    if (anioDelUsuario === anioDelUsuario) {        
        //declaro una constante para realizar el calculo de la edad
        const ANIO = 2021;
        //calculo la edad en base a mi const y lo ingresado por el usuario
        let calculoEdad = ANIO - anioDelUsuario;
        //utilizo condicional para descartar usuarios menores de edad.
        if (calculoEdad <= 17) {
            alert("Eres un niño no puedes estar en esta web");
            //si son mayores de edad continuo con la interraccion   
        } else if (calculoEdad >= 18) {
            alert("genial! tienes " + calculoEdad + " bienvenido");
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
        };
    }else {
        alert("debes ingresar un anio")
    }
} else {
    alert("disculpa debes ingresar tu nombre para continuar");
};