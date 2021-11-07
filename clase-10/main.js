//1- entidades/clases
class Residetes {
    constructor(dni,nombre,piso,depto) {
        this.dni = dni;
        this.nombre= nombre;
        this.piso = piso;
        this.depto = depto;
        this.listaNegra = true;
    }
}

//2- variables

let listaPersonas = [],


//3- funciones

//crear persona/residente

const crearResidente = ()=> {
    let dni = document.querySelector("#dni");
    let nombre = document.querySelector("#nombre");
    let piso = document.querySelector("#piso");
    let depto = document.querySelector("#depto");

    const residente = new Residentes(dni,nombre,piso,depto);

    let lista;
    if (localStorage.getItem("listaPersonas") != null) {
        lista = JSON.parse(localStorage.getItem(listaPersonas));
        lista.push(residente);
        localStorage.setItem("listaPersonas", JSON.stringify(lista))
        
    }
    listaPersonas.push(residente);
    return residente

}

//verificacion de storage

const verificarStorage = ()=> {
    let dato = [];
    if (localStorage.getItem("listaPersonas") != null) {
        dato = JSON.parse(localStorage.getItem("listaPersonas"));
        return dato;
        
    }

}
//agregar usuario
const agregarUsuarioLista = (lista)=>{
    lista.push(crearResidente());
    return lista;
}

//guardar
const guardar = ()=>{
    crearResidente();
    if (verificarStorage() != undefined) {
        localStorage.setItem("listaPersonas", JSON.stringify(verificarStorage()));
        
    } else {
        localStorage.setItem("listaPersonas",JSON.stringify(listaPersonas));
    }
}
//eliminar residente

const eliminarResidente = (dni)=>{
    let listaVieja = JSON.parse(localStorage.getItem("listaPersonas"));
    let listaNueva = listaVieja.filter(e => e.dni != dni);

    localStorage.setItem("listaPersonas", JSON.stringify(listaNueva ));
    location.reload();

}


//imprimir tabla
const imprimirDatos = ()=>{
    verificarStorage().forEach(obj => {
        document.getElementById("id").innerHTML += `
        <tr> 
          <td>${obj.dni}</td>
          <td>${obj.nombre}</td>
          <td>${obj.piso}</td>
          <td>${obj.depto}</td>
          <td>${obj.listaNegra}</td>
          <td><button onclick=eliminarResidente${obj.dni}>X</button></td>

        </tr>
        
        `       
    });
}


//4- eventos

document.getElementById("#btnSave").addEventListener("click", (e)=>{
    e.preventDefault();
    guardar();

});

imprimirDatos();