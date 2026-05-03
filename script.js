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

let diferencia = Math.abs(numeroSecreto - valor);

if (diferencia > 30){
    mensaje.textContent += "❄️ Muy lejos";
} else if (diferencia > 10) {
    mensaje.textContent += " 🟡 Cerca";
} else {
    mensaje.textContent += "🔥 Muy cerca";
}