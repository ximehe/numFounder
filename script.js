let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const input= document.getElementById("inputNumero");
const boton= document.getElementById("btnIntentar");
const mensaje = document.getElementById("mensaje");
const intentosTexto = document.getElementById("intentos");
const historial= document.getElementById("historial");

boton.addEventListener("click", () => {

    const valor = Number(input.value);

    //Validación de input
    if (!valor || valor < 1 || valor>100){
        mensaje.textContent= "Ingresá un número válido entre 1 y 100";
        input.classList.add("error"); 
        return;
    }

    intentos++;

    //Historial
    const item = document.createElement("li");
    item.textContent = valor;
    historial.appendChild(item);

    if (valor === numeroSecreto) {
        mensaje.textContent = "¡Ganaste!";
    } else {
    // Sistema mayor o menor
    if (valor < numeroSecreto){
        mensaje.textContent = "El número es mayor";
    } else {
         mensaje.textContent = "El número es menor";
    }

    //Sistema calor/frío

    let diferencia = Math.abs(numeroSecreto - valor);

    if (diferencia > 30){
        mensaje.textContent += "❄️ Muy lejos";
    } else if (diferencia > 10) {
        mensaje.textContent += " 🟡 Cerca";
    } else {
        mensaje.textContent += "🔥 Muy cerca";
    }

    }

    intentosTexto.textContent = `Intentos: ${intentos}`;
});

input.addEventListener("input", () => {
    input.classList.remove("error");
});