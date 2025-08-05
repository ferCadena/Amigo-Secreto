// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



//Agrega un nuevo amigo y validamos que no este vacia

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre válido");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();

    // Habilita el botón de sortear si hay al menos un amigo
    if (amigos.length > 0) {
      document.getElementById("botonSortear").disabled = false;
    }
  }
}

//Muestra la lista de amigos
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

//elige al amigo secreto
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}


function reiniciarJuego() {
  amigos = [];
  document.querySelector("#listaAmigos").innerHTML = "";
  document.querySelector("#resultado").innerHTML = "";
  document.querySelector("#amigo").value = "";

  // Deshabilita el botón de sorteo al reiniciar
  document.getElementById("botonSortear").disabled = true;
}