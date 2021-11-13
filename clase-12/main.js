const jugadores = [
    { nombre: "Daniel", nivel: 12, id: 1, icon: "avatar-1.png" },
    { nombre: "Ana", nivel: 20, id: 2, icon: "avatar-2.png" },
    { nombre: "Juan", nivel: 5, id: 3, icon: "avatar-3.png" }
  ];

  for (const jugador of jugadores) {
    $("#contenedor-usuarios").append(
      `<div class="caja-usuario" id="${jugador.id}">
      <img src="assets/img/${jugador.icon}">
      <h4>Jugador</h4>
      <p>${jugador.nombre}</p>
      <p>Nivel: ${jugador.nivel}</p>
      </div>`
    )
  }
