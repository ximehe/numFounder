let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const input= document.getElementById("inputNumero");
const boton= document.getElementById("btnIntentar");
const mensaje = document.getElementById("mensaje");
const intentosTexto = document.getElementById("intentos");
const historial= document.getElementById("historial");
const btnReiniciar= document.getElementById("btnReiniciar");
const barra = document.getElementById("barraProgreso");

boton.addEventListener("click", () => {

    const valor = Number(input.value);
    let diferencia = Math.abs(numeroSecreto - valor);
    let porcentaje = 100 - (diferencia / 100) * 100;

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
    historial.scrollTop = historial.scrollHeight;

    //Mensaje ganador
    if (valor === numeroSecreto) {
        mensaje.textContent = "¡Ganaste! Reiniciá para jugar de nuevo";

        boton.disabled = true;
        input.disabled = true;
        barra.style.width = "100%";
        barra.style.background = "green";
    } else {
    // Sistema mayor o menor
    if (valor < numeroSecreto){
        mensaje.textContent = "El número es mayor";
    } else {
         mensaje.textContent = "El número es menor";
    }

    //Sistema calor/frío

    if (diferencia > 30){
        mensaje.textContent += "❄️ Muy lejos";
    } else if (diferencia > 10) {
        mensaje.textContent += " 🟡 Cerca";
    } else {
        mensaje.textContent += "🔥 Muy cerca";
    }

    }

    // Barra de porcentaje
    //evitar valores raros
    if (porcentaje < 0) porcentaje = 0;
    barra.style.width = porcentaje + "%";

    if (porcentaje < 10)
        barra.style.background = "#fa4141";
    else if (porcentaje < 20) 
        barra.style.background = "#ee5959"; 
    else if (porcentaje < 30) 
        barra.style.background = "#ec8143";
    else if (porcentaje < 40) 
        barra.style.background = "#eba74f";
    else if (porcentaje < 50) 
        barra.style.background = "#ffd166";
    else if (porcentaje < 80) 
        barra.style.background = "#26a73c";
    else if (porcentaje < 90)
        barra.style.background = "#1f7e2f";
    

    

    //Intentos
    intentosTexto.textContent = `Intentos: ${intentos}`;
    console.log("porcentaje:", porcentaje);
});

input.addEventListener("input", () => {
    input.classList.remove("error");
});

btnReiniciar.addEventListener("click", () => {
    numeroSecreto= Math.floor(Math.random() * 100) + 1;
    intentos = 0;

    mensaje.textContent= "Nuevo juego iniciado 🎮";
    intentosTexto.textContent= "Intentos: 0";
    input.value="";

    historial.innerHTML= "";

    input.classList.remove("error");

    boton.disabled = false;
    input.disabled = false;

    barra.style.width = "0%";
    barra.style.background = "#4da6ff";

});