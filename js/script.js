let usuarioId = document.getElementById("userInput");
let cuentaAtras = document.getElementById("countdown");
let resultado = document.getElementById("result");
let empezar = document.getElementById("restart");

let eleccionUsuarioDOM = document.createElement("div");
let eleccionPcDOM = document.createElement("div");

document.body.appendChild(eleccionUsuarioDOM);
document.body.appendChild(eleccionPcDOM);

//let eleccionUsuario;
//let eleccionPc
let intervalo;

empezar.addEventListener("click", () => {
  resultado.textContent = "";
  usuarioId.value = "";
  clearInterval(intervalo);
  startCountdown();
});

/*El juego genera un número aleatorio del 1 al 3*/

let randomPc = () => {
  let pc = Math.floor(Math.random() * 3) + 1;
  console.log(pc);
  return pc;
};
randomPc();

/* presenta una cuenta atrás de 5 segundos*/

let startCountdown = (segundos = 5) => {
  let counter = segundos;
  const intervalo = setInterval(() => {
    cuentaAtras.textContent = "Cuenta atras: " + counter + " Segundos";
    console.log(counter);
    counter--;
    if (counter < 0) {
      clearInterval(intervalo);
      startJuego();
    }
  }, 1000);
};
//startCountdown();

/*compara el número aleatorio con el número 
introducido por el usuario, crear eleccion a cada uno, subir arriba*/

let startJuego = () => {
  let eleccionUsuario = parseInt(usuarioId.value);
  let eleccionPc = randomPc();
  eleccionUsuarioDOM.textContent = "Your choice: " + eleccionUsuario;
  eleccionPcDOM.textContent = " PC choice : " + eleccionPc;

  if (eleccionUsuario === eleccionPc) {
    resultado.textContent = "¡Has salvado el mundo 👑!";
  } else {
    resultado.textContent = " ¡La bomba ha estallado 💣! ";
  }
};
