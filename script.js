let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const input= document.getElementById("inputNumero");
const boton= document.getElementById("btnIntentar");
const mensaje = document.getElementById("mensaje");
const intentosTexto = document.getElementById("intentos");
const historial= document.getElementById("historial");
const btnReiniciar= document.getElementById("btnReiniciar");
const barra = document.getElementById("barraProgreso");

//Frases mayor/menor
const frasesMayor = [
  "🐞 bug: número demasiado bajo",
  "⬆️ Dale, apuntá más alto!",
  "😅 Te quedaste cort@...",
  "📈 Incrementá ese valor!",
  "⬆️ Uuh, ese valor no pasa el test",
  "😄 Te recomiendo probar con algo más grande..."

];

const frasesMenor = [
  "📉 Te pasaste, bajá un cambio",
  "⬇️ Muy arriba, probá menos",
  "😬 Te fuiste al pasto, baja un poco",
  "⚠️ Valor demasiado alto"
];

const frasesLejos = [
  "❄️ Estás en la Antártida",
  "🥶 Ni cerca",
  "🌨️ Frío extremo",
  "🙈 Ni lo rozaste",
  "🛰️ Señal perdida",
  "🐞 Error crítico: lejos del valor"
];

const frasesMedio = [
  "🟡 Vas calentando motores",
  "😏 Mmm, interesante",
  "👀 Te estás acercando",
  "😏 vas mejorando",
  "🤔 no está mal",
  "📊 progreso detectado",
  "🔄 recalculando… vas bien"
];

const frasesCerca = [
  "🔥 ESTÁS AHÍ NOMÁS",
  "😳 casi casi",
  "🚨 zona crítica",
  "😮 estás peligrosamente cerca",
  "⚠️ precisión alta",
  "🏁 casi terminás",
  "🔧 Ajuste mínimo y listo",
  "🔥 Hirviendo "
];

const frasesGanador = [
  "🎉 ¡Le pegaste! Ese era el número. Honestamente, se sintió épico 😎",
  "💥 BOOM, acertaste. No sé si fue suerte o talento, pero cuenta igual 😏",
  "🎯 ¡Exacto! Encontraste el número secreto, misión cumplida",
  "🥳 ¡Bien ahí! Lo encontraste, ahora podés reiniciar y volver a intentarlo",
  "🔥 ¡Perfecto! Ese era el número. Se viene la revancha?",
  "🎉 ¡Listo! Lo resolviste. Ahora no te agrandes tanto 😏",
  "😌 Bien jugado, lo encontraste. Se nota que hubo pensamiento ahí",
  "🏆 Nivel completado. El número secreto fue descubierto con éxito",
  "🎮 Misión cumplida: encontraste el número oculto",
  "🚀 Victoria total. El objetivo fue alcanzado",
  "🎯 Target eliminado. Excelente precisión",
  "🏁 Final perfecto. Listo para la siguiente ronda",
  "✅ Test aprobado. Resultado correcto obtenido",
  "🐞 Bug resuelto: encontraste el valor exacto",
  "⚙️ Deploy completado. Todo funcionando como debería",
  "🧪 Experimento exitoso. Resultado validado",
  "🎉 ¡Le pegaste! El número estaba ahí esperándote 😄",
  "🎈 ¡Ganaste! Ese numerito ya no se esconde más"


];

function randomFrase(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

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
        mensaje.textContent = randomFrase(frasesGanador);

        boton.disabled = true;
        input.disabled = true;
        barra.style.width = "100%";
        barra.style.background = "green";
    } else {
    // Sistema mayor o menor
    if (valor < numeroSecreto){
        mensaje.textContent = randomFrase(frasesMayor);
    } else {
         mensaje.textContent = randomFrase(frasesMenor);
    }

    //Sistema calor/frío

    if (diferencia > 30){
        mensaje.textContent += randomFrase(frasesLejos);
    } else if (diferencia > 10) {
        mensaje.textContent += randomFrase(frasesMedio);
    } else {
        mensaje.textContent += randomFrase(frasesCerca);
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