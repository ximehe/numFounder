let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const input= document.getElementById("InputNumero");
const boton= document.getElementById("btnIntentar");
const mensaje = document.getElementById("mensaje");
const intentosTexto = document.getElementById("intentos");

boton.addEventListener("click", () => {

    const valor = Number(input.value);
    intentos++;

    if (valor === numeroSecreto) {
        mensaje.textContent = "¡Ganaste!";
    } else if (valor < numeroSecreto){
        mensaje.textContent = "El número es mayor";
    } else {
         mensaje.textContent = "El número es menor";
    }

    intentosTexto.textContent = `Intentos: $(intentos)`;
});

